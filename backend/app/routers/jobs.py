import secrets
from io import BytesIO
from datetime import datetime, timedelta, timezone
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status, Response
from fastapi.responses import FileResponse, StreamingResponse
from sqlalchemy.orm import Session


from app.config import get_settings
from app.database import get_db
from app.dependencies import get_current_user
from app.models.download_token import DownloadToken
from app.utils.time import get_ist_now_naive
from app.models.job import Job, JobStatus
from app.models.user import User
from app.schemas import BulkDownloadRequest, JobListItem
from app.services.job_service import create_batch_jobs, create_multiple_jobs_from_files, create_single_job
from app.services.log_service import log_activity
from app.services.storage_service import ensure_drive_sync_tree_for_user, get_drive_sync_company_folder


settings = get_settings()
router = APIRouter(prefix="/jobs", tags=["jobs"])


def _as_utc(dt: datetime) -> datetime:
    if dt.tzinfo is None:
        return dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def _get_job_completed_path(job: Job) -> Path | None:
    # 1. Try primary path in database
    if job.completed_path:
        path = Path(job.completed_path)
        if path.exists():
            return path
            
    # 2. Search in ALL user folders within drive_sync (stone and done) for a match
    from app.config import get_settings
    settings = get_settings()
    sync_root = settings.drive_sync_root
    
    filename_to_match = job.upload_filename or f"{job.stone_id}"
    print(f"DEBUG: Starting global search for file matching: {filename_to_match}")
    
    # Iterate through all subfolders in drive_sync (one for each user/company)
    if sync_root.exists():
        for user_folder in sync_root.iterdir():
            if not user_folder.is_dir(): continue
            print(f"DEBUG: Checking user folder: {user_folder.name}")
            
            # Check 'stone' and 'done' subfolders
            for sub in ["stone", "done"]:
                folder = user_folder / sub
                if not folder.exists(): continue
                print(f"DEBUG: Searching in: {folder}")
                
                # Try exact filename match
                target = folder / filename_to_match
                if target.exists():
                    print(f"DEBUG: Found EXACT match: {target}")
                    return target
                
                # Try Stone ID match (case-insensitive)
                for f in folder.iterdir():
                    if f.is_file() and (f.name.lower() == filename_to_match.lower() or 
                                        f.name.lower().startswith(job.stone_id.lower())):
                        print(f"DEBUG: Found PARTIAL/CASE match: {f}")
                        return f
    return None



def _safe_delete_file(path_value: str | None) -> None:
    if not path_value:
        return
    path = Path(path_value)
    if path.exists() and path.is_file():
        path.unlink(missing_ok=True)


def _remove_user_stone_files(username: str, stone_id: str) -> int:
    ensure_drive_sync_tree_for_user(username)
    stone_dir = get_drive_sync_company_folder(username) / "stone"
    removed = 0
    for file_path in stone_dir.glob(f"{stone_id}*"):
        if file_path.is_file():
            file_path.unlink(missing_ok=True)
            removed += 1
    return removed


@router.post("/upload")
def upload_job(
    stone_id: str = Form(...),
    weight: float = Form(...),
    file: UploadFile = File(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    job = create_single_job(db, user, stone_id, weight, file)
    return {
        "id": job.id,
        "stone_id": job.stone_id,
        "weight": job.weight,
        "status": job.status,
        "upload_filename": job.upload_filename,
    }


@router.post("/batch-upload")
def batch_upload(
    file: UploadFile = File(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return create_batch_jobs(db, user, file)


@router.post("/upload-multiple")
def upload_multiple_jobs(
    weight: float | None = Form(None),
    files: list[UploadFile] = File(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return create_multiple_jobs_from_files(db, user, weight, files)


@router.get("/list", response_model=list[JobListItem])
def list_jobs(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    jobs = db.query(Job).filter(Job.user_id == user.id).order_by(Job.created_at.asc()).all()
    return jobs


@router.get("/summary")
def job_summary(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(Job.status).filter(Job.user_id == user.id).all()
    counts = {
        "uploaded": 0,
        "queued": 0,
        "processing": 0,
        "completed": 0,
        "failed": 0,
    }
    for (status_value,) in rows:
        key = str(status_value.value if hasattr(status_value, "value") else status_value).lower()
        if key in counts:
            counts[key] += 1

    total = len(rows)
    pending = counts["uploaded"] + counts["queued"]
    return {
        "total": total,
        "processed": counts["completed"],
        "pending": pending,
        "failed": counts["failed"],
        "uploaded": counts["uploaded"],
        "queued": counts["queued"],
        "processing": counts["processing"],
    }


@router.post("/download")
def create_download_link(job_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id, Job.user_id == user.id).first()
    if not job or job.status != JobStatus.completed or not job.completed_path:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Completed file not found")

    token = secrets.token_urlsafe(24)
    expires_at = get_ist_now_naive() + timedelta(minutes=settings.download_link_expire_minutes)
    row = DownloadToken(token=token, user_id=user.id, job_id=job.id, expires_at=expires_at)
    db.add(row)
    db.commit()
    return {"download_url": f"/jobs/download/{token}", "expires_at": expires_at}


@router.delete("/{job_id}")
def delete_job(job_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not user.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Only admins can delete jobs")
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")

    db.query(DownloadToken).filter(DownloadToken.job_id == job.id).delete(synchronize_session=False)
    _safe_delete_file(job.upload_path)
    _safe_delete_file(job.completed_path)
    
    owner = db.query(User).filter(User.id == job.user_id).first()
    owner_username = owner.username if owner else user.username
    removed_from_stone = _remove_user_stone_files(owner_username, job.stone_id)

    db.delete(job)
    db.commit()
    
    action = "admin_delete_job" if user.is_admin else "user_delete_job"
    log_activity(db, action, f"Deleted job {job.id} ({job.stone_id}), removed_stone_files={removed_from_stone}", user.id)
    return {"message": "Job deleted", "job_id": job_id, "removed_stone_files": removed_from_stone}


@router.get("/{job_id}/completed")
def download_completed_direct(job_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id, Job.user_id == user.id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    path = _get_job_completed_path(job)
    if not path:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="For File Contact To Admin")

    job.downloaded = True
    db.commit()

    log_activity(db, "file_download", f"Downloaded result for job {job.id} from {path.name}", user.id)
    return FileResponse(path=path, filename=path.name)


@router.post("/download-bulk")
def download_completed_bulk(
    payload: BulkDownloadRequest,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    jobs = (
        db.query(Job)
        .filter(Job.user_id == user.id, Job.id.in_(payload.job_ids), Job.status == JobStatus.completed)
        .all()
    )
    if not jobs:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No completed files found for selected jobs")

    zip_buffer = BytesIO()
    added = 0
    with ZipFile(zip_buffer, mode="w", compression=ZIP_DEFLATED) as archive:
        for job in jobs:
            path = _get_job_completed_path(job)
            if not path or not path.exists():
                continue
            archive.write(path, arcname=path.name)
            job.downloaded = True
            added += 1

    if added == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Selected completed files are missing on storage")

    db.commit()

    zip_buffer.seek(0)
    zip_data = zip_buffer.getvalue()
    timestamp = get_ist_now_naive().strftime("%Y%m%d_%H%M%S")
    filename = f"completed_stones_{timestamp}.zip"
    
    headers = {
        "Content-Disposition": f'attachment; filename="{filename}"',
        "Content-Length": str(len(zip_data)),
        "Access-Control-Expose-Headers": "Content-Disposition, Content-Length"
    }
    log_activity(db, "bulk_file_download", f"Downloaded {added} completed files as zip", user.id)
    return Response(content=zip_data, media_type="application/zip", headers=headers)


@router.get("/download/{token}")
def download_file(token: str, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    row = db.query(DownloadToken).filter(DownloadToken.token == token).first()
    now = get_ist_now_naive()
    if not row or row.user_id != user.id or _as_utc(row.expires_at) < now:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Download link is invalid or expired")

    job = db.query(Job).filter(Job.id == row.job_id, Job.user_id == user.id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")

    path = _get_job_completed_path(job)
    if not path:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File missing on storage")

    job.downloaded = True
    db.commit()

    log_activity(db, "file_download", f"Downloaded result for job {job.id}", user.id)
    return FileResponse(path=path, filename=path.name)

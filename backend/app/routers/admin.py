from datetime import datetime, timezone
from typing import Optional
from pathlib import Path
import secrets
import shutil

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status, Response
from fastapi.responses import FileResponse
from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.billing.service import sync_user_invoice_for_month, create_account_statement_pdf
from app.config import get_settings
from app.database import get_db
from app.utils.time import get_ist_now_naive

settings = get_settings()
from app.dependencies import get_current_admin
from app.models.activity_log import ActivityLog
from app.models.job import Job, JobStatus
from app.models.user import User
from app.models.invoice import Invoice
from app.models.price_config import PriceConfig
from app.models.account_profit import AccountProfit
from app.models.download_token import DownloadToken
from app.schemas import DashboardStats, SetPriorityRequest, PriceConfigUpdate, UpdateWeightRequest, ApplyRetroactivePricingRequest, AccountProfitCreate, AccountProfitUpdate, BulkDownloadRequest
from app.services.drive_sync_service import get_drive_sync_status
from app.services.log_service import log_activity
from app.services.storage_service import (
    delete_user_storage,
    ensure_drive_sync_tree_for_user,
    get_user_folder,
    save_upload_file,
)


router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/jobs")
def all_jobs(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    jobs = db.query(Job).order_by(Job.created_at.asc()).all()
    users = {u.id: u for u in db.query(User).all()}
    return [
        {
            "id": j.id,
            "user": users.get(j.user_id).company_name if users.get(j.user_id) else "Unknown",
            "stone_id": j.stone_id,
            "weight": j.weight,
            "upload_time": j.created_at,
            "status": j.status,
            "priority": j.priority,
            "upload_available": bool(j.upload_path),
            "upload_filename": j.upload_filename,
            "completed_available": bool(j.completed_path),
            "completed_filename": j.completed_filename,
            "queue_entered_at": j.queue_entered_at,
            "processing_started_at": j.processing_started_at,
            "completed_at": j.completed_at,
            "rate_per_carat": j.rate_per_carat,
            "downloaded": j.downloaded,
        }
        for j in jobs
    ]


@router.get("/jobs/{job_id}/upload")
def download_uploaded_file(job_id: int, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job or not job.upload_path:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Uploaded file not found")
    path = Path(job.upload_path)
    if not path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Uploaded file missing on storage")
    job.downloaded = True
    job.status = JobStatus.processing
    db.commit()
    return FileResponse(path=path, filename=path.name)


@router.post("/jobs/download-bulk")
def download_uploaded_bulk(
    payload: BulkDownloadRequest,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    from zipfile import ZIP_DEFLATED, ZipFile
    from io import BytesIO
    _ = admin
    
    # Filter only jobs that are NOT downloaded yet and match selected ids
    jobs = (
        db.query(Job)
        .filter(Job.id.in_(payload.job_ids), Job.downloaded == False)
        .all()
    )
    if not jobs:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No new (non-downloaded) uploaded files found for selected jobs")

    zip_buffer = BytesIO()
    added = 0
    with ZipFile(zip_buffer, mode="w", compression=ZIP_DEFLATED) as archive:
        for job in jobs:
            if not job.upload_path:
                continue
            path = Path(job.upload_path)
            if not path.exists():
                continue
            archive.write(path, arcname=path.name)
            job.downloaded = True
            job.status = JobStatus.processing
            added += 1

    if added == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Selected uploaded files are missing on storage")

    db.commit()

    zip_buffer.seek(0)
    zip_data = zip_buffer.getvalue()
    timestamp = get_ist_now_naive().strftime("%Y%m%d_%H%M%S")
    filename = f"uploaded_stones_{timestamp}.zip"
    
    headers = {
        "Content-Disposition": f'attachment; filename="{filename}"',
        "Content-Length": str(len(zip_data)),
        "Access-Control-Expose-Headers": "Content-Disposition, Content-Length"
    }
    log_activity(db, "admin_bulk_file_download", f"Admin downloaded {added} uploaded files as zip", admin.id)
    return Response(content=zip_data, media_type="application/zip", headers=headers)


@router.get("/jobs/{job_id}/completed")
def download_completed_file(job_id: int, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job or not job.completed_path:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Completed file not found")
    path = Path(job.completed_path)
    if not path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Completed file missing on storage")
    return FileResponse(path=path, filename=path.name)


@router.get("/jobs/summary")
def jobs_summary(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    rows = db.query(Job.status).all()
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


from app.services.pricing_service import get_price_for_weight

@router.get("/dashboard", response_model=DashboardStats)
def dashboard(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    now = get_ist_now_naive()
    # Only count approved clients in the general stats
    total_users = db.query(func.count(User.id)).filter(User.is_admin == False, User.status == "approved").scalar() or 0
    pending_users_count = db.query(func.count(User.id)).filter(User.is_admin == False, User.status == "pending").scalar() or 0
    total_uploaded_jobs = db.query(func.count(Job.id)).scalar() or 0
    processing_jobs = db.query(func.count(Job.id)).filter(Job.status == JobStatus.processing).scalar() or 0
    completed_jobs = db.query(func.count(Job.id)).filter(Job.status == JobStatus.completed).scalar() or 0

    # Calculate monthly revenue by applying weight-based pricing
    monthly_jobs = (
        db.query(Job, User.rate_per_carat)
        .join(User, User.id == Job.user_id)
        .filter(Job.status == JobStatus.completed)
        .filter(extract("year", Job.completed_at) == now.year)
        .filter(extract("month", Job.completed_at) == now.month)
        .all()
    )
    
    monthly_revenue_value = 0.0
    for j, default_rate in monthly_jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(default_rate))
        monthly_revenue_value += float(j.weight) * float(rate)

    return DashboardStats(
        total_users=total_users,
        total_uploaded_jobs=total_uploaded_jobs,
        processing_jobs=processing_jobs,
        completed_jobs=completed_jobs,
        monthly_revenue=round(float(monthly_revenue_value), 2),
        pending_users_count=pending_users_count,
    )


@router.post("/process")
def start_processing(job_id: int = Form(...), admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")

    if job.status == JobStatus.completed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Completed job cannot be re-processed")
    if job.status == JobStatus.failed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Failed job must be re-queued before processing")

    job.status = JobStatus.processing
    job.processing_started_at = get_ist_now_naive()
    db.commit()
    log_activity(db, "admin_process", f"Admin {admin.username} started job {job.id}", admin.id)
    return {"message": "Job moved to processing", "job_id": job.id}


@router.post("/upload-result")
def upload_result(
    job_id: int = Form(...),
    file: UploadFile = File(...),
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")
    # Save to internal storage (Server's permanent record)
    completed_dir = get_user_folder("completed", job.user_id)
    safe_name = Path(file.filename).name
    target_path = completed_dir / safe_name
    
    # Ensure we are at the start of the file
    file.file.seek(0)
    with target_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Also sync to drive_sync if user is approved
    owner = db.query(User).filter(User.id == job.user_id).first()
    if owner and owner.status == "approved":
        try:
            drive_root = ensure_drive_sync_tree_for_user(owner.username)
            done_folder = drive_root / "done"
            # We use the original filename for the drive sync done folder
            drive_target = done_folder / file.filename
            file.file.seek(0)
            with drive_target.open("wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
        except Exception as e:
            print(f"Warning: Failed to sync to drive: {e}")

    # Point database to the internal file
    job.completed_path = str(target_path)
    job.status = JobStatus.completed
    job.downloaded = False
    job.completed_at = get_ist_now_naive()
    
    # Lock in the rate only if it hasn't been set yet (to preserve the price at time of upload)
    if job.rate_per_carat is None:
        job.rate_per_carat = get_price_for_weight(db, float(job.weight), float(owner.rate_per_carat), at_time=job.created_at, user_id=owner.id)
    
    db.commit()

    completed_at = job.completed_at
    if completed_at and owner:
        invoice_dir = get_user_folder("invoices", owner.id)
        invoice_path = invoice_dir / f"invoice_{completed_at.year:04d}-{completed_at.month:02d}.pdf"
        sync_user_invoice_for_month(db, owner, completed_at.year, completed_at.month, invoice_path)

    log_activity(db, "admin_upload_result", f"Admin {admin.username} uploaded result for job {job.id}", admin.id)
    return {"message": "Result uploaded and job completed", "job_id": job.id}


@router.post("/priority")
def set_priority(payload: SetPriorityRequest, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == payload.job_id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")

    job.priority = payload.priority
    if job.status == JobStatus.uploaded:
        job.status = JobStatus.queued
    db.commit()
    log_activity(db, "admin_set_priority", f"Admin {admin.username} set priority={payload.priority} for job {job.id}", admin.id)
    return {"message": "Priority updated", "job_id": job.id, "priority": job.priority}



@router.post("/update-weight")
def update_weight(payload: UpdateWeightRequest, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == payload.job_id).first()
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")
    
    # Update weight
    job.weight = payload.weight
    
    # Always recalculate rate when weight is manually changed, 
    # but it stays locked in the job record until next manual change.
    owner = db.query(User).filter(User.id == job.user_id).first()
    if owner:
        job.rate_per_carat = get_price_for_weight(db, float(job.weight), float(owner.rate_per_carat), at_time=job.created_at, user_id=owner.id)
        
    now = get_ist_now_naive()
    db.commit()

    if job.status == JobStatus.completed and owner:
        completed_at = job.completed_at
        if completed_at:
            invoice_dir = get_user_folder("invoices", owner.id)
            invoice_path = invoice_dir / f"invoice_{completed_at.year:04d}-{completed_at.month:02d}.pdf"
            sync_user_invoice_for_month(db, owner, completed_at.year, completed_at.month, invoice_path)

    log_activity(db, "admin_update_weight", f"Admin {admin.username} updated weight to {payload.weight} and recalculated price for job {job.id} at {now.isoformat()}", admin.id)
    return {"message": "Weight and Price updated", "job_id": job.id, "weight": job.weight, "rate_per_carat": job.rate_per_carat}


@router.post("/bulk-update-weights")
def bulk_update_weights(
    user_id: int = Form(...),
    file: UploadFile = File(...),
    stone_id_col: str = Form("Stone ID"),
    weight_col: str = Form("Weight"),
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    import pandas as pd
    # Parse file
    ext = Path(file.filename or "").suffix.lower()
    try:
        if ext == ".csv":
            df = pd.read_csv(file.file)
        elif ext in {".xlsx", ".xls"}:
            df = pd.read_excel(file.file)
        else:
            raise HTTPException(status_code=400, detail="File must be CSV or Excel")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to read file: {e}")

    # Required columns
    df.columns = [c.strip() for c in df.columns]
    
    def find_column(label):
        # 1. Exact match
        if label in df.columns: return label
        
        # 2. Index match (e.g., "Column 1" -> index 0)
        if label.lower().startswith("column "):
            try:
                idx = int(label.split(" ")[1]) - 1
                if 0 <= idx < len(df.columns):
                    return df.columns[idx]
            except: pass
            
        # 3. Case-insensitive match
        for c in df.columns:
            if c.lower() == label.lower(): return c
        return None

    s_col = find_column(stone_id_col)
    w_col = find_column(weight_col)

    if s_col and w_col:
        # If columns are same, it might be an error in selection
        if s_col == w_col and stone_id_col != weight_col:
            pass # Allow if user explicitly mapped both to same (unlikely but possible)
        df.rename(columns={s_col: "Stone ID", w_col: "Weight"}, inplace=True)
    else:
        raise HTTPException(status_code=400, detail=f"Required columns not found. Looked for: '{stone_id_col}' and '{weight_col}'. Available: {list(df.columns)}")

    updated = 0
    skipped = 0
    not_found = []

    # Get all jobs for this user (including queued, processing, and completed to support bulk update from job queue)
    jobs = db.query(Job).filter(Job.user_id == user_id).order_by(Job.created_at.asc()).all()
    job_map = {j.stone_id.strip().lower(): j for j in jobs}

    for _, row in df.iterrows():
        raw_id = str(row["Stone ID"]).strip()
        # Strip extension if present (e.g. "STONE123.adv" -> "STONE123")
        s_id_stem = Path(raw_id).stem.lower()
        
        try:
            w = float(row["Weight"])
        except:
            skipped += 1
            continue

        if s_id_stem in job_map:
            job = job_map[s_id_stem]
            job.weight = w
            # Recalculate rate based on new weight
            owner = db.query(User).filter(User.id == user_id).first()
            if owner:
                job.rate_per_carat = get_price_for_weight(db, float(job.weight), float(owner.rate_per_carat), at_time=job.created_at, user_id=user_id)
            updated += 1
        else:
            not_found.append(raw_id)
            skipped += 1

    db.commit()
    
    # Also sync invoices since weights changed
    now = get_ist_now_naive()
    owner = db.query(User).filter(User.id == user_id).first()
    if owner:
        invoice_dir = get_user_folder("invoices", owner.id)
        invoice_path = invoice_dir / f"invoice_{now.year:04d}-{now.month:02d}.pdf"
        sync_user_invoice_for_month(db, owner, now.year, now.month, invoice_path)

    log_activity(db, "admin_bulk_weight_update", f"Admin {admin.username} bulk updated {updated} weights for user {user_id} at {now.isoformat()}", admin.id)
    
    return {
        "updated": updated,
        "skipped": skipped,
        "not_found": not_found
    }


@router.get("/activity-logs")
def activity_logs(
    filter_type: str = "DEFAULT", # DEFAULT, DAYS, RANGE
    dates: Optional[str] = None,   # "2024-05-10,2024-05-11"
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    admin: User = Depends(get_current_admin), 
    db: Session = Depends(get_db)
):
    _ = admin
    query = db.query(ActivityLog)
    
    if filter_type == "DEFAULT":
        from datetime import date, timedelta
        today = date.today()
        yesterday = today - timedelta(days=1)
        query = query.filter(func.date(ActivityLog.created_at) >= yesterday)
    elif filter_type == "DAYS" and dates:
        date_list = [d.strip() for d in dates.split(",")]
        query = query.filter(func.date(ActivityLog.created_at).in_(date_list))
    elif filter_type == "RANGE" and start_date and end_date:
        query = query.filter(func.date(ActivityLog.created_at) >= start_date)
        query = query.filter(func.date(ActivityLog.created_at) <= end_date)
        
    rows = query.order_by(ActivityLog.created_at.desc()).limit(1000).all()
    return [{"action": r.action, "details": r.details, "created_at": r.created_at} for r in rows]


@router.get("/pending-requests")
def get_pending_requests(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    pending = db.query(User).filter(User.status == "pending").all()
    return [{"id": u.id, "company_name": u.company_name, "username": u.username, "created_at": u.created_at} for u in pending]


@router.post("/approve-request/{pending_id}")
def approve_request(pending_id: int, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    pending = db.query(User).filter(User.id == pending_id, User.status == "pending").first()
    if not pending:
        raise HTTPException(status_code=404, detail="Pending request not found")
    
    pending.status = "approved"
    db.commit()
    
    # Create storage
    ensure_drive_sync_tree_for_user(pending.username)
    
    log_activity(db, "admin_approve_user", f"Admin {admin.username} approved user {pending.username}", admin.id)
    return {"message": "User approved and storage folders created"}


@router.post("/reject-request/{pending_id}")
def reject_request(pending_id: int, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    pending = db.query(User).filter(User.id == pending_id, User.status == "pending").first()
    if not pending:
        raise HTTPException(status_code=404, detail="Pending request not found")
    
    username = pending.username
    db.delete(pending)
    db.commit()
    
    log_activity(db, "admin_reject_user", f"Admin {admin.username} rejected pending request from {username}", admin.id)
    return {"message": "Pending request rejected and deleted"}


@router.get("/drive-sync-status")
def drive_sync_status(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    return get_drive_sync_status(db)


@router.post("/delete-user/{user_id}")
def delete_user(user_id: int, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.is_admin:
        raise HTTPException(status_code=403, detail="Cannot delete admin user")
    
    username = user.username
    
    # 1. Delete associated storage (uploads, processing, drive_sync etc)
    delete_user_storage(user.id, user.username)
    
    # 2. Delete related database entries (Using synchronize_session=False to avoid FK issues with pending session state)
    db.query(ActivityLog).filter(ActivityLog.user_id == user.id).delete(synchronize_session=False)
    db.query(Job).filter(Job.user_id == user.id).delete(synchronize_session=False)
    db.query(Invoice).filter(Invoice.user_id == user.id).delete(synchronize_session=False)
    db.query(PriceConfig).filter(PriceConfig.user_id == user.id).delete(synchronize_session=False)
    db.query(DownloadToken).filter(DownloadToken.user_id == user.id).delete(synchronize_session=False)
    db.query(AccountProfit).filter(AccountProfit.user_id == user.id).delete(synchronize_session=False)
    
    # 3. Delete user from database
    db.delete(user)
    db.commit()
    
    log_activity(db, "admin_delete_user", f"Admin {admin.username} deleted user {username}", admin.id)
    return {"message": f"User {username} and all associated data deleted"}


@router.get("/price-config")
def get_price_config(user_id: Optional[int] = None, include_history: bool = False, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    query = db.query(PriceConfig)
    if user_id:
        query = query.filter(PriceConfig.user_id == user_id)
    else:
        query = query.filter(PriceConfig.user_id == None)
    if not include_history:
        query = query.filter(PriceConfig.valid_to == None)
    rows = query.order_by(PriceConfig.valid_from.desc(), PriceConfig.sort_order).all()
    if not rows and user_id:
        query = db.query(PriceConfig).filter(PriceConfig.user_id == None)
        if not include_history:
            query = query.filter(PriceConfig.valid_to == None)
        rows = query.order_by(PriceConfig.valid_from.desc(), PriceConfig.sort_order).all()
        
    if not rows:
        return [
            {"weight": "0.50 TO 0.99", "price": "75", "updated_at": None},
            {"weight": "1.00 TO 2.49", "price": "210", "updated_at": None},
            {"weight": "2.50 TO 3.99", "price": "285", "updated_at": None},
            {"weight": "4.00 TO 4.99", "price": "330", "updated_at": None},
            {"weight": "5.00 TO 6.99", "price": "390", "updated_at": None},
            {"weight": "7.00 TO 9.99", "price": "550", "updated_at": None},
            {"weight": "10.00 TO 19.99", "price": "570", "updated_at": None},
            {"weight": "20.00 TO 24.99", "price": "600", "updated_at": None},
            {"weight": "25CT UP", "price": "700", "updated_at": None},
        ]
    return [
        {
            "id": r.id, "weight": r.weight_range, "price": r.price_per_carat, 
            "updated_at": r.updated_at, "valid_from": r.valid_from, "valid_to": r.valid_to
        } for r in rows
    ]


@router.post("/price-config")
def update_price_config(payload: PriceConfigUpdate, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    now = get_ist_now_naive()
    
    # 1. Mark current active prices for THIS USER (or global if user_id is None) as "closed"
    db.query(PriceConfig).filter(
        PriceConfig.user_id == payload.user_id,
        PriceConfig.valid_to == None
    ).update({"valid_to": now})
    
    # 2. Add new version of prices
    for i, item in enumerate(payload.items):
        db.add(PriceConfig(
            user_id=payload.user_id,
            weight_range=item.weight, 
            price_per_carat=item.price, 
            sort_order=i,
            valid_from=now
        ))
    
    db.commit()
    target_desc = f"user {payload.user_id}" if payload.user_id else "global"
    log_activity(db, "admin_update_pricing", f"Admin {admin.username} updated {target_desc} pricing table at {now.isoformat()}", admin.id)
    return {"message": "Pricing updated successfully"}


@router.post("/apply-pricing-retroactive")
def apply_pricing_retroactive(payload: ApplyRetroactivePricingRequest, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    # 1. Get jobs for the user created after from_date
    query = db.query(Job).filter(Job.created_at >= payload.from_date)
    if payload.user_id:
        query = query.filter(Job.user_id == payload.user_id)
        owner = db.query(User).filter(User.id == payload.user_id).first()
    else:
        # If no user_id, we can't easily find a "default_rate" for each user in one go without a join
        # But usually this is called per-client.
        raise HTTPException(status_code=400, detail="Please select a specific client for retroactive update")

    if not owner:
        raise HTTPException(status_code=404, detail="Client not found")

    jobs = query.all()
    count = 0
    for job in jobs:
        # Recalculate using CURRENT pricing (at_time=None)
        new_rate = get_price_for_weight(db, float(job.weight), float(owner.rate_per_carat), at_time=None, user_id=owner.id)
        if job.rate_per_carat != new_rate:
            job.rate_per_carat = new_rate
            count += 1
    
    db.commit()
    target_desc = owner.company_name
    log_activity(db, "admin_retroactive_pricing", f"Admin {admin.username} applied current pricing to {count} jobs for {target_desc} since {payload.from_date.isoformat()}", admin.id)
    return {"message": f"Applied current pricing to {count} jobs", "updated_count": count}


@router.post("/record-profit")
def record_profit(payload: AccountProfitCreate, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    profit = AccountProfit(
        user_id=payload.user_id,
        amount=payload.amount,
        payment_mode=payload.payment_mode,
        remarks=payload.remarks
    )
    db.add(profit)
    db.commit()
    
    user = db.query(User).filter(User.id == payload.user_id).first()
    company = user.company_name if user else "Unknown"
    log_activity(db, "admin_record_profit", f"Admin {admin.username} recorded profit of ₹{payload.amount} for {company}", admin.id)
    return {"message": "Profit recorded successfully"}


@router.post("/update-profit/{profit_id}")
def update_profit(profit_id: int, payload: AccountProfitUpdate, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    profit = db.query(AccountProfit).filter(AccountProfit.id == profit_id).first()
    if not profit:
        raise HTTPException(status_code=404, detail="Recorded entry not found")
    
    old_amount = profit.amount
    old_mode = profit.payment_mode
    old_remarks = profit.remarks
    
    profit.amount = payload.amount
    profit.payment_mode = payload.payment_mode
    profit.remarks = payload.remarks
    db.commit()
    
    user = db.query(User).filter(User.id == profit.user_id).first()
    company = user.company_name if user else "Unknown"
    log_activity(
        db, 
        "admin_update_profit", 
        f"Admin {admin.username} updated profit entry #{profit_id} for {company}: "
        f"Amount ₹{old_amount}->₹{payload.amount}, Mode {old_mode}->{payload.payment_mode}, Remarks '{old_remarks}'->'{payload.remarks}'", 
        admin.id
    )
    return {"message": "Profit entry updated successfully"}


@router.get("/profits")
def get_profits(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    profits = db.query(AccountProfit).order_by(AccountProfit.created_at.desc()).all()
    return [
        {
            "id": p.id,
            "user_id": p.user_id,
            "company": p.user.company_name if p.user else "Unknown",
            "amount": p.amount,
            "payment_mode": p.payment_mode,
            "remarks": p.remarks,
            "created_at": p.created_at
        } for p in profits
    ]


@router.get("/user-account-pdf/{user_id}")
def download_user_account_pdf(
    user_id: int,
    year: int | None = None,
    month: int | None = None,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    target_user = db.query(User).filter(User.id == user_id).first()
    if not target_user:
        raise HTTPException(status_code=404, detail="User not found")

    # Reuse the logic from admin_user_account to get stats
    from app.services.pricing_service import get_price_for_weight
    query = db.query(Job).filter(Job.user_id == user_id, Job.status == JobStatus.completed)
    if year: query = query.filter(extract("year", Job.completed_at) == year)
    if month: query = query.filter(extract("month", Job.completed_at) == month)
    
    jobs = query.all()
    total_revenue = 0.0
    for j in jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(target_user.rate_per_carat), at_time=j.created_at, user_id=user_id)
        total_revenue += float(j.weight) * float(rate)

    # Get payments for this user
    p_query = db.query(AccountProfit).filter(AccountProfit.user_id == user_id)
    if year: p_query = p_query.filter(extract("year", AccountProfit.created_at) == year)
    if month: p_query = p_query.filter(extract("month", AccountProfit.created_at) == month)
    
    profits = p_query.order_by(AccountProfit.created_at.desc()).all()
    received = sum(p.amount for p in profits)
    
    summary = {
        "total_revenue": round(total_revenue, 2),
        "received": round(received, 2),
        "pending": round(total_revenue - received, 2)
    }
    
    entries = [
        {"amount": p.amount, "payment_mode": p.payment_mode, "created_at": p.created_at}
        for p in profits
    ]

    # Generate PDF
    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    ts = int(get_ist_now_naive().timestamp())
    pdf_path = temp_dir / f"statement_{target_user.username}_{ts}.pdf"
    
    create_account_statement_pdf(pdf_path, target_user, summary, entries)
    
    log_activity(db, "admin_download_account_statement", f"Admin {admin.username} downloaded account statement for {target_user.company_name}", admin.id)
    return FileResponse(path=pdf_path, filename=pdf_path.name, media_type="application/pdf")


def model_to_dict(obj):
    if obj is None:
        return None
    d = {}
    for column in obj.__table__.columns:
        val = getattr(obj, column.name)
        if isinstance(val, datetime):
            val = val.isoformat()
        elif hasattr(val, "value"):  # Handles Enums (like JobStatus)
            val = val.value
        d[column.name] = val
    return d

@router.get("/backup/files")
def list_backup_files(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    """
    Returns a list of all active files (upload paths)
    on the server, with the corresponding client's username and company name,
    so that the local sync client can download them for backup.
    """
    _ = admin
    jobs = db.query(Job).filter(Job.upload_path != None).all()
    users = {u.id: u for u in db.query(User).all()}
    
    files = []
    for j in jobs:
        user = users.get(j.user_id)
        username = user.username if user else "unknown"
        company_name = user.company_name if user else "unknown"
        
        # Check upload file path
        if j.upload_path:
            p = Path(j.upload_path)
            if p.exists() and p.is_file():
                files.append({
                    "job_id": j.id,
                    "stone_id": j.stone_id,
                    "type": "stone",
                    "username": username,
                    "company_name": company_name,
                    "filename": j.upload_filename if j.upload_filename else p.name,
                    "download_url": f"/admin/jobs/{j.id}/upload"
                })
                
    return files


@router.get("/backup")
def backup_database(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    import json
    
    backup_data = {
        "version": "1.0",
        "timestamp": get_ist_now_naive().isoformat(),
        "data": {
            "users": [model_to_dict(u) for u in db.query(User).all()],
            "jobs": [model_to_dict(j) for j in db.query(Job).all()],
            "invoices": [model_to_dict(i) for i in db.query(Invoice).all()],
            "price_configs": [model_to_dict(p) for p in db.query(PriceConfig).all()],
            "account_profits": [model_to_dict(ap) for ap in db.query(AccountProfit).all()],
            "activity_logs": [model_to_dict(al) for al in db.query(ActivityLog).all()],
            "download_tokens": [model_to_dict(dt) for dt in db.query(DownloadToken).all()],
        }
    }
    
    backup_str = json.dumps(backup_data, default=str)
    filename = f"diamond_backup_{get_ist_now_naive().strftime('%Y%m%d_%H%M%S')}.json"
    
    log_activity(db, "admin_backup", f"Admin {admin.username} successfully downloaded database backup file: {filename}", admin.id)
    
    return Response(
        content=backup_str,
        media_type="application/json",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )


@router.post("/import")
def import_database(
    file: UploadFile = File(...),
    mode: str = Form("merge"),  # "replace" | "merge" | "sync"
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    import json
    from app.services.storage_service import ensure_user_storage_dirs, ensure_drive_sync_tree_for_user
    
    try:
        content = file.file.read()
        backup_data = json.loads(content)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Invalid JSON file: {e}")
        
    if "version" not in backup_data or "data" not in backup_data:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid backup file format: Missing 'version' or 'data' keys")
        
    data = backup_data["data"]
    
    # 1. Take a silent recovery point of the current database before doing any changes
    try:
        current_backup = {
            "version": "1.0",
            "timestamp": get_ist_now_naive().isoformat(),
            "data": {
                "users": [model_to_dict(u) for u in db.query(User).all()],
                "jobs": [model_to_dict(j) for j in db.query(Job).all()],
                "invoices": [model_to_dict(i) for i in db.query(Invoice).all()],
                "price_configs": [model_to_dict(p) for p in db.query(PriceConfig).all()],
                "account_profits": [model_to_dict(ap) for ap in db.query(AccountProfit).all()],
                "activity_logs": [model_to_dict(al) for al in db.query(ActivityLog).all()],
                "download_tokens": [model_to_dict(dt) for dt in db.query(DownloadToken).all()],
            }
        }
        undo_dir = settings.storage_root / "temp"
        undo_dir.mkdir(parents=True, exist_ok=True)
        undo_file_path = undo_dir / "pre_import_backup_undo.json"
        with open(undo_file_path, "w", encoding="utf-8") as uf:
            json.dump(current_backup, uf, default=str)
    except Exception as backup_err:
        print(f"Warning: Silent backup for undo failed: {backup_err}")
    
    # 2. Perform import according to the selected mode
    try:
        user_id_map = {}
        job_id_map = {}
        
        if mode == "replace":
            # WIPE existing data in reverse dependency order
            db.query(DownloadToken).delete()
            db.query(ActivityLog).delete()
            db.query(AccountProfit).delete()
            db.query(PriceConfig).delete()
            db.query(Invoice).delete()
            db.query(Job).delete()
            db.query(User).delete()
            
            # Simple Replace: Insert everything from backup as new records with their original IDs
            # 1. Users
            for u in data.get("users", []):
                created_at = datetime.fromisoformat(u["created_at"]) if u.get("created_at") else get_ist_now_naive()
                user = User(
                    id=u["id"],
                    company_name=u["company_name"],
                    username=u["username"],
                    password=u["password"],
                    rate_per_carat=u["rate_per_carat"],
                    status=u["status"],
                    is_admin=bool(u["is_admin"]),
                    created_at=created_at
                )
                db.add(user)
            db.flush()
            
            # 2. Jobs
            for j in data.get("jobs", []):
                created_at = datetime.fromisoformat(j["created_at"]) if j.get("created_at") else get_ist_now_naive()
                queue_entered_at = datetime.fromisoformat(j["queue_entered_at"]) if j.get("queue_entered_at") else None
                processing_started_at = datetime.fromisoformat(j["processing_started_at"]) if j.get("processing_started_at") else None
                completed_at = datetime.fromisoformat(j["completed_at"]) if j.get("completed_at") else None
                
                job = Job(
                    id=j["id"],
                    user_id=j["user_id"],
                    stone_id=j["stone_id"],
                    weight=j["weight"],
                    upload_path=j.get("upload_path"),
                    processing_path=j.get("processing_path"),
                    completed_path=j.get("completed_path"),
                    status=j["status"],
                    priority=j.get("priority", 0),
                    retries=j.get("retries", 0),
                    queue_entered_at=queue_entered_at,
                    processing_started_at=processing_started_at,
                    completed_at=completed_at,
                    rate_per_carat=j.get("rate_per_carat"),
                    created_at=created_at
                )
                db.add(job)
            db.flush()
            
            # 3. Invoices
            for i in data.get("invoices", []):
                created_at = datetime.fromisoformat(i["created_at"]) if i.get("created_at") else get_ist_now_naive()
                invoice = Invoice(
                    id=i["id"],
                    user_id=i["user_id"],
                    month=i["month"],
                    total_stones=i["total_stones"],
                    total_weight=i["total_weight"],
                    rate_per_carat=i["rate_per_carat"],
                    total_amount=i["total_amount"],
                    file_path=i["file_path"],
                    created_at=created_at
                )
                db.add(invoice)
                
            # 4. PriceConfigs
            for pc in data.get("price_configs", []):
                valid_from = datetime.fromisoformat(pc["valid_from"]) if pc.get("valid_from") else get_ist_now_naive()
                valid_to = datetime.fromisoformat(pc["valid_to"]) if pc.get("valid_to") else None
                updated_at = datetime.fromisoformat(pc["updated_at"]) if pc.get("updated_at") else get_ist_now_naive()
                price_config = PriceConfig(
                    id=pc["id"],
                    user_id=pc.get("user_id"),
                    weight_range=pc["weight_range"],
                    price_per_carat=pc["price_per_carat"],
                    sort_order=pc.get("sort_order", 0),
                    valid_from=valid_from,
                    valid_to=valid_to,
                    updated_at=updated_at
                )
                db.add(price_config)
                
            # 5. AccountProfits
            for ap in data.get("account_profits", []):
                created_at = datetime.fromisoformat(ap["created_at"]) if ap.get("created_at") else datetime.utcnow()
                profit = AccountProfit(
                    id=ap["id"],
                    user_id=ap.get("user_id"),
                    amount=ap["amount"],
                    payment_mode=ap.get("payment_mode"),
                    remarks=ap.get("remarks"),
                    created_at=created_at
                )
                db.add(profit)
                
            # 6. ActivityLogs
            for al in data.get("activity_logs", []):
                created_at = datetime.fromisoformat(al["created_at"]) if al.get("created_at") else get_ist_now_naive()
                activity_log = ActivityLog(
                    id=al["id"],
                    user_id=al.get("user_id"),
                    action=al["action"],
                    details=al["details"],
                    created_at=created_at
                )
                db.add(activity_log)
                
            # 7. DownloadTokens
            for dt in data.get("download_tokens", []):
                expires_at = datetime.fromisoformat(dt["expires_at"]) if dt.get("expires_at") else get_ist_now_naive()
                created_at = datetime.fromisoformat(dt["created_at"]) if dt.get("created_at") else get_ist_now_naive()
                download_token = DownloadToken(
                    id=dt["id"],
                    token=dt["token"],
                    user_id=dt["user_id"],
                    job_id=dt["job_id"],
                    expires_at=expires_at,
                    created_at=created_at
                )
                db.add(download_token)
                
            # Populate user id mapping so folder recreation works cleanly
            for u in data.get("users", []):
                user_id_map[u["id"]] = u["id"]

        else:
            # Mode is either "merge" (add all side-by-side) or "sync" (match and add missing only)
            
            # 1. Merge / Sync Users
            for u in data.get("users", []):
                existing_user = db.query(User).filter(User.username == u["username"]).first()
                if existing_user:
                    user_id_map[u["id"]] = existing_user.id
                else:
                    created_at = datetime.fromisoformat(u["created_at"]) if u.get("created_at") else get_ist_now_naive()
                    new_user = User(
                        company_name=u["company_name"],
                        username=u["username"],
                        password=u["password"],
                        rate_per_carat=u["rate_per_carat"],
                        status=u["status"],
                        is_admin=bool(u["is_admin"]),
                        created_at=created_at
                    )
                    db.add(new_user)
                    db.flush()
                    user_id_map[u["id"]] = new_user.id
                    
            # 2. Merge / Sync Jobs
            for j in data.get("jobs", []):
                new_user_id = user_id_map.get(j["user_id"])
                if not new_user_id:
                    continue
                
                if mode == "sync":
                    # Check if a job with same user_id and stone_id already exists in database
                    existing_job = db.query(Job).filter(Job.user_id == new_user_id, Job.stone_id == j["stone_id"]).first()
                    if existing_job:
                        job_id_map[j["id"]] = existing_job.id
                        continue  # Skip duplicate job
                
                created_at = datetime.fromisoformat(j["created_at"]) if j.get("created_at") else get_ist_now_naive()
                queue_entered_at = datetime.fromisoformat(j["queue_entered_at"]) if j.get("queue_entered_at") else None
                processing_started_at = datetime.fromisoformat(j["processing_started_at"]) if j.get("processing_started_at") else None
                completed_at = datetime.fromisoformat(j["completed_at"]) if j.get("completed_at") else None
                
                new_job = Job(
                    user_id=new_user_id,
                    stone_id=j["stone_id"],
                    weight=j["weight"],
                    upload_path=j.get("upload_path"),
                    processing_path=j.get("processing_path"),
                    completed_path=j.get("completed_path"),
                    status=j["status"],
                    priority=j.get("priority", 0),
                    retries=j.get("retries", 0),
                    queue_entered_at=queue_entered_at,
                    processing_started_at=processing_started_at,
                    completed_at=completed_at,
                    rate_per_carat=j.get("rate_per_carat"),
                    created_at=created_at
                )
                db.add(new_job)
                db.flush()
                job_id_map[j["id"]] = new_job.id
                
            # 3. Merge / Sync Invoices
            for i in data.get("invoices", []):
                new_user_id = user_id_map.get(i["user_id"])
                if not new_user_id:
                    continue
                    
                if mode == "sync":
                    # Check if an invoice for the same user and month already exists
                    existing_inv = db.query(Invoice).filter(Invoice.user_id == new_user_id, Invoice.month == i["month"]).first()
                    if existing_inv:
                        continue  # Skip duplicate invoice
                        
                created_at = datetime.fromisoformat(i["created_at"]) if i.get("created_at") else get_ist_now_naive()
                new_invoice = Invoice(
                    user_id=new_user_id,
                    month=i["month"],
                    total_stones=i["total_stones"],
                    total_weight=i["total_weight"],
                    rate_per_carat=i["rate_per_carat"],
                    total_amount=i["total_amount"],
                    file_path=i["file_path"],
                    created_at=created_at
                )
                db.add(new_invoice)
                
            # 4. Merge / Sync PriceConfigs
            for pc in data.get("price_configs", []):
                new_user_id = user_id_map.get(pc["user_id"]) if pc.get("user_id") is not None else None
                
                if mode == "sync":
                    # Check if a config with same user_id, range and valid_to == None already exists
                    existing_pc = db.query(PriceConfig).filter(
                        PriceConfig.user_id == new_user_id,
                        PriceConfig.weight_range == pc["weight_range"],
                        PriceConfig.valid_to == None
                    ).first()
                    if existing_pc:
                        continue  # Skip active duplicate
                        
                valid_from = datetime.fromisoformat(pc["valid_from"]) if pc.get("valid_from") else get_ist_now_naive()
                valid_to = datetime.fromisoformat(pc["valid_to"]) if pc.get("valid_to") else None
                updated_at = datetime.fromisoformat(pc["updated_at"]) if pc.get("updated_at") else get_ist_now_naive()
                new_price_config = PriceConfig(
                    user_id=new_user_id,
                    weight_range=pc["weight_range"],
                    price_per_carat=pc["price_per_carat"],
                    sort_order=pc.get("sort_order", 0),
                    valid_from=valid_from,
                    valid_to=valid_to,
                    updated_at=updated_at
                )
                db.add(new_price_config)
                
            # 5. Merge / Sync AccountProfits
            for ap in data.get("account_profits", []):
                new_user_id = user_id_map.get(ap["user_id"])
                if not new_user_id:
                    continue
                    
                created_at = datetime.fromisoformat(ap["created_at"]) if ap.get("created_at") else datetime.utcnow()
                
                if mode == "sync":
                    # Match by user_id, amount, payment_mode and remarks
                    existing_ap = db.query(AccountProfit).filter(
                        AccountProfit.user_id == new_user_id,
                        AccountProfit.amount == ap["amount"],
                        AccountProfit.payment_mode == ap.get("payment_mode"),
                        AccountProfit.remarks == ap.get("remarks")
                    ).first()
                    if existing_ap:
                        continue
                        
                new_profit = AccountProfit(
                    user_id=new_user_id,
                    amount=ap["amount"],
                    payment_mode=ap.get("payment_mode"),
                    remarks=ap.get("remarks"),
                    created_at=created_at
                )
                db.add(new_profit)
                
            # 6. Merge / Sync ActivityLogs
            for al in data.get("activity_logs", []):
                new_user_id = user_id_map.get(al["user_id"]) if al.get("user_id") is not None else None
                created_at = datetime.fromisoformat(al["created_at"]) if al.get("created_at") else get_ist_now_naive()
                
                if mode == "sync":
                    # Match by user_id, action and details
                    existing_al = db.query(ActivityLog).filter(
                        ActivityLog.user_id == new_user_id,
                        ActivityLog.action == al["action"],
                        ActivityLog.details == al["details"]
                    ).first()
                    if existing_al:
                        continue
                        
                new_activity_log = ActivityLog(
                    user_id=new_user_id,
                    action=al["action"],
                    details=al["details"],
                    created_at=created_at
                )
                db.add(new_activity_log)
                
            # 7. Merge / Sync DownloadTokens
            for dt in data.get("download_tokens", []):
                new_user_id = user_id_map.get(dt["user_id"])
                new_job_id = job_id_map.get(dt["job_id"])
                if not new_user_id or not new_job_id:
                    continue
                    
                expires_at = datetime.fromisoformat(dt["expires_at"]) if dt.get("expires_at") else get_ist_now_naive()
                created_at = datetime.fromisoformat(dt["created_at"]) if dt.get("created_at") else get_ist_now_naive()
                new_download_token = DownloadToken(
                    token=dt["token"],
                    user_id=new_user_id,
                    job_id=new_job_id,
                    expires_at=expires_at,
                    created_at=created_at
                )
                db.add(new_download_token)
                
        db.commit()
        
        # After successful commit, reconstruct folders for newly mapped users
        for old_id, new_id in user_id_map.items():
            user = db.query(User).filter(User.id == new_id).first()
            if user and user.status == "approved" and not user.is_admin:
                try:
                    ensure_user_storage_dirs(user.id)
                    ensure_drive_sync_tree_for_user(user.username)
                except Exception as dir_err:
                    print(f"Warning: Failed to recreate folders for {user.username}: {dir_err}")
                    
        log_activity(db, "admin_import", f"Admin {admin.username} successfully imported backup with mode='{mode}' containing {len(data.get('users', []))} users and {len(data.get('jobs', []))} jobs", admin.id)
        return {"message": f"Database backup successfully imported in {mode.upper()} mode!"}
        
    except Exception as trans_err:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to merge database: {trans_err}"
        )


@router.post("/undo-import")
def undo_import_database(
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    import json
    from pathlib import Path
    from app.services.storage_service import ensure_user_storage_dirs, ensure_drive_sync_tree_for_user
    
    undo_file_path = settings.storage_root / "temp" / "pre_import_backup_undo.json"
    if not undo_file_path.exists():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No undo recovery point found. Either no import has been run or the undo has already been consumed."
        )
        
    try:
        with open(undo_file_path, "r", encoding="utf-8") as uf:
            backup_data = json.load(uf)
            
        data = backup_data["data"]
        
        # 1. Wipe everything
        db.query(DownloadToken).delete()
        db.query(ActivityLog).delete()
        db.query(AccountProfit).delete()
        db.query(PriceConfig).delete()
        db.query(Invoice).delete()
        db.query(Job).delete()
        db.query(User).delete()
        
        # 2. Restore everything exactly as it was
        # Users
        for u in data.get("users", []):
            created_at = datetime.fromisoformat(u["created_at"]) if u.get("created_at") else get_ist_now_naive()
            user = User(
                id=u["id"],
                company_name=u["company_name"],
                username=u["username"],
                password=u["password"],
                rate_per_carat=u["rate_per_carat"],
                status=u["status"],
                is_admin=bool(u["is_admin"]),
                created_at=created_at
            )
            db.add(user)
        db.flush()
        
        # Jobs
        for j in data.get("jobs", []):
            created_at = datetime.fromisoformat(j["created_at"]) if j.get("created_at") else get_ist_now_naive()
            queue_entered_at = datetime.fromisoformat(j["queue_entered_at"]) if j.get("queue_entered_at") else None
            processing_started_at = datetime.fromisoformat(j["processing_started_at"]) if j.get("processing_started_at") else None
            completed_at = datetime.fromisoformat(j["completed_at"]) if j.get("completed_at") else None
            
            job = Job(
                id=j["id"],
                user_id=j["user_id"],
                stone_id=j["stone_id"],
                weight=j["weight"],
                upload_path=j.get("upload_path"),
                processing_path=j.get("processing_path"),
                completed_path=j.get("completed_path"),
                status=j["status"],
                priority=j.get("priority", 0),
                retries=j.get("retries", 0),
                queue_entered_at=queue_entered_at,
                processing_started_at=processing_started_at,
                completed_at=completed_at,
                rate_per_carat=j.get("rate_per_carat"),
                created_at=created_at
            )
            db.add(job)
        db.flush()
        
        # Invoices
        for i in data.get("invoices", []):
            created_at = datetime.fromisoformat(i["created_at"]) if i.get("created_at") else get_ist_now_naive()
            invoice = Invoice(
                id=i["id"],
                user_id=i["user_id"],
                month=i["month"],
                total_stones=i["total_stones"],
                total_weight=i["total_weight"],
                rate_per_carat=i["rate_per_carat"],
                total_amount=i["total_amount"],
                file_path=i["file_path"],
                created_at=created_at
            )
            db.add(invoice)
            
        # PriceConfigs
        for pc in data.get("price_configs", []):
            valid_from = datetime.fromisoformat(pc["valid_from"]) if pc.get("valid_from") else get_ist_now_naive()
            valid_to = datetime.fromisoformat(pc["valid_to"]) if pc.get("valid_to") else None
            updated_at = datetime.fromisoformat(pc["updated_at"]) if pc.get("updated_at") else get_ist_now_naive()
            price_config = PriceConfig(
                id=pc["id"],
                user_id=pc.get("user_id"),
                weight_range=pc["weight_range"],
                price_per_carat=pc["price_per_carat"],
                sort_order=pc.get("sort_order", 0),
                valid_from=valid_from,
                valid_to=valid_to,
                updated_at=updated_at
            )
            db.add(price_config)
            
        # AccountProfits
        for ap in data.get("account_profits", []):
            created_at = datetime.fromisoformat(ap["created_at"]) if ap.get("created_at") else datetime.utcnow()
            profit = AccountProfit(
                id=ap["id"],
                user_id=ap.get("user_id"),
                amount=ap["amount"],
                payment_mode=ap.get("payment_mode"),
                remarks=ap.get("remarks"),
                created_at=created_at
            )
            db.add(profit)
            
        # ActivityLogs
        for al in data.get("activity_logs", []):
            created_at = datetime.fromisoformat(al["created_at"]) if al.get("created_at") else get_ist_now_naive()
            activity_log = ActivityLog(
                id=al["id"],
                user_id=al.get("user_id"),
                action=al["action"],
                details=al["details"],
                created_at=created_at
            )
            db.add(activity_log)
            
        # DownloadTokens
        for dt in data.get("download_tokens", []):
            expires_at = datetime.fromisoformat(dt["expires_at"]) if dt.get("expires_at") else get_ist_now_naive()
            created_at = datetime.fromisoformat(dt["created_at"]) if dt.get("created_at") else get_ist_now_naive()
            download_token = DownloadToken(
                id=dt["id"],
                token=dt["token"],
                user_id=dt["user_id"],
                job_id=dt["job_id"],
                expires_at=expires_at,
                created_at=created_at
            )
            db.add(download_token)
            
        db.commit()
        
        # Recreate folders for approved users
        for u in data.get("users", []):
            if u.get("status") == "approved" and not u.get("is_admin"):
                try:
                    ensure_user_storage_dirs(u["id"])
                    ensure_drive_sync_tree_for_user(u["username"])
                except Exception as dir_err:
                    print(f"Warning: Failed to recreate folders during undo: {dir_err}")
                    
        # Remove the undo file after successful restore
        try:
            undo_file_path.unlink()
        except Exception:
            pass
            
        log_activity(db, "admin_undo_import", f"Admin {admin.username} successfully reverted the database import", admin.id)
        return {"message": "Undo successful! Database has been reverted exactly to its pre-import state."}
        
    except Exception as undo_err:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to revert database (Undo failed): {undo_err}"
        )


@router.get("/undo-status")
def get_undo_status(
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    _ = admin
    _ = db
    undo_file_path = settings.storage_root / "temp" / "pre_import_backup_undo.json"
    return {"has_undo": undo_file_path.exists()}

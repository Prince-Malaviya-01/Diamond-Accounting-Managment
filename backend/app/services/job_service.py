from datetime import datetime, timezone
from app.utils.time import get_ist_now_naive
from pathlib import Path

import pandas as pd
from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.config import get_settings
from app.models.job import Job, JobStatus
from app.models.user import User
from app.services.log_service import log_activity
from app.services.pricing_service import get_price_for_weight
from app.services.storage_service import (
    ensure_drive_sync_tree_for_user,
    get_drive_sync_company_folder,
)


settings = get_settings()


ACTIVE_JOB_STATUSES = [JobStatus.uploaded, JobStatus.queued, JobStatus.processing]


def _normalize_stone_id(stone_id: str) -> str:
    return (stone_id or "").strip()


def _stone_id_from_filename(filename: str) -> str:
    stem = Path(filename or "").stem.strip()
    return _normalize_stone_id(stem)


def _save_upload_to_user_stone_folder(user: User, stone_id: str, upload_file: UploadFile) -> Path:
    ensure_drive_sync_tree_for_user(user.username)
    stone_dir = get_drive_sync_company_folder(user.username) / "stone"

    # Remove previous same-stone files so re-upload keeps one clear latest file.
    for old_file in stone_dir.iterdir():
        if not old_file.is_file():
            continue
        if _stone_id_from_filename(old_file.name) == stone_id:
            old_file.unlink(missing_ok=True)

    original_name = Path(upload_file.filename or f"{stone_id}.adv").name
    destination = stone_dir / original_name
    if destination.exists():
        suffix = get_ist_now_naive().strftime("%Y%m%d%H%M%S")
        destination = stone_dir / f"{Path(original_name).stem}_{suffix}{Path(original_name).suffix}"

    with destination.open("wb") as target:
        while chunk := upload_file.file.read(1024 * 1024):
            target.write(chunk)
    return destination


def _validate_weight(weight: float) -> float:
    try:
        parsed = float(weight)
    except (TypeError, ValueError) as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Weight must be a valid number") from exc

    if parsed < 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Weight cannot be negative")
    return parsed


def _validate_upload_file(file: UploadFile) -> None:
    ext = Path(file.filename or "").suffix.lower()
    allowed = {x.strip().lower() for x in settings.allowed_extensions.split(",") if x.strip()}
    if ext not in allowed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Unsupported file type")


def _validate_size(file: UploadFile) -> None:
    file.file.seek(0, 2)
    size_bytes = file.file.tell()
    file.file.seek(0)
    max_size_bytes = settings.max_upload_size_mb * 1024 * 1024
    if size_bytes > max_size_bytes:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="File exceeds maximum size")


def _ensure_unique_stone(db: Session, user_id: int, stone_id: str) -> None:
    existing = (
        db.query(Job)
        .filter(Job.user_id == user_id, Job.stone_id == stone_id, Job.status.in_(ACTIVE_JOB_STATUSES))
        .first()
    )
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"Stone already in progress: {stone_id}")


def create_single_job(db: Session, user: User, stone_id: str, weight: float, upload_file: UploadFile) -> Job:
    _validate_upload_file(upload_file)
    _validate_size(upload_file)
    stone_id = _normalize_stone_id(stone_id)
    if not stone_id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Stone ID is required")

    weight = _validate_weight(weight)
    _ensure_unique_stone(db, user.id, stone_id)

    # Create and commit Job record in DB FIRST, then save the file to prevent folder monitor race condition
    job = Job(
        user_id=user.id,
        stone_id=stone_id,
        weight=weight,
        upload_path=None,
        status=JobStatus.uploaded,
        queue_entered_at=None,
        rate_per_carat=get_price_for_weight(db, float(weight), float(user.rate_per_carat), user_id=user.id)
    )
    db.add(job)
    db.commit()
    db.refresh(job)

    saved = _save_upload_to_user_stone_folder(user, stone_id, upload_file)
    job.upload_path = str(saved)
    db.commit()
    db.refresh(job)

    log_activity(db, "file_upload", f"Uploaded stone {stone_id}", user.id)
    return job


def create_batch_jobs(db: Session, user: User, upload_file: UploadFile) -> dict:
    _validate_upload_file(upload_file)
    _validate_size(upload_file)

    ext = Path(upload_file.filename or "").suffix.lower()
    if ext == ".csv":
        df = pd.read_csv(upload_file.file)
    elif ext in {".xlsx", ".xls"}:
        df = pd.read_excel(upload_file.file)
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Batch file must be CSV or Excel")

    df.columns = [c.strip() for c in df.columns]
    stone_id_col = None
    weight_col = None
    for col in df.columns:
        if col.lower() == "stone id":
            stone_id_col = col
        elif col.lower() == "weight":
            weight_col = col
            
    if not stone_id_col or not weight_col:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail=f"Columns 'Stone ID' and 'Weight' are required. Available columns: {list(df.columns)}"
        )
        
    df.rename(columns={stone_id_col: "Stone ID", weight_col: "Weight"}, inplace=True)

    created = 0
    skipped = []
    invalid_rows: list[int] = []
    seen_stones: set[str] = set()

    for idx, row in df.iterrows():
        stone_id = _normalize_stone_id(str(row["Stone ID"]))
        if stone_id.lower() == "nan":
            stone_id = ""
        if not stone_id:
            invalid_rows.append(int(idx) + 2)
            continue

        if stone_id in seen_stones:
            skipped.append(stone_id)
            continue

        try:
            weight = _validate_weight(row["Weight"])
        except HTTPException:
            invalid_rows.append(int(idx) + 2)
            continue

        existing = (
            db.query(Job)
            .filter(Job.user_id == user.id, Job.stone_id == stone_id, Job.status.in_(ACTIVE_JOB_STATUSES))
            .first()
        )
        if existing:
            skipped.append(stone_id)
            continue

        job = Job(
            user_id=user.id,
            stone_id=stone_id,
            weight=weight,
            upload_path=None,
            status=JobStatus.uploaded,
            queue_entered_at=None,
            rate_per_carat=get_price_for_weight(db, float(weight), float(user.rate_per_carat), user_id=user.id)
        )
        db.add(job)
        seen_stones.add(stone_id)
        created += 1

    db.commit()
    log_activity(
        db,
        "batch_upload",
        f"Created {created} jobs via batch file; skipped={len(skipped)} invalid_rows={len(invalid_rows)}",
        user.id,
    )
    return {"created": created, "skipped_duplicates": skipped, "invalid_row_numbers": invalid_rows}


def create_multiple_jobs_from_files(db: Session, user: User, weight: float | None, files: list[UploadFile]) -> dict:
    if not files:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="At least one file is required")

    # If weight is not provided from UI, keep a valid default so uploads are frictionless.
    parsed_weight = _validate_weight(weight if weight is not None else settings.auto_drive_default_weight)
    created = 0
    replaced = 0
    skipped_duplicates: list[str] = []
    skipped_in_processing: list[str] = []
    invalid_files: list[str] = []

    # Pre-fetch all active jobs for this user to avoid per-file queries and handle internal duplicates.
    all_active = db.query(Job).filter(Job.user_id == user.id, Job.status.in_(ACTIVE_JOB_STATUSES)).all()
    active_map = {j.stone_id: j for j in all_active}
    
    processed_in_batch = set()

    for upload_file in files:
        try:
            _validate_size(upload_file)
        except HTTPException:
            invalid_files.append(upload_file.filename or "unknown")
            continue

        stone_id = _stone_id_from_filename(upload_file.filename or "")
        if not stone_id:
            invalid_files.append(upload_file.filename or "unknown")
            continue
            
        # Prevent duplicate stone IDs within the same upload request
        if stone_id in processed_in_batch:
            skipped_duplicates.append(stone_id)
            continue
        processed_in_batch.add(stone_id)

        existing = active_map.get(stone_id)
        if existing:
            if existing.status == JobStatus.processing:
                skipped_in_processing.append(stone_id)
                skipped_duplicates.append(stone_id)
                continue

            if existing.upload_path:
                Path(existing.upload_path).unlink(missing_ok=True)
            if existing.completed_path:
                Path(existing.completed_path).unlink(missing_ok=True)

            # Update DB and commit FIRST so background worker sees it immediately
            existing.completed_path = None
            existing.weight = parsed_weight
            existing.status = JobStatus.uploaded
            existing.queue_entered_at = None
            existing.processing_started_at = None
            existing.completed_at = None
            existing.retries = 0
            existing.rate_per_carat = get_price_for_weight(db, float(parsed_weight), float(user.rate_per_carat), user_id=user.id)
            db.commit()

            # Now save the file and update path
            saved = _save_upload_to_user_stone_folder(user, stone_id, upload_file)
            existing.upload_path = str(saved)
            db.commit()

            replaced += 1
            continue

        # Create new Job record and commit FIRST
        job = Job(
            user_id=user.id,
            stone_id=stone_id,
            weight=parsed_weight,
            upload_path=None,
            status=JobStatus.uploaded,
            queue_entered_at=None,
            rate_per_carat=get_price_for_weight(db, float(parsed_weight), float(user.rate_per_carat), user_id=user.id)
        )
        db.add(job)
        db.commit()

        # Now save the file and update the path
        saved = _save_upload_to_user_stone_folder(user, stone_id, upload_file)
        job.upload_path = str(saved)
        db.commit()

        created += 1

    db.commit()
    log_activity(
        db,
        "multi_file_upload",
        f"Uploaded {created} stone files; replaced={replaced} duplicates={len(skipped_duplicates)} invalid={len(invalid_files)}",
        user.id,
    )
    return {
        "created": created,
        "replaced": replaced,
        "skipped_duplicates": skipped_duplicates,
        "skipped_in_processing": skipped_in_processing,
        "invalid_files": invalid_files,
    }

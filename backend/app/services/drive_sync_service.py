from __future__ import annotations

import shutil
from datetime import datetime, timezone
from pathlib import Path
import time
from sqlalchemy import func, extract

from sqlalchemy.orm import Session

from app.billing.service import sync_user_invoice_for_month
from app.models.job import Job, JobStatus
from app.models.user import User
from app.services.log_service import log_activity
from app.utils.time import get_ist_now_naive
from app.services.storage_service import (
    ensure_drive_sync_tree_for_user,
    get_drive_sync_company_folder,
    get_user_folder,
)


def _stone_id_from_file(path: Path) -> str:
    return path.stem.strip()


def _candidate_stone_keys(stem: str) -> list[str]:
    value = (stem or "").strip()
    if not value:
        return []
    keys = [value]
    
    # Strip trailing 'a'/'A' and any spaces/underscores/hyphens
    lower_val = value.lower()
    clean_val = lower_val
    if clean_val.endswith('a'):
        clean_val = clean_val[:-1]
    clean_val = clean_val.rstrip("_ -")
    
    # Find original casing match if possible or fallback to lower
    if clean_val:
        # Match original prefix casing
        prefix_len = len(clean_val)
        original_clean = value[:prefix_len]
        if original_clean not in keys:
            keys.append(original_clean)
            
    token = value.split("_")[0].strip()
    if token and token not in keys:
        keys.append(token)
        
    lower_tok = token.lower()
    clean_tok = lower_tok
    if clean_tok.endswith('a'):
        clean_tok = clean_tok[:-1]
    clean_tok = clean_tok.rstrip("_ -")
    
    if clean_tok:
        prefix_tok_len = len(clean_tok)
        original_tok_clean = token[:prefix_tok_len]
        if original_tok_clean not in keys:
            keys.append(original_tok_clean)
            
    return keys


def _folder_keys_for_user(user: User) -> list[str]:
    return [user.username.strip()]


def _count_files_now(folder: Path) -> int:
    if not folder.exists():
        return 0
    return len([
        p for p in folder.rglob("*") 
        if p.is_file() and not p.name.startswith(".")
        and p.name.lower() not in ["thumbs.db", "desktop.ini"]
    ])


def _iter_files(folder: Path) -> list[Path]:
    if not folder.exists():
        return []
    now = time.time()
    # Recursive search, ignoring hidden files and common junk
    all_files = [
        p for p in folder.rglob("*") 
        if p.is_file() and not p.name.startswith(".")
        and p.name.lower() not in ["thumbs.db", "desktop.ini"]
    ]
    # 2s delay is enough to ensure file is fully written
    filtered = [p for p in all_files if (now - p.stat().st_mtime) > 2]
    
    if len(all_files) > 0:
        print(f"Scanning {folder}: found {len(all_files)} total files (recursive), {len(filtered)} are ready.")
    
    return filtered


def _remove_stone_files_for_id(stone_folder: Path, stone_id: str) -> int:
    removed = 0
    for file_path in _iter_files(stone_folder):
        if _stone_id_from_file(file_path).lower() == stone_id.lower():
            try:
                file_path.unlink(missing_ok=True)
                removed += 1
            except OSError:
                continue
    return removed


def ingest_stone_folder_for_key(db: Session, user: User, folder_key: str, default_weight: float) -> int:
    ensure_drive_sync_tree_for_user(folder_key)
    company_root = get_drive_sync_company_folder(folder_key)
    stone_folder = company_root / "stone"

    created = 0
    for file_path in _iter_files(stone_folder):
        try:
            stone_id = _stone_id_from_file(file_path)
            if not stone_id:
                file_path.unlink(missing_ok=True)
                continue

            # Case-insensitive check
            exists = db.query(Job).filter(
                Job.user_id == user.id, 
                func.lower(Job.stone_id) == stone_id.lower()
            ).first()
            
            if exists:
                continue

            job = Job(
                user_id=user.id,
                stone_id=stone_id,
                weight=default_weight,
                upload_path=str(file_path),
                status=JobStatus.uploaded,
                queue_entered_at=None,
            )
            db.add(job)
            db.commit() 
            print(f"Created new job for stone: {stone_id}")
            created += 1
        except Exception as e:
            print(f"Error ingesting stone file {file_path}: {str(e)}")
            db.rollback()
            continue

    if created:
        log_activity(db, "drive_stone_ingest", f"Auto-ingested {created} stones for {user.username}", user.id)
    return created


def ingest_done_folder_for_key(db: Session, user: User, folder_key: str) -> int:
    ensure_drive_sync_tree_for_user(folder_key)
    company_root = get_drive_sync_company_folder(folder_key)
    done_folder = company_root / "done"
    stone_folder = company_root / "stone"

    completed = 0
    for file_path in _iter_files(done_folder):
        try:
            stem_value = _stone_id_from_file(file_path)
            candidate_keys = _candidate_stone_keys(stem_value)
            if not candidate_keys:
                file_path.unlink(missing_ok=True)
                continue

            job = None
            for stone_key in candidate_keys:
                job = (
                    db.query(Job)
                    .filter(
                        Job.user_id == user.id, 
                        func.lower(Job.stone_id) == stone_key.lower()
                    )
                    .order_by(Job.created_at.desc())
                    .first()
                )
                if job:
                    break
            
            if not job:
                print(f"No existing job for {file_path.name}. Creating new completed record.")
                stone_id = stem_value
                completed_dir = get_user_folder("completed", user.id)
                target = completed_dir / file_path.name
                if target.exists():
                    suffix = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S")
                    target = completed_dir / f"{file_path.stem}_{suffix}{file_path.suffix}"
                
                try:
                    shutil.move(str(file_path), str(target))
                except OSError as e:
                    print(f"Failed to move file {file_path}: {e}")
                    continue
                
                job = Job(
                    user_id=user.id,
                    stone_id=stone_id,
                    weight=0.0,
                    upload_path=None,
                    completed_path=str(target),
                    status=JobStatus.completed,
                    queue_entered_at=None,
                    processing_started_at=None,
                    completed_at=datetime.now(timezone.utc),
                )
                db.add(job)
                db.commit()
                print(f"Successfully moved and created job for {stone_id}")
                completed += 1
                continue

            stone_id = job.stone_id

            if job.status == JobStatus.completed:
                print(f"Job for {stone_id} already completed. Removing redundant file.")
                file_path.unlink(missing_ok=True)
                continue

            completed_dir = get_user_folder("completed", user.id)
            target = completed_dir / file_path.name
            if target.exists():
                suffix = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S")
                target = completed_dir / f"{file_path.stem}_{suffix}{file_path.suffix}"
            
            try:
                shutil.move(str(file_path), str(target))
            except OSError as e:
                print(f"Failed to move file {file_path}: {e}")
                continue

            job.completed_path = str(target)
            job.status = JobStatus.completed
            job.completed_at = datetime.now(timezone.utc)
            db.commit()
            print(f"Successfully marked job {stone_id} as completed.")
            completed += 1
        except Exception as e:
            print(f"Error processing done file {file_path.name}: {str(e)}")
            db.rollback()
            continue

    if completed:
        now = datetime.now(timezone.utc)
        invoice_dir = get_user_folder("invoices", user.id)
        invoice_path = invoice_dir / f"invoice_{now.year:04d}-{now.month:02d}.pdf"
        sync_user_invoice_for_month(db, user, now.year, now.month, invoice_path)
        log_activity(db, "drive_done_ingest", f"Auto-completed {completed} stones for {user.username}", user.id)
    return completed


def cleanup_old_drive_sync_files(db: Session, max_age_days: int = 4) -> int:
    """
    Deletes files in 'stone' and 'done' directories under drive_sync for all non-admin approved users
    and also deletes files in the user's completed folder if the files are older than max_age_days.
    """
    users = db.query(User).filter(User.is_admin.is_(False), User.status == "approved").all()
    deleted_count = 0
    now = time.time()
    # Keep files for max_age_days (4 days) before cleaning up
    max_age_seconds = max_age_days * 24 * 60 * 60

    for user in users:
        # 1. Clean up drive_sync stone and done folders
        for folder_key in _folder_keys_for_user(user):
            ensure_drive_sync_tree_for_user(folder_key)
            company_root = get_drive_sync_company_folder(folder_key)
            
            for subfolder_name in ["stone", "done"]:
                subfolder = company_root / subfolder_name
                if not subfolder.exists():
                    continue
                
                for file_path in subfolder.iterdir():
                    if file_path.is_file() and not file_path.name.startswith("."):
                        file_age = now - file_path.stat().st_mtime
                        if file_age >= max_age_seconds:
                            try:
                                file_path.unlink(missing_ok=True)
                                deleted_count += 1
                                print(f"Cleanup: Deleted old file {file_path} (age: {file_age/86400:.1f} days)")
                            except Exception as e:
                                print(f"Cleanup Error: Could not delete {file_path}: {e}")

        # 2. Clean up user's internal completed folder
        completed_folder = get_user_folder("completed", user.id)
        if completed_folder.exists():
            for file_path in completed_folder.iterdir():
                if file_path.is_file() and not file_path.name.startswith("."):
                    file_age = now - file_path.stat().st_mtime
                    if file_age >= max_age_seconds:
                        try:
                            file_path.unlink(missing_ok=True)
                            deleted_count += 1
                            print(f"Cleanup: Deleted old completed file {file_path} (age: {file_age/86400:.1f} days)")
                        except Exception as e:
                            print(f"Cleanup Error: Could not delete completed file {file_path}: {e}")
                                
    if deleted_count > 0:
        log_activity(db, "drive_cleanup", f"Cleaned up {deleted_count} files older than {max_age_days} days from drive_sync and completed folders", None)
        
    return deleted_count


def run_drive_sync_cycle(db: Session, default_weight: float = 1.0) -> dict:
    users = db.query(User).filter(User.is_admin.is_(False), User.status == "approved").all()
    created_total = 0
    completed_total = 0

    for user in users:
        for folder_key in _folder_keys_for_user(user):
            ensure_drive_sync_tree_for_user(folder_key)
            created_total += ingest_stone_folder_for_key(db, user, folder_key, default_weight)
            completed_total += ingest_done_folder_for_key(db, user, folder_key)

    try:
        cleanup_old_drive_sync_files(db)
    except Exception as e:
        print(f"Error during drive sync cleanup: {e}")

    return {"created": created_total, "completed": completed_total}


def get_drive_sync_status(db: Session) -> list[dict]:
    users = db.query(User).filter(User.is_admin.is_(False), User.status == "approved").all()
    rows: list[dict] = []
    now = get_ist_now_naive()

    for user in users:
        for folder_key in _folder_keys_for_user(user):
            root = ensure_drive_sync_tree_for_user(folder_key)
            
            # Total jobs for this month
            total_jobs = (
                db.query(Job)
                .filter(
                    Job.user_id == user.id,
                    extract("year", Job.created_at) == now.year,
                    extract("month", Job.created_at) == now.month
                )
                .count()
            )
            
            # Completed jobs for this month
            done_jobs = (
                db.query(Job)
                .filter(
                    Job.user_id == user.id,
                    Job.status == JobStatus.completed,
                    extract("year", Job.completed_at) == now.year,
                    extract("month", Job.completed_at) == now.month
                )
                .count()
            )

            rows.append(
                {
                    "user_id": user.id,
                    "company_name": user.company_name,
                    "username": user.username,
                    "folder_key": folder_key,
                    "stone_files": total_jobs,
                    "done_files": done_jobs,
                    "path": str(root),
                }
            )

    return rows


def backfill_existing_uploads_to_stone_folders(db: Session) -> int:
    users = db.query(User).filter(User.is_admin.is_(False)).all()
    copied = 0

    for user in users:
        upload_dir = get_user_folder("uploads", user.id)
        upload_files = _iter_files(upload_dir)
        if not upload_files:
            continue

        for folder_key in _folder_keys_for_user(user):
            root = ensure_drive_sync_tree_for_user(folder_key)
            stone_dir = root / "stone"
            existing_names = {p.name for p in _iter_files(stone_dir)}
            for src in upload_files:
                if src.name in existing_names:
                    continue
                shutil.copy2(src, stone_dir / src.name)
                copied += 1

    return copied

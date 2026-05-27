import secrets
import re
import shutil
from pathlib import Path

from fastapi import UploadFile

from app.config import get_settings


settings = get_settings()


def ensure_storage_tree() -> None:
    root = settings.storage_root
    for folder in ["uploads", "processing", "completed", "invoices", "logs"]:
        (root / folder).mkdir(parents=True, exist_ok=True)
    (root / "drive_sync").mkdir(parents=True, exist_ok=True)
    settings.external_online_root.mkdir(parents=True, exist_ok=True)


def ensure_user_storage_dirs(user_id: int) -> None:
    for folder in ["uploads", "processing", "completed", "invoices"]:
        (settings.storage_root / folder / str(user_id)).mkdir(parents=True, exist_ok=True)


def delete_user_storage(user_id: int, company_key: str) -> None:
    # Delete standard folders
    for folder in ["uploads", "processing", "completed", "invoices"]:
        path = settings.storage_root / folder / str(user_id)
        if path.exists():
            try:
                shutil.rmtree(path)
            except Exception as e:
                print(f"Warning: Failed to delete standard folder {path}: {e}")

    # Delete drive_sync folder
    drive_path = settings.drive_sync_root / _sanitize_folder_name(company_key)
    if drive_path.exists():
        try:
            shutil.rmtree(drive_path)
        except Exception as e:
            print(f"Warning: Failed to delete drive_sync folder {drive_path}: {e}")

    # User wants to keep D:\Online flat, we don't delete the root Online folder
    # but we could delete specific files if needed. For now, skipping rmtree of root.
    pass


def get_user_folder(folder: str, user_id: int) -> Path:
    path = settings.storage_root / folder / str(user_id)
    path.mkdir(parents=True, exist_ok=True)
    return path


def _sanitize_folder_name(value: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9._-]", "_", value or "")
    cleaned = cleaned.strip("._")
    return cleaned or "company"


def get_drive_sync_company_folder(company_key: str) -> Path:
    path = settings.drive_sync_root / _sanitize_folder_name(company_key)
    path.mkdir(parents=True, exist_ok=True)
    return path


def ensure_drive_sync_tree_for_user(company_key: str) -> Path:
    root = get_drive_sync_company_folder(company_key)
    for folder in ["stone", "done"]:
        (root / folder).mkdir(parents=True, exist_ok=True)
    return root


def _sanitize_filename_part(value: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9._-]", "_", value or "")
    cleaned = cleaned.strip("._")
    return cleaned or "file"


def save_upload_file(upload_file: UploadFile, destination_dir: Path, prefix: str | None = None) -> Path:
    original_name = _sanitize_filename_part(upload_file.filename or "upload.bin")
    if prefix:
        safe_prefix = _sanitize_filename_part(prefix)
        safe_name = f"{safe_prefix}_{secrets.token_hex(8)}_{original_name}"
    else:
        safe_name = f"{secrets.token_hex(8)}_{original_name}"
    destination = destination_dir / safe_name
    with destination.open("wb") as target:
        while chunk := upload_file.file.read(1024 * 1024):
            target.write(chunk)
    return destination

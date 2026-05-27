import time

from app.config import get_settings
from app.database import SessionLocal
from app.models.job import JobStatus
from app.queue.manager import claim_next_job, enqueue_uploaded_jobs, mark_job_failed
from app.services.drive_sync_service import run_drive_sync_cycle
from app.services.log_service import log_activity


settings = get_settings()


def run_worker() -> None:
    print("Worker started")
    while True:
        db = SessionLocal()
        try:
            if settings.auto_drive_sync_enabled:
                run_drive_sync_cycle(db, default_weight=settings.auto_drive_default_weight)

            enqueue_uploaded_jobs(db)
            # Removed claim_next_job to disable automatic processing.
            # Jobs must now be manually moved to Processing by an admin.
        except Exception as e:
            print(f"Worker error: {e}")
            time.sleep(settings.worker_poll_seconds)
        finally:
            db.close()
            time.sleep(settings.worker_poll_seconds)


if __name__ == "__main__":
    run_worker()

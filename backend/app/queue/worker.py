import time

from app.config import get_settings
from app.database import SessionLocal
from app.models.job import JobStatus
from app.queue.manager import claim_next_job, enqueue_uploaded_jobs, mark_job_failed
from app.services.drive_sync_service import run_drive_sync_cycle
from app.services.log_service import log_activity


settings = get_settings()


def process_pending_notifications(db) -> None:
    from app.models.notification import Notification
    from app.models.user import User
    from app.models.job import Job
    from app.services.email_service import send_email
    from app.utils.time import get_ist_now_naive
    
    now = get_ist_now_naive()

    # 1. CLIENT UPLOADS -> ADMIN NOTIFICATIONS (2-minute silence debounce)
    unnotified_uploads = (
        db.query(Job)
        .filter(Job.notified_admin == False)
        .all()
    )

    if unnotified_uploads:
        uploads_by_user = {}
        for job in unnotified_uploads:
            uploads_by_user.setdefault(job.user_id, []).append(job)

        for user_id, jobs in uploads_by_user.items():
            latest_created_at = max(j.created_at for j in jobs)
            diff_seconds = (now - latest_created_at).total_seconds()

            # If 2 minutes of silence passed
            if diff_seconds >= 120:
                # Atomically mark as notified in DB first to prevent duplicates
                job_ids = [j.id for j in jobs]
                updated_count = (
                    db.query(Job)
                    .filter(Job.id.in_(job_ids), Job.notified_admin == False)
                    .update({"notified_admin": True}, synchronize_session=False)
                )
                db.commit()

                # Only proceed if we were the one who actually marked these jobs
                if updated_count > 0:
                    client = db.query(User).filter(User.id == user_id).first()
                    if client:
                        stone_ids = [j.stone_id for j in jobs]
                        stone_ids_str = ", ".join(stone_ids)
                        count = len(jobs)

                        # Get admin user
                        admin_user = db.query(User).filter(User.is_admin == True).first()
                        if admin_user and admin_user.email:
                            subject = f"New Stones Uploaded by {client.company_name}"
                            body = (
                                f"Hello Admin,\n\n"
                                f"Client '{client.company_name}' (username: {client.username}) has uploaded {count} new stone file(s).\n\n"
                                f"Stone ID(s):\n{stone_ids_str}\n\n"
                                f"Please log in to the admin panel to process them.\n\n"
                                f"Regards,\n"
                                f"Diamond Portal Automated Engine"
                            )
                            send_email(admin_user.email, subject, body)

                        # Create in-app Notification for Admin
                        notification = Notification(
                            user_id=None,
                            title="New Stones Uploaded",
                            message=f"Client '{client.company_name}' uploaded {count} new stones (IDs: {stone_ids_str})."
                        )
                        db.add(notification)
                        db.commit()
                        print(f"[Worker] Sent upload notification to Admin for client {client.username} ({count} stones)")

    # 2. ADMIN COMPLETIONS -> CLIENT NOTIFICATIONS (1-minute silence debounce)
    unnotified_completions = (
        db.query(Job)
        .filter(Job.status == "Completed", Job.notified_client == False, Job.completed_at.isnot(None))
        .all()
    )

    if unnotified_completions:
        completions_by_user = {}
        for job in unnotified_completions:
            completions_by_user.setdefault(job.user_id, []).append(job)

        for user_id, jobs in completions_by_user.items():
            latest_completed_at = max(j.completed_at for j in jobs)
            diff_seconds = (now - latest_completed_at).total_seconds()

            # If 1 minute of silence passed
            if diff_seconds >= 60:
                # Atomically mark as notified in DB first to prevent duplicates
                job_ids = [j.id for j in jobs]
                updated_count = (
                    db.query(Job)
                    .filter(Job.id.in_(job_ids), Job.notified_client == False)
                    .update({"notified_client": True}, synchronize_session=False)
                )
                db.commit()

                # Only proceed if we were the one who actually marked these jobs
                if updated_count > 0:
                    client = db.query(User).filter(User.id == user_id).first()
                    if client:
                        stone_ids = [j.stone_id for j in jobs]
                        stone_ids_str = ", ".join(stone_ids)
                        count = len(jobs)

                        # Send email to Client
                        if client.email:
                            subject = f"Stones Processing Completed"
                            body = (
                                f"Hello {client.company_name},\n\n"
                                f"We have completed processing {count} of your uploaded stone files.\n\n"
                                f"Completed Stone ID(s):\n{stone_ids_str}\n\n"
                                f"You can now download the completed result files from the 'Completed Stones' tab on your client dashboard.\n\n"
                                f"Regards,\n"
                                f"Diamond Processing Admin Team"
                            )
                            send_email(client.email, subject, body)

                        # Create in-app Notification for Client
                        notification = Notification(
                            user_id=client.id,
                            title="Stones Processing Completed",
                            message=f"Admin has completed processing {count} of your stones (IDs: {stone_ids_str})."
                        )
                        db.add(notification)
                        db.commit()
                        print(f"[Worker] Sent completion notification to client {client.username} ({count} stones)")


def run_worker() -> None:
    print("Worker started")
    while True:
        db = SessionLocal()
        try:
            if settings.auto_drive_sync_enabled:
                run_drive_sync_cycle(db, default_weight=settings.auto_drive_default_weight)

            enqueue_uploaded_jobs(db)
            process_pending_notifications(db)
        except Exception as e:
            print(f"Worker error: {e}")
            time.sleep(settings.worker_poll_seconds)
        finally:
            db.close()
            time.sleep(settings.worker_poll_seconds)


if __name__ == "__main__":
    run_worker()


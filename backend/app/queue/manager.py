from datetime import datetime, timezone

from sqlalchemy import asc, desc
from sqlalchemy.orm import Session

from app.models.job import Job, JobStatus


def enqueue_uploaded_jobs(db: Session, limit: int = 200) -> int:
    rows = (
        db.query(Job)
        .filter(Job.status == JobStatus.uploaded)
        .order_by(asc(Job.created_at), asc(Job.id))
        .limit(limit)
        .all()
    )
    now = datetime.now(timezone.utc)
    for row in rows:
        row.status = JobStatus.queued
        row.queue_entered_at = now
    if rows:
        db.commit()
    return len(rows)


def claim_next_job(db: Session) -> Job | None:
    # Priority first, FIFO within same priority.
    job = (
        db.query(Job)
        .filter(Job.status == JobStatus.queued)
        .order_by(desc(Job.priority), asc(Job.queue_entered_at), asc(Job.id))
        .with_for_update(skip_locked=True)
        .first()
    )
    if not job:
        return None

    job.status = JobStatus.processing
    job.processing_started_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(job)
    return job


def mark_job_failed(db: Session, job: Job, max_retries: int) -> Job:
    job.retries += 1
    if job.retries >= max_retries:
        job.status = JobStatus.failed
    else:
        job.status = JobStatus.queued
    db.commit()
    db.refresh(job)
    return job

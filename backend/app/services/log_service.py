from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog


def log_activity(db: Session, action: str, details: str, user_id: int | None = None) -> None:
    log = ActivityLog(user_id=user_id, action=action, details=details)
    db.add(log)
    db.commit()

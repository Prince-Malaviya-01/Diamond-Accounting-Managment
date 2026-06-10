from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import select, update, and_

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.models.notification import Notification
from app.utils.time import get_ist_now_naive

router = APIRouter(prefix="/notifications", tags=["notifications"])

@router.get("")
def get_notifications(
    limit: int = 20,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get notifications for the logged-in user.
    Admin gets notifications where user_id is null.
    """
    threshold = get_ist_now_naive() - timedelta(days=7)
    if current_user.is_admin:
        query = (
            db.query(Notification)
            .filter(
                Notification.user_id.is_(None),
                Notification.created_at >= threshold
            )
            .order_by(Notification.created_at.desc())
            .limit(limit)
            .all()
        )
    else:
        query = (
            db.query(Notification)
            .filter(
                Notification.user_id == current_user.id,
                Notification.created_at >= threshold
            )
            .order_by(Notification.created_at.desc())
            .limit(limit)
            .all()
        )

    return [
        {
            "id": n.id,
            "title": n.title,
            "message": n.message,
            "is_read": n.is_read,
            "created_at": n.created_at.isoformat()
        } for n in query
    ]

@router.get("/unread-count")
def get_unread_count(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get the unread notification count.
    """
    threshold = get_ist_now_naive() - timedelta(days=7)
    if current_user.is_admin:
        count = (
            db.query(Notification)
            .filter(
                Notification.user_id.is_(None),
                Notification.is_read == False,
                Notification.created_at >= threshold
            )
            .count()
        )
    else:
        count = (
            db.query(Notification)
            .filter(
                Notification.user_id == current_user.id,
                Notification.is_read == False,
                Notification.created_at >= threshold
            )
            .count()
        )
    return {"count": count}

@router.post("/mark-read")
def mark_notifications_read(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Mark all unread notifications for the user as read.
    """
    threshold = get_ist_now_naive() - timedelta(days=7)
    if current_user.is_admin:
        db.query(Notification).filter(
            Notification.user_id.is_(None),
            Notification.is_read == False,
            Notification.created_at >= threshold
        ).update({Notification.is_read: True}, synchronize_session=False)
    else:
        db.query(Notification).filter(
            Notification.user_id == current_user.id,
            Notification.is_read == False,
            Notification.created_at >= threshold
        ).update({Notification.is_read: True}, synchronize_session=False)

    db.commit()
    return {"message": "All notifications marked as read"}

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


from pydantic import BaseModel

class RegisterFCMTokenRequest(BaseModel):
    token: str
    device_name: str | None = None

class UnregisterFCMTokenRequest(BaseModel):
    token: str


@router.post("/register-fcm-token")
def register_fcm_token(
    payload: RegisterFCMTokenRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Registers or updates an FCM Web Push Token for the logged in user/admin.
    """
    from app.models.device_token import DeviceToken
    token_str = payload.token.strip()
    if not token_str:
        raise HTTPException(status_code=400, detail="Token cannot be empty")

    user_id = current_user.id # or None if admin? If admin, current_user.id is admin id, which matches admin queries!

    existing = db.query(DeviceToken).filter(DeviceToken.token == token_str).first()
    if existing:
        existing.user_id = user_id
        existing.device_name = payload.device_name
        existing.updated_at = get_ist_now_naive()
    else:
        new_token = DeviceToken(
            user_id=user_id,
            token=token_str,
            device_name=payload.device_name
        )
        db.add(new_token)

    db.commit()
    return {"status": "success", "message": "FCM Token registered successfully"}


@router.post("/unregister-fcm-token")
def unregister_fcm_token(
    payload: UnregisterFCMTokenRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Unregisters an FCM token when user logs out.
    """
    from app.models.device_token import DeviceToken
    db.query(DeviceToken).filter(DeviceToken.token == payload.token).delete()
    db.commit()
    return {"status": "success", "message": "FCM Token unregistered successfully"}


@router.post("/test-push")
def test_push_notification(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Sends a test push notification to current user's registered devices.
    """
    from app.services.fcm_service import send_multicast_push
    from app.models.device_token import DeviceToken

    tokens_query = db.query(DeviceToken.token).filter(DeviceToken.user_id == current_user.id).all()
    tokens = [t[0] for t in tokens_query if t[0]]
    if not tokens:
        raise HTTPException(status_code=404, detail="No registered FCM tokens found for this user/device.")

    sent_count = send_multicast_push(
        db=db,
        tokens=tokens,
        title="🎉 Test Push Notification",
        body=f"Hello {current_user.company_name or current_user.username}! Push notifications are working perfectly on this device.",
        url="/"
    )
    return {"status": "success", "sent_count": sent_count, "total_devices": len(tokens)}


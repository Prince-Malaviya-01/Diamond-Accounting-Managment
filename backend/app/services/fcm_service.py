import os
from pathlib import Path
from typing import List, Optional, Dict, Any
import firebase_admin
from firebase_admin import credentials, messaging
from sqlalchemy.orm import Session

from app.models.device_token import DeviceToken
from app.models.user import User

# Initialize Firebase Admin SDK
_firebase_app = None

def get_firebase_app():
    global _firebase_app
    if _firebase_app is not None:
        return _firebase_app

    # Try backend root directory first
    base_dir = Path(__file__).resolve().parents[2]
    service_account_path = base_dir / "firebase-service-account.json"
    
    if not service_account_path.exists():
        # Fallback to current working directory
        service_account_path = Path("firebase-service-account.json")

    if service_account_path.exists():
        try:
            cred = credentials.Certificate(str(service_account_path))
            _firebase_app = firebase_admin.initialize_app(cred)
            print(f"[FCM Service] Firebase initialized successfully with {service_account_path}")
        except Exception as e:
            print(f"[FCM Service ERROR] Failed to initialize Firebase: {e}")
    else:
        print(f"[FCM Service WARNING] firebase-service-account.json not found at {service_account_path}")
        
    return _firebase_app


def send_multicast_push(
    db: Session,
    tokens: List[str],
    title: str,
    body: str,
    url: str = "/",
    data: Optional[Dict[str, str]] = None
) -> int:
    """
    Sends Web Push Notification via Firebase Cloud Messaging to a list of tokens.
    Automatically removes invalid/unregistered tokens from the database.
    """
    if not tokens:
        return 0

    app = get_firebase_app()
    if not app:
        print("[FCM Service] Cannot send push notification: Firebase not initialized.")
        return 0

    payload_data = data.copy() if data else {}
    payload_data["url"] = url
    payload_data["title"] = title
    payload_data["body"] = body

    webpush_fcm_options = None
    if url and (url.startswith("https://") or url.startswith("http://")):
        webpush_fcm_options = messaging.WebpushFCMOptions(link=url)

    webpush_config = messaging.WebpushConfig(
        headers={
            "Urgency": "high",
            "TTL": "86400",
        },
        notification=messaging.WebpushNotification(
            title=title,
            body=body,
            icon="/favicon.png",
            badge="/favicon.png",
            require_interaction=True,
        ),
        fcm_options=webpush_fcm_options
    )


    message = messaging.MulticastMessage(
        tokens=tokens,
        notification=messaging.Notification(
            title=title,
            body=body,
        ),
        webpush=webpush_config,
        data={k: str(v) for k, v in payload_data.items()}
    )



    try:
        response = messaging.send_each_for_multicast(message)
        print(f"[FCM Service] Push sent: {response.success_count} successful, {response.failure_count} failed")

        # Cleanup invalid tokens
        if response.failure_count > 0:
            invalid_tokens = []
            for idx, resp in enumerate(response.responses):
                if not resp.success:
                    err_code = resp.exception.code if resp.exception else "UNKNOWN"
                    # If unregistered or invalid argument, mark token for removal
                    if err_code in ["UNREGISTERED", "INVALID_ARGUMENT"]:
                        invalid_tokens.append(tokens[idx])
            
            if invalid_tokens:
                db.query(DeviceToken).filter(DeviceToken.token.in_(invalid_tokens)).delete(synchronize_session=False)
                db.commit()
                print(f"[FCM Service] Cleaned up {len(invalid_tokens)} expired FCM tokens from DB.")

        return response.success_count
    except Exception as e:
        print(f"[FCM Service ERROR] Failed to send multicast message: {e}")
        return 0


def notify_admin_new_uploads(
    db: Session,
    client_name: str,
    count: int,
    stone_ids_str: str
) -> int:
    """
    Sends instant FCM push notification to all devices logged in as Admin.
    """
    admin_users = db.query(User).filter(User.is_admin == True).all()
    admin_ids = [u.id for u in admin_users]

    # Tokens registered under Admin user IDs or with null user_id (global admin)
    tokens_query = (
        db.query(DeviceToken.token)
        .filter((DeviceToken.user_id.in_(admin_ids)) | (DeviceToken.user_id.is_(None)))
        .all()
    )
    tokens = [t[0] for t in tokens_query if t[0]]
    if not tokens:
        print("[FCM Service] No active Admin device tokens registered.")
        return 0

    title = f"💎 New Stone Upload: {client_name}"
    body = f"{client_name} uploaded {count} stone(s) ({stone_ids_str[:60]}...). Tap to review."
    
    return send_multicast_push(
        db=db,
        tokens=tokens,
        title=title,
        body=body,
        url="/admin/jobs"
    )


def notify_client_stones_completed(
    db: Session,
    client_id: int,
    client_name: str,
    count: int,
    stone_ids_str: str
) -> int:
    """
    Sends instant FCM push notification to client's registered devices.
    """
    tokens_query = (
        db.query(DeviceToken.token)
        .filter(DeviceToken.user_id == client_id)
        .all()
    )
    tokens = [t[0] for t in tokens_query if t[0]]
    if not tokens:
        print(f"[FCM Service] No active device tokens found for client {client_name} (ID: {client_id})")
        return 0

    title = "✅ Stones Processing Completed"
    body = f"Admin completed processing {count} of your stones ({stone_ids_str[:60]}...). Ready for download."

    return send_multicast_push(
        db=db,
        tokens=tokens,
        title=title,
        body=body,
        url="/dashboard/completed"
    )

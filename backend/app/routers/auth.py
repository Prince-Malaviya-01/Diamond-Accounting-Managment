from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.schemas import LoginRequest, RegisterRequest, TokenResponse
from app.security import create_access_token, hash_password, verify_password
from app.services.log_service import log_activity
from app.services.storage_service import ensure_drive_sync_tree_for_user


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register")
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    print("!!! NEW REGISTRATION ATTEMPT !!!")
    username = payload.username.strip()
    
    # Check for existing username
    existing_user = db.query(User).filter(User.username == username).first()
    
    if existing_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Username already exists")

    pending_user = User(
        company_name=payload.company_name,
        username=username,
        password=hash_password(payload.password),
        rate_per_carat=payload.rate_per_carat,
        status="approved",
        is_admin=False
    )
    db.add(pending_user)
    db.commit()
    db.refresh(pending_user)

    # Automatically create storage
    ensure_drive_sync_tree_for_user(pending_user.username)

    log_activity(db, "user_register", f"User {pending_user.username} registered (auto-approved)", pending_user.id)
    return {"id": pending_user.id, "username": pending_user.username}



@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    username = payload.username.strip()
    print(f"DEBUG: Login attempt for username: '{username}'")
    
    user = db.query(User).filter(User.username == username).first()
    if not user:
        print(f"DEBUG: User '{username}' not found in database")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
        
    pwd_match = verify_password(payload.password, user.password)
    print(f"DEBUG: Password match for '{username}': {pwd_match}")
    
    if not pwd_match:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    if user.is_admin:
        # Admins are always allowed
        pass
    elif user.status == "pending":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Registration pending approval from admin")
    elif user.status == "rejected":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are rejected to login")

    token = create_access_token(subject=user.username)
    log_activity(db, "user_login", f"User {user.username} logged in", user.id)
    return TokenResponse(access_token=token, is_admin=user.is_admin)

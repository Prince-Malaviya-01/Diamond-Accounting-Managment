import os
import random
import time
import smtplib
from email.mime.text import MIMEText
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.config import get_settings
from app.models.user import User
from app.schemas import (
    LoginRequest, RegisterRequest, TokenResponse, 
    ForgotPasswordRequest, VerifyOTPRequest, ResetPasswordRequest
)
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
        is_admin=False,
        email=payload.email.strip().lower() if payload.email else None
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
    print(f"DEBUG: Login attempt for username: '{username}', is_admin_login: {payload.is_admin_login}")
    
    user = db.query(User).filter(User.username == username).first()
    if not user:
        print(f"DEBUG: User '{username}' not found in database")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Username is not found")
        
    pwd_match = verify_password(payload.password, user.password)
    print(f"DEBUG: Password match for '{username}': {pwd_match}")
    
    if not pwd_match:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="The password is incorrect. Please try again.")

    # Enforce Client vs Admin cross-login restrictions
    if payload.is_admin_login and not user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, 
            detail="Access denied: Admin credentials required on this page."
        )
    if not payload.is_admin_login and user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, 
            detail="Access denied: Client credentials required on this page."
        )

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


# In-memory secure OTP cache: { email: { "otp": str, "expires": float } }
otp_store = {}

@router.post("/forgot-password")
def forgot_password(payload: ForgotPasswordRequest, db: Session = Depends(get_db)):
    email = payload.email.strip().lower()
    
    # 1. Verify user exists with this email address
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="Enter a registered email address."
        )
        
    # 2. Generate random 6-digit OTP
    otp = f"{random.randint(100000, 999999)}"
    otp_store[email] = {
        "otp": otp,
        "expires": time.time() + 600  # 10 minutes active window
    }
    
    # 3. Critical print to console for quick developer testing
    print("\n" + "="*70)
    print(f"🔑 SECURITY OTP GENERATED FOR PASSWORD RESET:")
    print(f"➜ Registered Email : {email}")
    print(f"➜ Generated 6-Digit OTP : {otp}")
    print("="*70 + "\n")
    
    # 4. Attempt actual SMTP delivery if configured in Settings (.env)
    settings = get_settings()
    smtp_host = settings.smtp_host
    smtp_port = settings.smtp_port
    smtp_user = settings.smtp_user
    smtp_password = settings.smtp_password
    
    email_sent = False
    if smtp_user and smtp_password:
        try:
            greeting = "Hello Admin" if user.is_admin else f"Hello {user.company_name}"
            msg = MIMEText(
                f"{greeting},\n\n"
                f"Your 6-digit OTP to reset your Diamond Processing system password is: {otp}\n\n"
                f"This code will expire in 10 minutes.\n\n"
                f"Regards,\n"
                f"Diamond Processing Security Engine"
            )
            msg["Subject"] = "Diamond Portal Password Reset OTP"
            msg["From"] = f"no-reply <{smtp_user}>"
            msg["To"] = email
            
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.sendmail(smtp_user, [email], msg.as_string())
            email_sent = True
            print(f"✓ OTP successfully sent via email to {email}")
        except Exception as e:
            print(f"[SMTP ERROR] Failed to send email: {e}")
            
    message = "A 6-digit OTP has been sent to your email."
    if not email_sent:
        message = "A 6-digit OTP has been generated (check backend console logs)."
        
    return {"message": message, "email_sent": email_sent}


@router.post("/verify-otp")
def verify_otp(payload: VerifyOTPRequest, db: Session = Depends(get_db)):
    email = payload.email.strip().lower()
    otp = payload.otp.strip()
    
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Invalid email address."
        )
        
    cached = otp_store.get(email)
    if not cached:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="No active OTP request found. Please request a new OTP."
        )
        
    if time.time() > cached["expires"]:
        otp_store.pop(email, None)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="OTP has expired. Please request a new one."
        )
        
    if cached["otp"] != otp:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Incorrect OTP. Please try again."
        )
        
    return {"message": "OTP verified successfully"}


@router.post("/reset-password")
def reset_password(payload: ResetPasswordRequest, db: Session = Depends(get_db)):
    email = payload.email.strip().lower()
    otp = payload.otp.strip()
    new_password = payload.new_password
    
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Invalid email address."
        )
        
    cached = otp_store.get(email)
    if not cached or cached["otp"] != otp or time.time() > cached["expires"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Security validation failed: Invalid or expired OTP."
        )
        
    # Update and hash password
    user.password = hash_password(new_password)
    db.commit()
    
    # Clear the used OTP
    otp_store.pop(email, None)
    
    log_activity(db, "admin_reset_password" if user.is_admin else "user_reset_password", f"Password reset successfully via secure OTP verification", user.id)
    return {"message": "Password updated successfully"}

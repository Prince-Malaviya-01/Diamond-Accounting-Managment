from pathlib import Path
import shutil
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_admin, get_current_user
from app.models.user import User
from app.models.job import Job, JobStatus
from app.config import get_settings

settings = get_settings()
router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me")
def me(user: User = Depends(get_current_user)):
    return {
        "id": user.id,
        "company_name": user.company_name,
        "username": user.username,
        "rate_per_carat": user.rate_per_carat,
        "created_at": user.created_at,
        "is_admin": user.is_admin,
        "email": user.email,
    }


@router.get("/list")
def list_users(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    # Only show approved clients and admins in the general users list
    rows = db.query(User).filter(
        (User.is_admin == True) | (User.status == "approved")
    ).order_by(User.created_at.desc()).all()
    
    return [
        {
            "id": u.id,
            "company_name": u.company_name,
            "username": u.username,
            "rate_per_carat": u.rate_per_carat,
            "created_at": u.created_at,
            "is_admin": u.is_admin,
            "status": u.status,
            "email": u.email,
        }
        for u in rows
    ]

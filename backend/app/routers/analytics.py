from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.analytics.service import analytics_payload
from app.database import get_db
from app.dependencies import get_current_admin
from app.models.user import User


router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/summary")
def summary(admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    return analytics_payload(db)

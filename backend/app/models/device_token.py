from datetime import datetime
from typing import Optional
from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from app.models.base import Base
from app.utils.time import get_ist_now_naive


class DeviceToken(Base):
    __tablename__ = "device_tokens"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[Optional[int]] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True, nullable=True) # None = Admin, or User ID
    token: Mapped[str] = mapped_column(String(512), unique=True, index=True, nullable=False)
    device_name: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=get_ist_now_naive, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=get_ist_now_naive, onupdate=get_ist_now_naive, nullable=False)

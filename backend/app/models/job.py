from datetime import datetime
from app.utils.time import get_ist_now_naive
from enum import Enum
from pathlib import Path

from sqlalchemy import DateTime, Enum as SqlEnum, Float, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class JobStatus(str, Enum):
    uploaded = "Uploaded"
    queued = "Queued"
    processing = "Processing"
    completed = "Completed"
    failed = "Failed"


class Job(Base):
    __tablename__ = "jobs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True, nullable=False)
    stone_id: Mapped[str] = mapped_column(String(120), index=True, nullable=False)
    weight: Mapped[float] = mapped_column(Float, nullable=False)
    upload_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    processing_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    completed_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    status: Mapped[JobStatus] = mapped_column(SqlEnum(JobStatus), default=JobStatus.uploaded, nullable=False)
    downloaded: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    priority: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    retries: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    queue_entered_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    processing_started_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    rate_per_carat: Mapped[float | None] = mapped_column(Float, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=get_ist_now_naive, nullable=False)

    @property
    def upload_filename(self) -> str | None:
        if not self.upload_path:
            return None
        name = Path(self.upload_path).name
        import re
        # Strip hex prefix (16 chars)
        match = re.search(r"[0-9a-f]{16}_(.+)$", name)
        if match:
            name = match.group(1)
        # Strip timestamp suffix (e.g. _20260508102558)
        name = re.sub(r"_\d{14}(\.[^.]+)$", r"\1", name)
        return name

    @property
    def completed_filename(self) -> str | None:
        if not self.completed_path:
            return None
        name = Path(self.completed_path).name
        import re
        # Strip hex prefix (16 chars)
        match = re.search(r"[0-9a-f]{16}_(.+)$", name)
        if match:
            name = match.group(1)
        # Strip timestamp suffix (e.g. _20260508102558)
        name = re.sub(r"_\d{14}(\.[^.]+)$", r"\1", name)
        return name

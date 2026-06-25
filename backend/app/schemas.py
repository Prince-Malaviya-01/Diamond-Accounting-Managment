from typing import Optional
from datetime import datetime

from pydantic import BaseModel, Field, field_validator

from app.models.job import JobStatus


class RegisterRequest(BaseModel):
    company_name: str
    username: str
    password: str
    rate_per_carat: Optional[float] = 0.0
    email: Optional[str] = None


class LoginRequest(BaseModel):
    username: str
    password: str
    is_admin_login: Optional[bool] = False


class ForgotPasswordRequest(BaseModel):
    email: str


class VerifyOTPRequest(BaseModel):
    email: str
    otp: str


class ResetPasswordRequest(BaseModel):
    email: str
    otp: str
    new_password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    is_admin: bool


class JobCreateResponse(BaseModel):
    id: int
    stone_id: str
    weight: float
    status: JobStatus


class JobListItem(BaseModel):
    id: int
    stone_id: str
    weight: float
    status: JobStatus
    priority: int
    upload_filename: str | None
    completed_filename: str | None
    created_at: datetime
    queue_entered_at: datetime | None
    processing_started_at: datetime | None
    completed_at: datetime | None
    downloaded: bool


class SetPriorityRequest(BaseModel):
    job_id: int
    priority: int


class StartProcessingRequest(BaseModel):
    job_id: int


class UploadResultRequest(BaseModel):
    job_id: int


class BulkDownloadRequest(BaseModel):
    job_ids: list[int] = Field(min_length=1)


class MonthlyBillingItem(BaseModel):
    user_id: int
    company_name: str
    month: str
    total_stones: int
    total_weight: float
    rate_per_carat: float
    total_amount: float


class DashboardStats(BaseModel):
    total_users: int
    total_uploaded_jobs: int
    processing_jobs: int
    completed_jobs: int
    monthly_revenue: float
    pending_users_count: int = 0


class ActivityLogItem(BaseModel):
    action: str
    details: str
    created_at: datetime


class PriceConfigItem(BaseModel):
    weight: str
    price: str

class PriceConfigUpdate(BaseModel):
    items: list[PriceConfigItem]
    user_id: Optional[int] = None


class UpdateWeightRequest(BaseModel):
    job_id: int
    weight: float

    @field_validator("weight")
    @classmethod
    def validate_weight(cls, v: float) -> float:
        import math
        if math.isnan(v):
            raise ValueError("Weight cannot be NaN (Not a Number)")
        if v < 0:
            raise ValueError("Weight cannot be negative")
        return v

class ApplyRetroactivePricingRequest(BaseModel):
    user_id: Optional[int] = None # None means global
    from_date: datetime

class AnalyticsSummary(BaseModel):
    daily_uploads: list[dict]
    monthly_processed_jobs: list[dict]
    total_processed_weight: float
    revenue_per_user: list[dict]
    system_usage: list[dict]

class AccountProfitCreate(BaseModel):
    user_id: int
    amount: float
    payment_mode: Optional[str] = "Cash"
    remarks: Optional[str] = None


class AccountProfitUpdate(BaseModel):
    amount: float
    payment_mode: Optional[str] = "Cash"
    remarks: Optional[str] = None

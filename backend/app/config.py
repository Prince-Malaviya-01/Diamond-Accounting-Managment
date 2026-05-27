from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = "postgresql+psycopg://postgres:postgres@localhost:5432/diamond"
    secret_key: str = "replace_with_secure_random_secret"
    access_token_expire_minutes: int = 120
    download_link_expire_minutes: int = 30
    max_upload_size_mb: int = 100
    allowed_extensions: str = ".csv,.xlsx,.xls,.txt,.zip,.pdf,.adv"
    worker_poll_seconds: int = 2
    max_job_retries: int = 3
    auto_drive_sync_enabled: bool = True
    auto_drive_default_weight: float = 1.0

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[1] / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @property
    def storage_root(self) -> Path:
        return Path(__file__).resolve().parents[1] / "storage"

    @property
    def drive_sync_root(self) -> Path:
        # Internal drive sync storage
        return self.storage_root / "drive_sync"

    @property
    def external_online_root(self) -> Path:
        # Strictly D:\Online for client results sync
        return Path("D:\\Online")


@lru_cache
def get_settings() -> Settings:
    return Settings()

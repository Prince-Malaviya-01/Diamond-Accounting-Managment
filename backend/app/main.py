from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import threading

from app.database import engine
from app.models import activity_log, download_token, invoice, job, user
from app.models.base import Base
from app.models.user import User
from app.routers import admin, analytics, auth, billing, jobs, users
from app.security import hash_password
from app.services.drive_sync_service import backfill_existing_uploads_to_stone_folders
from app.services.storage_service import ensure_drive_sync_tree_for_user, ensure_storage_tree
from app.queue.worker import run_worker


app = FastAPI(title="Diamond Processing Management System", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup() -> None:
    print("\n" + "="*50)
    print("DIAMOND SYSTEM v1.1 (APPROVAL WORKFLOW) STARTED")
    print("="*50 + "\n")
    Base.metadata.create_all(bind=engine)
    ensure_storage_tree()
    _seed_admin()
    _ensure_drive_sync_folders_for_users()
    _backfill_existing_uploads()
    
    # Start worker in background thread
    worker_thread = threading.Thread(target=run_worker, daemon=True)
    worker_thread.start()
    print("Background worker started for auto-sync\n")


@app.get("/health")
def health():
    return {"status": "ok", "version": "v1.1_approval_workflow"}


@app.get("/test")
def test():
    return {"message": "Server is running and picking up new routes"}


@app.get("/routes")
def list_routes():
    return [{"path": route.path, "name": route.name, "methods": list(route.methods)} for route in app.routes]


def _seed_admin() -> None:
    from app.database import SessionLocal

    db: Session = SessionLocal()
    try:
        existing = db.query(User).filter(User.username == "admin").first()
        if not existing:
            db.add(
                User(
                    company_name="System Admin",
                    username="admin",
                    password=hash_password("admin123"),
                    rate_per_carat=0.0,
                    status="approved",
                    is_admin=True,
                )
            )
            db.commit()
    finally:
        db.close()


def _ensure_drive_sync_folders_for_users() -> None:
    from app.database import SessionLocal

    db: Session = SessionLocal()
    try:
        users = db.query(User).filter(User.is_admin.is_(False), User.status == "approved").all()
        for row in users:
            ensure_drive_sync_tree_for_user(row.username)
    finally:
        db.close()


def _backfill_existing_uploads() -> None:
    from app.database import SessionLocal

    db: Session = SessionLocal()
    try:
        backfill_existing_uploads_to_stone_folders(db)
    finally:
        db.close()


app.include_router(auth.router)
app.include_router(jobs.router)
app.include_router(admin.router)
app.include_router(billing.router)
app.include_router(analytics.router)
app.include_router(users.router)

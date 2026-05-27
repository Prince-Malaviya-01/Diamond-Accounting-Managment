# Diamond Processing Management System

Enterprise-ready web application to automate the full diamond processing lifecycle:

`User Upload -> Queue -> Admin Processing -> Result Upload -> User Download -> Monthly Billing`

## Stack

- Backend: FastAPI + SQLAlchemy + JWT
- Frontend: React + Vite
- Database: PostgreSQL
- Storage: Local file system
- Queue: Database-backed worker loop (FIFO + priority + retries)

## Monorepo Structure

```text
backend/
  app/
    analytics/
    billing/
    logs/
    models/
    queue/
    routers/
    services/
frontend/
  src/
    components/
    pages/
    admin/
    dashboard/
```

## Key Features

- User registration/login with hashed passwords and JWT auth
- Diamond job upload with:
  - Stone ID + Weight
  - file type validation
  - file size validation
  - duplicate Stone ID detection
- Batch upload via CSV/Excel (`Stone ID`, `Weight` columns)
- Job status workflow: `Uploaded`, `Queued`, `Processing`, `Completed`, `Failed`
- Priority-aware FIFO queue and worker retry logic
- Admin dashboard for queue control and result uploads
- Stone-wise filename traceability for upload/result history
- Progress summary APIs for processed vs pending visibility
- Secure download links with expiry and owner-only access
- Monthly billing from completed jobs and user rates
- PDF invoice generation to local storage
- Automatic invoice synchronization whenever jobs are marked completed
- Analytics API for chart-based admin monitoring
- Activity logs for login/upload/process/download/invoice actions

## Storage Layout

```text
backend/storage/
  uploads/{user_id}
  processing/{user_id}
  completed/{user_id}
  invoices/{user_id}
  logs/
  drive_sync/{company_or_username}/
    stone/
    done/
    stone_archive/
    done_archive/
```

## API Endpoints

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Jobs
- `POST /jobs/upload`
- `POST /jobs/batch-upload`
- `GET /jobs/list`
- `GET /jobs/summary`
- `POST /jobs/download` (create expiring download link)
- `GET /jobs/download/{token}` (download file)

### Admin
- `GET /admin/jobs`
- `GET /admin/jobs/{job_id}/upload`
- `GET /admin/jobs/{job_id}/completed`
- `POST /admin/process`
- `POST /admin/upload-result`
- `POST /admin/priority`
- `GET /admin/jobs/summary`
- `GET /admin/dashboard`
- `GET /admin/activity-logs`

### Billing
- `GET /billing/monthly`
- `POST /billing/invoice`
- `GET /billing/history`
- `GET /billing/stone-report`
- `GET /billing/invoice/{invoice_id}`

### Analytics
- `GET /analytics/summary`

### Users
- `GET /users/me`
- `GET /users/list` (admin)

## Local Run

1. Start PostgreSQL (Option A: Docker):

```bash
docker compose up -d
```

Alternative Option B: Local PostgreSQL service (without Docker)

```bash
# Windows (PowerShell) example
psql --version
# Ensure your local PostgreSQL service is running and create DB
psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE diamond;"
```

2. Backend setup:

```bash
cd backend
python -m venv .venv
. .venv/Scripts/activate
pip install -r requirements.txt
copy .env.example .env
# If using local PostgreSQL, keep DATABASE_URL like:
# DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/diamond
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

If PostgreSQL authentication fails, update `backend/.env` with your real local credentials:

```bash
DATABASE_URL=postgresql+psycopg://<username>:<password>@localhost:5432/diamond
```

3. Start worker in a second terminal:

```bash
cd backend
. .venv/Scripts/activate
python -m app.queue.worker
```

4. Frontend setup:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`
Backend URL: `http://localhost:8000`
Docs: `http://localhost:8000/docs`

## Auto Folder Workflow (Private Server)

This system now supports automatic folder-based processing flow.

1. Use your private server folders directly (no Google Drive integration needed).
2. Put raw stone files in: `backend/storage/drive_sync/<username>/stone`
3. Worker auto-creates jobs from file names (`stone_id = filename without extension`).
4. Your external processing software can write output to: `backend/storage/drive_sync/<username>/done`
5. Worker auto-marks matching jobs as `Completed` and files appear in user download history.

Important:
- Folder key is strictly username only.
- For quick testing, sample folders are created:
  - `backend/storage/drive_sync/A/stone`
  - `backend/storage/drive_sync/A/done`
  - `backend/storage/drive_sync/B/stone`
  - `backend/storage/drive_sync/B/done`
- Auto sync can be controlled using `backend/.env`:
  - `AUTO_DRIVE_SYNC_ENABLED=true`
  - `AUTO_DRIVE_DEFAULT_WEIGHT=1.0`

## Default Admin

- Username: `admin`
- Password: `admin123`

Change this immediately in production.

## Notes for Production Hardening

- Move admin seed credentials to environment variables
- Add Alembic migrations
- Replace local disk with object storage (S3/Azure Blob) if needed
- Add rate limiting and audit retention policies
- Add Redis/RQ or Celery for more advanced queue workloads
- Add background scheduler for automatic month-end invoice generation

from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.billing.service import (
    create_invoice_excel, 
    create_invoice_pdf, 
    generate_monthly_summary, 
    upsert_invoice,
    create_custom_report
)
from app.models.price_config import PriceConfig
from app.database import get_db
from app.dependencies import get_current_admin, get_current_user
from app.utils.time import get_ist_now_naive
from app.models.invoice import Invoice
from app.models.job import Job, JobStatus
from app.models.user import User
from app.services.log_service import log_activity
from app.services.storage_service import get_user_folder
from app.services.pricing_service import get_price_for_weight
from app.models.account_profit import AccountProfit


router = APIRouter(prefix="/billing", tags=["billing"])
@router.get("/profits")
def get_user_profits(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Fetch all recorded payments for the logged-in user."""
    profits = db.query(AccountProfit).filter(AccountProfit.user_id == user.id).order_by(AccountProfit.created_at.desc()).all()
    return [
        {
            "id": p.id,
            "amount": p.amount,
            "payment_mode": p.payment_mode,
            "remarks": p.remarks,
            "created_at": p.created_at
        } for p in profits
    ]

@router.get("/statement-pdf")
def download_my_account_pdf(
    year: int | None = None,
    month: int | None = None,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    from app.billing.service import create_account_statement_pdf
    
    # Revenue calc
    query = db.query(Job).filter(Job.user_id == user.id, Job.status == JobStatus.completed)
    if year: query = query.filter(extract("year", Job.completed_at) == year)
    if month: query = query.filter(extract("month", Job.completed_at) == month)
    
    jobs = query.all()
    total_revenue = 0.0
    for j in jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(user.rate_per_carat), at_time=j.created_at, user_id=user.id)
        total_revenue += float(j.weight) * float(rate)

    # Payments calc
    p_query = db.query(AccountProfit).filter(AccountProfit.user_id == user.id)
    if year: p_query = p_query.filter(extract("year", AccountProfit.created_at) == year)
    if month: p_query = p_query.filter(extract("month", AccountProfit.created_at) == month)
    
    profits = p_query.order_by(AccountProfit.created_at.desc()).all()
    received = sum(p.amount for p in profits)
    
    summary = {
        "total_revenue": round(total_revenue, 2),
        "received": round(received, 2),
        "pending": round(total_revenue - received, 2)
    }
    
    entries = [
        {"amount": p.amount, "payment_mode": p.payment_mode, "created_at": p.created_at}
        for p in profits
    ]

    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    ts = int(get_ist_now_naive().timestamp())
    pdf_path = temp_dir / f"statement_{user.username}_{ts}.pdf"
    
    create_account_statement_pdf(pdf_path, user, summary, entries)
    return FileResponse(path=pdf_path, filename=f"Account_Statement_{user.username}.pdf", media_type="application/pdf")

@router.get("/monthly")
def monthly_billing(year: int | None = None, month: int | None = None, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    _ = admin
    now = get_ist_now_naive()
    selected_year = year or now.year
    selected_month = month or now.month
    return generate_monthly_summary(db, selected_year, selected_month)


@router.post("/invoice")
def generate_invoice(user_id: int | None = None, year: int | None = None, month: int | None = None, admin: User = Depends(get_current_admin), db: Session = Depends(get_db)):
    now = get_ist_now_naive()
    selected_year = year or now.year
    selected_month = month or now.month
    month_str = f"{selected_year:04d}-{selected_month:02d}"

    summaries = generate_monthly_summary(db, selected_year, selected_month)
    if user_id:
        summaries = [s for s in summaries if s["user_id"] == user_id]

    generated_count = 0
    generated_names = []
    for summary in summaries:
        user = db.query(User).filter(User.id == summary["user_id"]).first()
        if not user:
            continue
        # Get stone details for this user/month
        stones = _get_user_stones_for_month(db, user, selected_year, selected_month)
        print(f"DEBUG: Generating invoice for {user.username} with {len(stones)} stones")
        
        invoice_dir = get_user_folder("invoices", user.id)
        # Use a timestamp to prevent caching and ensure we see new files
        ts = int(now.timestamp())
        out = invoice_dir / f"invoice_{month_str}_{ts}.pdf"
        
        create_invoice_pdf(out, summary, stones, db)
        upsert_invoice(db, user, month_str, summary, str(out))
        log_activity(db, "invoice_generated", f"Invoice generated for {user.company_name} ({month_str}) with {len(stones)} stones", admin.id)
        generated_count += 1
        generated_names.append(user.company_name)

    return {"month": month_str, "generated": generated_count, "companies": generated_names}


@router.get("/history")
def invoice_history(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(Invoice).filter(Invoice.user_id == user.id).order_by(Invoice.month.desc()).all()
    return [
        {
            "id": r.id,
            "month": r.month,
            "total_stones": r.total_stones,
            "total_weight": r.total_weight,
            "rate_per_carat": r.rate_per_carat,
            "total_amount": r.total_amount,
            "file_path": r.file_path,
            "created_at": r.created_at,
        }
        for r in rows
    ]


@router.get("/stone-report")
def stone_report(
    year: int | None = None,
    month: int | None = None,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    rows = db.query(Job).filter(Job.user_id == user.id, Job.status == JobStatus.completed)
    if year is not None:
        rows = rows.filter(extract("year", Job.completed_at) == year)
    if month is not None:
        rows = rows.filter(extract("month", Job.completed_at) == month)

    jobs = rows.order_by(Job.completed_at.desc(), Job.id.desc()).all()
    res = []
    for j in jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(user.rate_per_carat), at_time=j.created_at, user_id=user.id)
        res.append({
            "job_id": j.id,
            "stone_id": j.stone_id,
            "weight": float(j.weight),
            "completed_at": j.completed_at,
            "completed_filename": j.completed_filename,
            "rate_per_carat": float(rate),
            "amount": round(float(j.weight) * float(rate), 2),
        })
    return res


@router.get("/invoice/{invoice_id}")
def download_invoice(invoice_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    row = db.query(Invoice).filter(Invoice.id == invoice_id, Invoice.user_id == user.id).first()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invoice not found")
    
    # Get the data and stones for this invoice
    year, month = map(int, row.month.split("-"))
    summary = {
        "company_name": user.company_name,
        "month": row.month,
        "total_stones": row.total_stones,
        "total_weight": float(row.total_weight),
        "total_amount": float(row.total_amount),
        "user_id": user.id
    }
    stones = _get_user_stones_for_month(db, user, year, month)
    
    # Generate a temporary PDF file for download
    user_dir = get_user_folder("temp", user.id)
    ts = int(get_ist_now_naive().timestamp())
    pdf_path = user_dir / f"invoice_{row.month}_{ts}.pdf"
    
    create_invoice_pdf(pdf_path, summary, stones, db)
    
    log_activity(db, "invoice_download", f"Invoice {row.id} dynamically generated and downloaded", user.id)
    return FileResponse(path=pdf_path, filename=pdf_path.name, media_type="application/pdf")


@router.get("/invoice/{invoice_id}/excel")
def download_invoice_excel(invoice_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    row = db.query(Invoice).filter(Invoice.id == invoice_id, Invoice.user_id == user.id).first()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invoice not found")

    # Generate a temporary Excel file for download
    user_dir = get_user_folder("temp", user.id)
    ts = int(get_ist_now_naive().timestamp())
    excel_path = user_dir / f"invoice_{row.month}_{ts}.xlsx"
    
    # Get the data and stones for this invoice
    year, month = map(int, row.month.split("-"))
    summary = {
        "company_name": user.company_name,
        "month": row.month,
        "total_stones": row.total_stones,
        "total_weight": float(row.total_weight),
        "total_amount": float(row.total_amount),
        "user_id": user.id
    }
    stones = _get_user_stones_for_month(db, user, year, month)
    
    create_invoice_excel(excel_path, summary, stones, db)
    
    return FileResponse(path=excel_path, filename=excel_path.name, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")


# ── Admin billing endpoints ──────────────────────────────────────

@router.get("/admin/overview")
def admin_billing_overview(
    year: int | None = None,
    month: int | None = None,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """Per-user monthly billing summary for admin."""
    _ = admin
    now = get_ist_now_naive()
    y = year or now.year
    m = month or now.month
    return generate_monthly_summary(db, y, m)


@router.get("/admin/stone-report")
def admin_stone_report(
    user_id: int | None = None,
    year: int | None = None,
    month: int | None = None,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """Admin can view any user's stone report or all users."""
    _ = admin
    query = db.query(Job, User.company_name, User.username, User.rate_per_carat).join(User, User.id == Job.user_id).filter(Job.status == JobStatus.completed)

    if user_id is not None:
        query = query.filter(Job.user_id == user_id)
    if year is not None:
        query = query.filter(extract("year", Job.completed_at) == year)
    if month is not None:
        query = query.filter(extract("month", Job.completed_at) == month)

    rows = query.order_by(Job.completed_at.desc(), Job.id.desc()).all()
    res = []
    for j, company, uname, default_rate in rows:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(default_rate), at_time=j.created_at, user_id=j.user_id)
        res.append({
            "job_id": j.id,
            "user_id": j.user_id,
            "company_name": company,
            "username": uname,
            "stone_id": j.stone_id,
            "weight": float(j.weight),
            "completed_at": j.completed_at,
            "completed_filename": j.completed_filename,
            "rate_per_carat": float(rate),
            "amount": round(float(j.weight) * float(rate), 2),
        })
    return res


@router.get("/admin/all-invoices")
def admin_all_invoices(
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """All invoices across all users."""
    _ = admin
    rows = (
        db.query(Invoice, User.company_name, User.username)
        .join(User, User.id == Invoice.user_id)
        .order_by(Invoice.month.desc(), Invoice.created_at.desc())
        .all()
    )
    return [
        {
            "id": inv.id,
            "user_id": inv.user_id,
            "company_name": company,
            "username": uname,
            "month": inv.month,
            "total_stones": inv.total_stones,
            "total_weight": inv.total_weight,
            "rate_per_carat": inv.rate_per_carat,
            "total_amount": inv.total_amount,
            "created_at": inv.created_at,
        }
        for inv, company, uname in rows
    ]


@router.get("/admin/invoice/{invoice_id}")
def admin_download_invoice(
    invoice_id: int,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """Admin can download any invoice."""
    _ = admin
    # Admin can download any invoice
    row = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invoice not found")
    
    user = db.query(User).filter(User.id == row.user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    # Get the data and stones for this invoice
    year, month = map(int, row.month.split("-"))
    summary = {
        "company_name": user.company_name,
        "month": row.month,
        "total_stones": row.total_stones,
        "total_weight": float(row.total_weight),
        "total_amount": float(row.total_amount),
        "user_id": user.id
    }
    stones = _get_user_stones_for_month(db, user, year, month)
    
    # Generate a temporary PDF file for download
    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    ts = int(get_ist_now_naive().timestamp())
    pdf_path = temp_dir / f"invoice_{user.username}_{row.month}_{ts}.pdf"
    
    create_invoice_pdf(pdf_path, summary, stones, db)
    
    return FileResponse(path=pdf_path, filename=pdf_path.name, media_type="application/pdf")


@router.get("/admin/invoice/{invoice_id}/excel")
def admin_download_invoice_excel(
    invoice_id: int,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """Admin can download any invoice as Excel."""
    row = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invoice not found")

    user = db.query(User).filter(User.id == row.user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    # Generate a temporary Excel file for download
    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    ts = int(get_ist_now_naive().timestamp())
    excel_path = temp_dir / f"invoice_{user.username}_{row.month}_{ts}.xlsx"
    
    # Get the data and stones for this invoice
    year, month = map(int, row.month.split("-"))
    summary = {
        "company_name": user.company_name,
        "month": row.month,
        "total_stones": row.total_stones,
        "total_weight": float(row.total_weight),
        "total_amount": float(row.total_amount),
        "user_id": user.id
    }
    stones = _get_user_stones_for_month(db, user, year, month)
    
    create_invoice_excel(excel_path, summary, stones, db)
    
    log_activity(db, "admin_invoice_excel_download", f"Admin {admin.username} downloaded Excel invoice for {user.company_name}", admin.id)
    return FileResponse(path=excel_path, filename=excel_path.name, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")


@router.get("/admin/user-account/{user_id}")
def admin_user_account(
    user_id: int,
    year: int | None = None,
    month: int | None = None,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    """Full account summary for a specific user, optionally filtered by month/year."""
    _ = admin
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    # Get completed jobs
    query = db.query(Job).filter(Job.user_id == user_id, Job.status == JobStatus.completed)
    
    # Apply filters if provided
    if year is not None:
        query = query.filter(extract("year", Job.completed_at) == year)
    if month is not None:
        query = query.filter(extract("month", Job.completed_at) == month)

    all_completed = query.all()
    total_stones = len(all_completed)
    total_weight = sum(float(j.weight) for j in all_completed)
    total_revenue = 0.0
    
    from collections import defaultdict
    months_map = defaultdict(lambda: {"stones": 0, "weight": 0.0, "amount": 0.0})
    
    for j in all_completed:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(user.rate_per_carat), at_time=j.created_at, user_id=user_id)
        amt = float(j.weight) * float(rate)
        total_revenue += amt
        if j.completed_at:
            m_key = f"{j.completed_at.year:04d}-{j.completed_at.month:02d}"
            months_map[m_key]["stones"] += 1
            months_map[m_key]["weight"] += float(j.weight)
            months_map[m_key]["amount"] += amt

    total_revenue = round(total_revenue, 2)
    monthly = sorted([
        {"month": k, "stones": v["stones"], "weight": round(v["weight"], 2), "amount": round(v["amount"], 2)}
        for k, v in months_map.items()
    ], key=lambda x: x["month"], reverse=True)

    # Active stones
    active = db.query(func.count(Job.id)).filter(Job.user_id == user_id, Job.status != JobStatus.completed, Job.status != JobStatus.failed).scalar() or 0

    # Invoices for this user
    invoices = db.query(Invoice).filter(Invoice.user_id == user_id).order_by(Invoice.month.desc()).all()

    return {
        "user_id": user.id,
        "company_name": user.company_name,
        "username": user.username,
        "rate_per_carat": float(user.rate_per_carat),
        "total_stones": total_stones,
        "total_weight": float(total_weight),
        "total_revenue": total_revenue,
        "active_stones": active,
        "monthly_breakdown": monthly,
        "invoices": [
            {
                "id": inv.id,
                "month": inv.month,
                "total_stones": inv.total_stones,
                "total_weight": inv.total_weight,
                "total_amount": inv.total_amount,
                "created_at": inv.created_at,
            }
            for inv in invoices
        ],
    }


@router.get("/user-earliest-date/{user_id}")
def get_user_earliest_date(user_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get the date of the very first completed job for this user. Accessible by Admin or the User."""
    if not current_user.is_admin and current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Not authorized")
    """Get the date of the very first completed job for this user."""
    first_job = db.query(Job).filter(Job.user_id == user_id, Job.status == JobStatus.completed).order_by(Job.completed_at.asc()).first()
    if not first_job or not first_job.completed_at:
        return {"date": None}
    return {"date": first_job.completed_at.date().isoformat()}

@router.get("/weight-ranges/{user_id}")
def get_user_weight_ranges(
    user_id: int, 
    year: int | None = None, 
    month: int | None = None, 
    current_user: User = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    """Fetch weight ranges and pricing configured for this user."""
    if not current_user.is_admin and current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    configs = db.query(PriceConfig).filter(PriceConfig.user_id == user_id, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()
    if not configs:
        configs = db.query(PriceConfig).filter(PriceConfig.user_id == None, PriceConfig.valid_to == None).order_by(PriceConfig.sort_order).all()
        
    return [{"id": cfg.id, "range": cfg.weight_range, "price": cfg.price_per_carat} for cfg in configs]

@router.post("/report")
def generate_custom_report(
    payload: dict,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Generate a custom report for the logged-in user."""
    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    
    ts = int(get_ist_now_naive().timestamp())
    ext = ".pdf" if payload.get("format") == "PDF" else ".xlsx"
    filename = f"report_{user.username}_{ts}{ext}"
    out_path = temp_dir / filename
    
    summary = create_custom_report(
        db=db,
        user=user,
        output_path=out_path,
        report_format=payload.get("format", "PDF"),
        report_type=payload.get("type", "FULL"),
        filter_type=payload.get("filter", "MONTH"),
        filter_dates=payload.get("dates"),
        month_str=payload.get("month")
    )
    
    if summary.get("total_stones", 0) == 0:
        raise HTTPException(status_code=404, detail="No Record Found")
    
    media_type = "application/pdf" if ext == ".pdf" else "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    return FileResponse(path=out_path, filename=filename, media_type=media_type)

@router.post("/admin/report")
def admin_generate_custom_report(
    payload: dict,
    admin: User = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin generates custom report for any user."""
    target_user_id = payload.get("user_id")
    target_user = db.query(User).filter(User.id == target_user_id).first()
    if not target_user:
        raise HTTPException(status_code=404, detail="User not found")
        
    from app.config import get_settings
    settings = get_settings()
    temp_dir = settings.storage_root / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    
    ts = int(get_ist_now_naive().timestamp())
    ext = ".pdf" if payload.get("format") == "PDF" else ".xlsx"
    filename = f"report_{target_user.username}_{ts}{ext}"
    out_path = temp_dir / filename
    
    summary = create_custom_report(
        db=db,
        user=target_user,
        output_path=out_path,
        report_format=payload.get("format", "PDF"),
        report_type=payload.get("type", "FULL"),
        filter_type=payload.get("filter", "MONTH"),
        filter_dates=payload.get("dates"),
        month_str=payload.get("month")
    )
    
    if summary.get("total_stones", 0) == 0:
        raise HTTPException(status_code=404, detail="No Record Found")
    
    log_activity(db, "admin_report_custom", f"Admin {admin.username} generated {payload.get('type')} report for {target_user.company_name}", admin.id)
    media_type = "application/pdf" if ext == ".pdf" else "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    return FileResponse(path=out_path, filename=filename, media_type=media_type)

def _get_user_stones_for_month(db: Session, user: User, year: int, month: int) -> list[dict]:
    """Helper to get stone details for invoice PDF."""
    import calendar
    _, last_day = calendar.monthrange(year, month)
    start_date = datetime(year, month, 1)
    end_date = datetime(year, month, last_day, 23, 59, 59, 999999)

    jobs = (
        db.query(Job)
        .filter(
            Job.user_id == user.id,
            Job.status == JobStatus.completed,
            Job.completed_at >= start_date,
            Job.completed_at <= end_date
        )
        .order_by(Job.completed_at.asc(), Job.id.asc())
        .all()
    )
    result = []
    for j in jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(user.rate_per_carat), at_time=j.created_at, user_id=user.id)
        result.append({
            "stone_id": j.stone_id,
            "weight": float(j.weight),
            "completed_at": j.completed_at.strftime("%d/%m/%Y") if j.completed_at else "",
            "rate_per_carat": float(rate),
            "amount": round(float(j.weight) * float(rate), 2),
        })
    return result

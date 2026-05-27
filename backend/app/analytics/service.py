from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.models.job import Job, JobStatus
from app.models.user import User


def analytics_payload(db: Session) -> dict:
    daily_uploads = (
        db.query(func.date(Job.created_at).label("day"), func.count(Job.id).label("count"))
        .group_by(func.date(Job.created_at))
        .order_by(func.date(Job.created_at))
        .all()
    )

    monthly_processed_jobs_rows = (
        db.query(
            extract("year", Job.completed_at).label("year"),
            extract("month", Job.completed_at).label("month"),
            func.count(Job.id).label("count"),
        )
        .filter(Job.status == JobStatus.completed)
        .group_by(extract("year", Job.completed_at), extract("month", Job.completed_at))
        .order_by(extract("year", Job.completed_at), extract("month", Job.completed_at))
        .all()
    )

    monthly_processed_jobs = [
        {"month": f"{int(year):04d}-{int(month):02d}", "count": count}
        for year, month, count in monthly_processed_jobs_rows
        if year is not None and month is not None
    ]

    total_processed_weight = (
        db.query(func.coalesce(func.sum(Job.weight), 0.0)).filter(Job.status == JobStatus.completed).scalar() or 0.0
    )

    # Calculate revenue per user using the pricing service
    from app.services.pricing_service import get_price_for_weight
    
    users = db.query(User).filter(User.is_admin == False).all()
    revenue_per_user_list = []
    
    for user in users:
        completed_jobs = db.query(Job).filter(Job.user_id == user.id, Job.status == JobStatus.completed).all()
        user_revenue = 0.0
        for job in completed_jobs:
            price_per_ct = get_price_for_weight(db, job.weight, user.rate_per_carat)
            user_revenue += job.weight * price_per_ct
        
        revenue_per_user_list.append({
            "user_id": user.id,
            "company": user.company_name or user.username,
            "revenue": user_revenue
        })

    system_usage = (
        db.query(User.company_name, func.count(Job.id).label("jobs"))
        .outerjoin(Job, Job.user_id == User.id)
        .group_by(User.company_name)
        .all()
    )

    return {
        "daily_uploads": [{"day": str(day), "count": count} for day, count in daily_uploads],
        "monthly_processed_jobs": monthly_processed_jobs,
        "total_processed_weight": float(total_processed_weight),
        "revenue_per_user": revenue_per_user_list,
        "system_usage": [{"company": company, "jobs": jobs} for company, jobs in system_usage],
    }

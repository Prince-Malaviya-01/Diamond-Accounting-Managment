import os
import sys

# Add backend to path
sys.path.append(os.getcwd())

from app.database import SessionLocal
from app.models.user import User
from app.models.job import Job, JobStatus
from app.models.account_profit import AccountProfit
from app.billing.service import create_account_statement_pdf
from sqlalchemy import extract
from app.services.pricing_service import get_price_for_weight
from app.utils.time import get_ist_now_naive
from pathlib import Path

db = SessionLocal()
try:
    user_id = 59 # From user's error log
    target_user = db.query(User).filter(User.id == user_id).first()
    if not target_user:
        print("User not found")
        sys.exit(1)

    print(f"Testing for user: {target_user.username}")

    query = db.query(Job).filter(Job.user_id == user_id, Job.status == JobStatus.completed)
    jobs = query.all()
    total_revenue = 0.0
    for j in jobs:
        rate = j.rate_per_carat if j.rate_per_carat is not None else get_price_for_weight(db, float(j.weight), float(target_user.rate_per_carat), at_time=j.created_at, user_id=user_id)
        total_revenue += float(j.weight) * float(rate)

    p_query = db.query(AccountProfit).filter(AccountProfit.user_id == user_id)
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

    out_path = Path("test_statement.pdf")
    create_account_statement_pdf(out_path, target_user, summary, entries)
    print(f"PDF generated successfully at {out_path.absolute()}")

except Exception as e:
    import traceback
    traceback.print_exc()
finally:
    db.close()

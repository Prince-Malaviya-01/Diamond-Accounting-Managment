from app.database import SessionLocal
from app.models.job import Job
from app.models.user import User
from app.services.pricing_service import get_price_for_weight

def lock_all_existing_jobs():
    db = SessionLocal()
    try:
        # Use is_(None) for more reliable SQLAlchemy query
        jobs = db.query(Job).filter(Job.rate_per_carat.is_(None)).all()
        print(f"Found {len(jobs)} jobs without locked rates.")
        
        users = {u.id: u for u in db.query(User).all()}
        
        for j in jobs:
            user = users.get(j.user_id)
            if not user:
                continue
            
            # Calculate current rate and lock it
            rate = get_price_for_weight(db, float(j.weight), float(user.rate_per_carat))
            j.rate_per_carat = rate
            
        db.commit()
        print(f"Locking complete for {len(jobs)} jobs.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    lock_all_existing_jobs()

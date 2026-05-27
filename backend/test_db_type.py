def test_api():
    try:
        from app.database import SessionLocal
        from app.models.job import Job
        db = SessionLocal()
        j = db.query(Job).first()
        print(f"Sample Job: {j.id}, rate_per_carat type: {type(j.rate_per_carat)}, value: {j.rate_per_carat}")
        db.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_api()

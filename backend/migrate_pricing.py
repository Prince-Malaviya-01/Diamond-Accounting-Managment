from sqlalchemy import create_engine, text
from app.config import get_settings

settings = get_settings()
engine = create_engine(settings.database_url)

with engine.connect() as conn:
    try:
        conn.execute(text("ALTER TABLE price_configs ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"))
        conn.commit()
        print("Column updated_at added to price_configs")
    except Exception as e:
        print(f"Error or already exists: {e}")

    try:
        # Also ensure rate_per_carat is present in jobs (it should be, but let's be safe)
        conn.execute(text("ALTER TABLE jobs ADD COLUMN rate_per_carat DOUBLE PRECISION"))
        conn.commit()
        print("Column rate_per_carat added to jobs")
    except Exception as e:
        print(f"Error or already exists: {e}")

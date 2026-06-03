from app.config import get_settings
from sqlalchemy import create_engine, text

settings = get_settings()
engine = create_engine(settings.database_url)

with engine.connect() as conn:
    try:
        conn.execute(text("ALTER TABLE jobs ADD COLUMN IF NOT EXISTS downloaded BOOLEAN DEFAULT FALSE NOT NULL;"))
        conn.commit()
        print("Success: Column 'downloaded' added to 'jobs' table.")
    except Exception as e:
        print(f"Error: {e}")

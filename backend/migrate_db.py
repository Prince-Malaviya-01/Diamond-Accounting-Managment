import sys
from sqlalchemy import create_engine, text
from app.config import get_settings

def run_migration():
    settings = get_settings()
    engine = create_engine(settings.database_url)
    
    query = text("ALTER TABLE users ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'pending' NOT NULL;")
    update_query = text("UPDATE users SET status = 'approved' WHERE is_admin = true;")
    
    try:
        with engine.connect() as conn:
            print(f"Connecting to {settings.database_url}...")
            conn.execute(query)
            conn.execute(update_query)
            conn.commit()
            print("Successfully added 'status' column and updated admin users.")
    except Exception as e:
        print(f"Error running migration: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_migration()

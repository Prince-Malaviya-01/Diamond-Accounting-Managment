from app.config import get_settings
from sqlalchemy import create_engine, text

settings = get_settings()
engine = create_engine(settings.database_url)

with engine.connect() as conn:
    try:
        # Add column if not exists (PostgreSQL syntax or SQLite fallback)
        print("Adding email column to users table if not exists...")
        if "sqlite" in settings.database_url:
            # SQLite doesn't support IF NOT EXISTS in ALTER TABLE directly in older versions,
            # but we can try to add it. If it fails due to duplicate, that's fine.
            try:
                conn.execute(text("ALTER TABLE users ADD COLUMN email VARCHAR(255);"))
                conn.commit()
                print("SQLite Success: Column 'email' added.")
            except Exception as ex:
                if "duplicate column" in str(ex).lower() or "already exists" in str(ex).lower():
                    print("SQLite: Column 'email' already exists.")
                else:
                    raise ex
        else:
            # PostgreSQL
            conn.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS email VARCHAR(255);"))
            conn.commit()
            print("PostgreSQL Success: Column 'email' added.")
            
        # Update Admin email
        print("Updating admin email to rbsofttech17@gmail.com...")
        conn.execute(text("UPDATE users SET email = 'rbsofttech17@gmail.com' WHERE is_admin = true;"))
        conn.commit()
        print("Success: Admin email updated.")
        
    except Exception as e:
        print(f"Error during migration: {e}")

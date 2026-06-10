import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.config import get_settings
from sqlalchemy import create_engine, text

settings = get_settings()
print(f"Migrating database: {settings.database_url}")
engine = create_engine(settings.database_url)

is_postgres = "postgresql" in settings.database_url.lower()

if is_postgres:
    create_notifications_table_sql = """
    CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        title VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE NOT NULL,
        created_at TIMESTAMP NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    """
else:
    create_notifications_table_sql = """
    CREATE TABLE IF NOT EXISTS notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE NOT NULL,
        created_at DATETIME NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    """

# We run each statement in a separate connection/transaction to prevent transaction abortion
def run_sql(sql_str, success_msg, error_prefix):
    with engine.connect() as conn:
        try:
            conn.execute(text(sql_str))
            conn.commit()
            print(f"Success: {success_msg}")
        except Exception as e:
            err_str = str(e).lower()
            if "duplicate column" in err_str or "already exists" in err_str:
                print(f"Notice: {success_msg} (already exists)")
            else:
                print(f"Error {error_prefix}: {e}")

# 1. Create notifications table
run_sql(create_notifications_table_sql, "'notifications' table verified/created", "creating notifications table")

# 2. Add notified_admin to jobs
if is_postgres:
    # Check if column exists or handle exception
    run_sql("ALTER TABLE jobs ADD COLUMN IF NOT EXISTS notified_admin BOOLEAN DEFAULT FALSE NOT NULL;", "Column 'notified_admin' verified in 'jobs' table", "adding 'notified_admin'")
else:
    run_sql("ALTER TABLE jobs ADD COLUMN notified_admin BOOLEAN DEFAULT FALSE NOT NULL;", "Column 'notified_admin' verified in 'jobs' table", "adding 'notified_admin'")

# 3. Add notified_client to jobs
if is_postgres:
    run_sql("ALTER TABLE jobs ADD COLUMN IF NOT EXISTS notified_client BOOLEAN DEFAULT FALSE NOT NULL;", "Column 'notified_client' verified in 'jobs' table", "adding 'notified_client'")
else:
    run_sql("ALTER TABLE jobs ADD COLUMN notified_client BOOLEAN DEFAULT FALSE NOT NULL;", "Column 'notified_client' verified in 'jobs' table", "adding 'notified_client'")

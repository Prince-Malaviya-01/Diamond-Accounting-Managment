import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent))
from app.database import SessionLocal
from sqlalchemy import text

db = SessionLocal()
try:
    # Resetting users_id_seq to 1. The next inserted user will get ID 2.
    db.execute(text("SELECT setval('users_id_seq', 1)"))
    db.commit()
    print("SUCCESS: users_id_seq reset to 1 on remote database")
except Exception as e:
    db.rollback()
    print(f"ERROR: {e}")
finally:
    db.close()

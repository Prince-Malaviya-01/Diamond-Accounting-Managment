from app.database import engine
from sqlalchemy import text

with engine.connect() as conn:
    try:
        conn.execute(text("ALTER TABLE account_profits ADD COLUMN payment_mode VARCHAR"))
        conn.commit()
        print("Column payment_mode added successfully")
    except Exception as e:
        print(f"Error or already exists: {e}")

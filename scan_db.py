import sqlite3
import os

db_path = 'backend/app.db'
if not os.path.exists(db_path):
    print(f"DB not found at {db_path}")
    exit()

conn = sqlite3.connect(db_path)
cur = conn.cursor()
cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cur.fetchall()
print(f"Tables: {tables}")

for table in tables:
    tname = table[0]
    print(f"\nScanning table: {tname}")
    try:
        cur.execute(f"SELECT * FROM {tname} LIMIT 5")
        print(cur.fetchall())
    except:
        print("Failed to read table")

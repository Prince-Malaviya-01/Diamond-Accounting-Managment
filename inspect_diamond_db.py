import sqlite3
conn = sqlite3.connect('backend/diamond.db')
cur = conn.cursor()
cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
print(cur.fetchall())
cur.execute("SELECT weight, stone_id FROM jobs LIMIT 10")
print(cur.fetchall())

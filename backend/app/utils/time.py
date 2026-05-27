from datetime import datetime
from zoneinfo import ZoneInfo

def get_ist_now():
    return datetime.now(ZoneInfo("Asia/Kolkata"))

def get_ist_now_naive():
    # Returns a naive datetime object representing the current time in IST
    # Useful for naive TIMESTAMP columns in DB
    return datetime.now(ZoneInfo("Asia/Kolkata")).replace(tzinfo=None)

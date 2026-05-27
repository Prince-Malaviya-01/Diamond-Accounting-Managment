import os
import sys
import json
import time
import requests
from pathlib import Path

# Base configuration
CONFIG_FILE = Path(__file__).resolve().parent / "backup_config.json"
DEFAULT_BACKUP_ROOT = Path("D:") / "Diamond_Backup_Files"

def load_config():
    if CONFIG_FILE.exists():
        with open(CONFIG_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_config(config):
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=4)

def login(server_url, username, password):
    url = f"{server_url.rstrip('/')}/auth/login"
    payload = {"username": username, "password": password}
    try:
        response = requests.post(url, json=payload, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if not data.get("is_admin"):
                print("❌ Error: Entered account is not an Admin account!")
                return None
            return data.get("access_token")
        else:
            print(f"❌ Login failed with status code {response.status_code}: {response.text}")
            return None
    except Exception as e:
        print(f"❌ Failed to connect to server at {url}: {e}")
        return None

def fetch_files_list(server_url, token):
    url = f"{server_url.rstrip('/')}/admin/backup/files"
    headers = {"Authorization": f"Bearer {token}"}
    try:
        response = requests.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 401:
            print("🔑 Token expired or unauthorized. Re-authenticating...")
            return "REAUTH"
        else:
            print(f"❌ Failed to fetch backup list: Status {response.status_code}")
            return None
    except Exception as e:
        print(f"❌ Error fetching files list: {e}")
        return None

def download_file(server_url, token, download_url, save_path):
    url = f"{server_url.rstrip('/')}{download_url}"
    headers = {"Authorization": f"Bearer {token}"}
    try:
        # Check parent folder exists
        save_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Download and write chunked
        with requests.get(url, headers=headers, stream=True, timeout=30) as r:
            if r.status_code == 200:
                with open(save_path, "wb") as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)
                return True
            else:
                print(f"❌ Failed to download from {url}: Status {r.status_code}")
                return False
    except Exception as e:
        print(f"❌ Error downloading file to {save_path}: {e}")
        return False

def run_sync_cycle(server_url, token, backup_root):
    print("\n⏳ Starting backup synchronization cycle...")
    files_list = fetch_files_list(server_url, token)
    
    if files_list == "REAUTH":
        return "REAUTH"
        
    if not files_list:
        print("ℹ️ No active files found on server or server is unreachable.")
        return True
        
    # Only keep client uploaded ('stone') files
    uploaded_files = [item for item in files_list if item.get("type") == "stone"]
    
    print(f"📋 Found {len(uploaded_files)} active client upload files on the server.")
    
    downloaded_count = 0
    skipped_count = 0
    
    for item in uploaded_files:
        company_name = item.get("company_name", "unknown_client").strip()
        # Clean company name for windows directory path safety
        safe_company = "".join([c if c.isalnum() or c in " ._-" else "_" for c in company_name])
        filename = item.get("filename")
        download_url = item.get("download_url")
        
        # Define destination paths
        # Format: D:\Diamond_Backup_Files\<client_company_name>\<filename> directly (no subfolders)
        client_dir = backup_root / safe_company
        dest_path = client_dir / filename
        
        if dest_path.exists():
            skipped_count += 1
            continue
            
        print(f"📥 Downloading: [{company_name}] - {filename}...")
        success = download_file(server_url, token, download_url, dest_path)
        if success:
            print(f"✅ Saved to: {dest_path}")
            downloaded_count += 1
        else:
            print(f"❌ Failed: {filename}")
            
    print(f"📊 Cycle finished. Downloaded: {downloaded_count}, Already Backed Up: {skipped_count}")
    return True

def main():
    print("=" * 60)
    print("💎 DIAMOND SYSTEM - AUTOMATED BACKUP SYNC CLIENT 💎")
    print("=" * 60)
    
    config = load_config()
    
    # Get Server URL
    server_url = config.get("server_url")
    if not server_url:
        server_url = input("Enter AWS Server URL (e.g. http://13.233.123.45:8000 or domain): ").strip()
        if not server_url:
            print("❌ Server URL is required.")
            sys.exit(1)
            
    # Get Backup Root Directory
    backup_root_str = config.get("backup_root", str(DEFAULT_BACKUP_ROOT))
    print(f"📂 Default Backup Directory: {backup_root_str}")
    change_dir = input("Do you want to change it? (y/N): ").strip().lower()
    if change_dir == "y":
        backup_root_str = input("Enter new local backup directory path: ").strip()
        if not backup_root_str:
            backup_root_str = str(DEFAULT_BACKUP_ROOT)
            
    backup_root = Path(backup_root_str)
    
    # Ensure backup root is created
    try:
        backup_root.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        print(f"❌ Error creating directory {backup_root}: {e}")
        sys.exit(1)
        
    # Get Credentials
    username = config.get("username")
    if not username:
        username = input("Enter Admin Username: ").strip()
        
    password = input("Enter Admin Password: ").strip() if not config.get("password") else config.get("password")
    if not password:
        password = input("Enter Admin Password: ").strip()
        
    # Save config
    config["server_url"] = server_url
    config["backup_root"] = str(backup_root)
    config["username"] = username
    config["password"] = password
    save_config(config)
    
    print("\n🔐 Authenticating with live server...")
    token = login(server_url, username, password)
    if not token:
        print("❌ Authentication failed. Please check credentials and server status.")
        sys.exit(1)
        
    print("✅ Authenticated successfully!")
    print(f"🛡️ Backups will be permanently saved to: {backup_root}")
    print("🔁 Starting continuous backup monitor. Press Ctrl+C to stop.")
    
    # Core loop
    while True:
        try:
            status = run_sync_cycle(server_url, token, backup_root)
            if status == "REAUTH":
                print("🔐 Token expired, re-authenticating...")
                token = login(server_url, username, password)
                if not token:
                    print("❌ Re-authentication failed. Retrying in 30 seconds...")
                    time.sleep(30)
                continue
                
            # Wait for next cycle (e.g. 15 seconds)
            time.sleep(15)
            
        except KeyboardInterrupt:
            print("\n👋 Backup Sync Client stopped by user. Goodbye!")
            sys.exit(0)
        except Exception as e:
            print(f"\n❌ Unexpected error in monitoring loop: {e}")
            print("🔁 Retrying in 15 seconds...")
            time.sleep(15)

if __name__ == "__main__":
    main()

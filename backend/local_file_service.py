r"""
Local File & Backup Sync Service for Diamond Processing Management System
Runs on localhost:3001 on the Admin's Local PC.

Exposes endpoints for:
1. Standard local file saving (to D:\Online)
2. Background sync client which downloads files to D:\Diamond_Backup_Files\<client_name>\<filename>
3. Backup status check & manual sync trigger for the React Frontend.
"""

import os
import sys
import json
import time
import base64
import shutil
import threading
import requests
from pathlib import Path
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse

app = FastAPI(title="Diamond Local File & Sync Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Custom middleware to allow Private Network Access (PNA) from public IP to localhost
@app.middleware("http")
async def add_private_network_header(request: Request, call_next):
    if request.method == "OPTIONS":
        response = await call_next(request)
        response.headers["Access-Control-Allow-Private-Network"] = "true"
        response.headers["Access-Control-Allow-Headers"] = "*"
        return response
    response = await call_next(request)
    response.headers["Access-Control-Allow-Private-Network"] = "true"
    return response

# Configuration Paths
CONFIG_FILE = Path(__file__).resolve().parent / "backup_config.json"
ONLINE_FOLDER = Path("D:/") / "Online"
DEFAULT_BACKUP_ROOT = Path("D:/") / "Diamond_Backup_Files"

# Global state for sync worker
sync_thread = None
sync_running = False
sync_status_log = "Not started"
last_sync_time = 0

def load_config() -> dict:
    if CONFIG_FILE.exists():
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                config = json.load(f)
                # Auto-correct any drive-relative paths from Windows environment
                if config.get("backup_root") == "D:Diamond_Backup_Files":
                    config["backup_root"] = "D:\\Diamond_Backup_Files"
                return config
        except Exception:
            pass
    return {}

def save_config(config: dict):
    try:
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=4)
    except Exception as e:
        print(f"Error saving config: {e}")

# Ensure local directories exist
def ensure_online_folder():
    try:
        ONLINE_FOLDER.mkdir(parents=True, exist_ok=True)
        return True
    except Exception as e:
        print(f"Error creating Online folder: {e}")
        return False

# ── Backup Sync Engine ──────────────────────────────────────────────────

def sync_login(server_url, username, password):
    url = f"{server_url.rstrip('/')}/auth/login"
    payload = {"username": username, "password": password, "is_admin_login": True}
    try:
        response = requests.post(url, json=payload, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if not data.get("is_admin"):
                return None, "Entered account is not an Admin account!"
            return data.get("access_token"), None
        else:
            return None, f"Login failed with status: {response.status_code}"
    except Exception as e:
        return None, f"Connection failed: {e}"

def fetch_server_files_list(server_url, token):
    url = f"{server_url.rstrip('/')}/admin/backup/files"
    headers = {"Authorization": f"Bearer {token}"}
    try:
        response = requests.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            return response.json(), None
        elif response.status_code == 401:
            return None, "REAUTH"
        else:
            return None, f"Status code {response.status_code}"
    except Exception as e:
        return None, str(e)

def download_file_chunked(server_url, token, download_url, save_path):
    url = f"{server_url.rstrip('/')}{download_url}"
    headers = {"Authorization": f"Bearer {token}"}
    try:
        save_path.parent.mkdir(parents=True, exist_ok=True)
        with requests.get(url, headers=headers, stream=True, timeout=30) as r:
            if r.status_code == 200:
                with open(save_path, "wb") as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)
                return True
            else:
                return False
    except Exception:
        return False

def execute_sync_cycle() -> dict:
    global sync_status_log, last_sync_time
    config = load_config()
    
    server_url = config.get("server_url")
    backup_root_str = config.get("backup_root", str(DEFAULT_BACKUP_ROOT))
    username = config.get("username")
    password = config.get("password")
    
    if not server_url or not username or not password:
        sync_status_log = "Configuration incomplete. Awaiting server URL and login credentials."
        return {"status": "error", "message": sync_status_log}
        
    backup_root = Path(backup_root_str)
    backup_root.mkdir(parents=True, exist_ok=True)
    
    # 1. Login to live server
    token, err = sync_login(server_url, username, password)
    if err:
        sync_status_log = f"Authentication error: {err}"
        return {"status": "error", "message": sync_status_log}
        
    # 2. Fetch active files list
    files_list, err = fetch_server_files_list(server_url, token)
    if err == "REAUTH":
        # Force login retry
        token, err = sync_login(server_url, username, password)
        if not err:
            files_list, err = fetch_server_files_list(server_url, token)
            
    if err:
        sync_status_log = f"Failed to fetch files from server: {err}"
        return {"status": "error", "message": sync_status_log}
        
    # Filter only client uploads ('stone') as requested
    uploaded_files = [item for item in files_list if item.get("type") == "stone"]
    
    downloaded_count = 0
    skipped_count = 0
    failed_count = 0
    
    for item in uploaded_files:
        company_name = item.get("company_name", "unknown_client").strip()
        safe_company = "".join([c if c.isalnum() or c in " ._-" else "_" for c in company_name])
        filename = item.get("filename")
        download_url = item.get("download_url")
        
        # Save directly under client folder without subfolders
        client_dir = backup_root / safe_company
        dest_path = client_dir / filename
        
        if dest_path.exists():
            skipped_count += 1
            continue
            
        success = download_file_chunked(server_url, token, download_url, dest_path)
        if success:
            downloaded_count += 1
        else:
            failed_count += 1
            
    last_sync_time = time.time()
    sync_status_log = f"Sync successful at {time.strftime('%H:%M:%S')}. Downloaded: {downloaded_count}, Already backed up: {skipped_count}, Failed: {failed_count}"
    
    return {
        "status": "success",
        "downloaded": downloaded_count,
        "skipped": skipped_count,
        "failed": failed_count,
        "message": sync_status_log
    }

def background_sync_worker():
    global sync_running
    sync_running = True
    print("[Sync Engine] Background monitor started.")
    while sync_running:
        try:
            execute_sync_cycle()
        except Exception as e:
            print(f"[Sync Engine] Worker error: {e}")
        # Wait 15 seconds between cycles
        time.sleep(15)

# ── API Endpoints ───────────────────────────────────────────────────────

@app.on_event("startup")
def startup():
    ensure_online_folder()
    
    # Create the backup root folder immediately on startup
    try:
        config = load_config()
        backup_root = Path(config.get("backup_root", str(DEFAULT_BACKUP_ROOT)))
        backup_root.mkdir(parents=True, exist_ok=True)
        print(f"[OK] Backup folder ready: {backup_root}")
    except Exception as e:
        print(f"Error creating backup folder: {e}")
        
    # Start backup sync client in a background thread automatically!
    global sync_thread
    sync_thread = threading.Thread(target=background_sync_worker, daemon=True)
    sync_thread.start()

@app.on_event("shutdown")
def shutdown():
    global sync_running
    sync_running = False

@app.get("/health")
def health():
    config = load_config()
    return {
        "status": "ok",
        "online_folder": str(ONLINE_FOLDER),
        "backup_folder": config.get("backup_root", str(DEFAULT_BACKUP_ROOT)),
        "sync_running": sync_running,
        "last_sync_log": sync_status_log,
        "last_sync_time": last_sync_time
    }

# Endpoint for frontend to check if a specific client's file exists locally
@app.get("/check-backup")
def check_backup(client: str, filename: str):
    config = load_config()
    backup_root = Path(config.get("backup_root", str(DEFAULT_BACKUP_ROOT)))
    safe_company = "".join([c if c.isalnum() or c in " ._-" else "_" for c in client.strip()])
    file_path = backup_root / safe_company / filename
    
    exists = file_path.exists() and file_path.is_file()
    return {"exists": exists, "path": str(file_path) if exists else None}

# Endpoint to fetch list of all files currently backed up locally in D:\Diamond_Backup_Files
@app.get("/backup-status")
def get_backup_status():
    config = load_config()
    backup_root = Path(config.get("backup_root", str(DEFAULT_BACKUP_ROOT)))
    configured = bool(config.get("server_url") and config.get("username") and config.get("password"))
    
    results = {}
    if backup_root.exists():
        for client_dir in backup_root.iterdir():
            if client_dir.is_dir():
                client_name = client_dir.name
                files = []
                for f in client_dir.iterdir():
                    if f.is_file() and not f.name.startswith("."):
                        files.append(f.name)
                results[client_name] = files
                
    return {
        "backup_root": str(backup_root),
        "sync_running": sync_running,
        "status_log": sync_status_log,
        "last_sync_time": last_sync_time,
        "configured": configured,
        "server_url": config.get("server_url", ""),
        "username": config.get("username", ""),
        "local_files": results
    }

# Endpoint to configure server connection details
@app.post("/configure-server")
def configure_server(data: dict):
    server_url = data.get("server_url", "").strip()
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    backup_root = data.get("backup_root", "").strip()
    
    if not server_url or not username or not password:
        raise HTTPException(status_code=400, detail="Missing server_url, username, or password")
        
    config = load_config()
    config["server_url"] = server_url
    config["username"] = username
    config["password"] = password
    if backup_root:
        config["backup_root"] = backup_root
    else:
        config["backup_root"] = str(DEFAULT_BACKUP_ROOT)
        
    save_config(config)
    
    # Run sync immediately in a separate thread to test
    threading.Thread(target=execute_sync_cycle, daemon=True).start()
    
    return {"success": True, "message": "Server settings configured and backup sync initiated."}

# Endpoint to manually trigger a sync cycle from UI
@app.post("/sync-now")
def trigger_sync():
    # Run sync cycle synchronously to return immediate result
    res = execute_sync_cycle()
    return res

# ── Old Local File Service Endpoints (Preserved for compatibility) ──────

@app.post("/save-file")
async def save_file(request_data: dict):
    try:
        filename = request_data.get("filename", "download")
        data_b64 = request_data.get("data", "")
        
        if not filename or not data_b64:
            raise HTTPException(status_code=400, detail="Missing filename or data")
        
        if not ensure_online_folder():
            raise HTTPException(status_code=500, detail="Failed to create Online folder")
        
        try:
            file_data = base64.b64decode(data_b64)
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Invalid base64 data: {e}")
        
        filepath = ONLINE_FOLDER / filename
        with open(filepath, "wb") as f:
            f.write(file_data)
        
        return {
            "success": True,
            "message": f"File saved to D:\\Online\\{filename}",
            "path": str(filepath)
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/save-file-url")
async def save_file_from_url(request_data: dict):
    try:
        url = request_data.get("url")
        filename = request_data.get("filename", "download")
        headers = request_data.get("headers", {})
        
        if not url:
            raise HTTPException(status_code=400, detail="Missing url")
        
        if not ensure_online_folder():
            raise HTTPException(status_code=500, detail="Failed to create Online folder")
        
        async with requests.Session() as s:
            resp = s.get(url, headers=headers)
            if resp.status_code != 200:
                raise HTTPException(status_code=resp.status_code, detail=f"Failed to download from {url}")
            file_data = resp.content
            
        filepath = ONLINE_FOLDER / filename
        with open(filepath, "wb") as f:
            f.write(file_data)
        
        return {
            "success": True,
            "message": f"File saved to D:\\Online\\{filename}",
            "path": str(filepath)
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/list-files")
def list_files():
    try:
        if not ONLINE_FOLDER.exists():
            return {"files": [], "folder": str(ONLINE_FOLDER)}
        
        files = []
        for f in ONLINE_FOLDER.iterdir():
            if f.is_file():
                files.append({
                    "name": f.name,
                    "size": f.stat().st_size,
                    "modified": f.stat().st_mtime
                })
        
        return {"files": files, "folder": str(ONLINE_FOLDER), "count": len(files)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/open-folder")
def open_folder():
    try:
        import sys
        if not ensure_online_folder():
            raise HTTPException(status_code=500, detail="Failed to create Online folder")
        
        if sys.platform == "win32":
            os.startfile(str(ONLINE_FOLDER))
        elif sys.platform == "darwin":  # macOS
            os.system(f'open "{ONLINE_FOLDER}"')
        else:  # Linux
            os.system(f'xdg-open "{ONLINE_FOLDER}"')
        
        return {"success": True, "message": f"Opened {ONLINE_FOLDER}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    print("\n" + "="*50)
    print("--- DIAMOND LOCAL SERVICE & SYNC MONITOR STARTED ---")
    print("="*50)
    print(f"[OK] Running on http://localhost:3001")
    print(f"[OK] Client Uploads Sync Location: D:\\Diamond_Backup_Files\\")
    print(f"[OK] Local Sync Engine active and listening in background...")
    print("="*50 + "\n")
    
    uvicorn.run(app, host="localhost", port=3001)

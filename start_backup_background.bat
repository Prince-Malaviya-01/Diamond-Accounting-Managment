@echo off
setlocal
cd /d "%~dp0"

echo Starting Diamond Backup Sync Service in the background (silently)...

rem Launch backend/local_file_service.py using pythonw.exe to run completely hidden in the background
start "" ".venv\Scripts\pythonw.exe" backend/local_file_service.py

echo.
echo ================================================================
echo OK - Success! Diamond Backup Service has started in the background.
echo CMD window is safe to close. The service will keep running silently.
echo Backup folder: D:\Diamond_Backup_Files
echo ================================================================
echo.

timeout /t 5
endlocal

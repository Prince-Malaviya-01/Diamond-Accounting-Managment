@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

rem Detect the python executable inside the virtual environment (.venv)
set "VENV_PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%VENV_PY%" set "VENV_PY=%ROOT%\backend\.venv\Scripts\python.exe"

rem Fallback to system python if venv is not found
if not exist "%VENV_PY%" (
  set "VENV_PY=python"
)

title Diamond Local Backup & File Sync Service

echo ====================================================================
echo 💎 DIAMOND LOCAL BACKUP & SYNC MONITOR LAUNCHER 💎
echo ====================================================================
echo.
echo [STATUS] Launching Local File Sync Service on http://localhost:3001
echo [INFO] Close this terminal window to stop the sync service.
echo.

rem Run the local file sync service in the current window so logs are visible
"%VENV_PY%" "%ROOT%\backend\local_file_service.py"

if errorlevel 1 (
  echo.
  echo [ERROR] The service exited with an error.
  echo If you need to install packages, run: pip install -r backend/requirements.txt
  pause
)

endlocal

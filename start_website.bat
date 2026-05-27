@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

set "VENV_PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%VENV_PY%" set "VENV_PY=%ROOT%\backend\.venv\Scripts\python.exe"

if not exist "%VENV_PY%" (
  echo [ERROR] Python virtual environment not found.
  echo Expected: %ROOT%\.venv\Scripts\python.exe
  echo    or    : %ROOT%\backend\.venv\Scripts\python.exe
  echo.
  echo Please create venv and install backend dependencies first.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm is not available in PATH.
  echo Install Node.js and reopen terminal.
  pause
  exit /b 1
)

echo Starting Diamond system in 3 terminals...

start "Diamond Backend" cmd /k "cd /d ""%ROOT%\backend"" && ""%VENV_PY%"" -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"
start "Diamond Worker" cmd /k "cd /d ""%ROOT%\backend"" && ""%VENV_PY%"" -m app.queue.worker"
start "Diamond Frontend" cmd /k "cd /d ""%ROOT%\frontend"" && npm run dev"

timeout /t 4 >nul
start "" http://localhost:5173
start "" http://localhost:8000/docs

echo.
echo Frontend: http://localhost:5173
echo Backend : http://localhost:8000
echo Docs    : http://localhost:8000/docs
echo.
echo Close each opened terminal to stop services.

endlocal

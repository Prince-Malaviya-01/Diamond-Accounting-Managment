@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

echo Stopping running Diamond services...

rem Kill windows started by start_website.bat (and their child processes)
taskkill /FI "WINDOWTITLE eq Diamond Backend*" /T /F >nul 2>nul
taskkill /FI "WINDOWTITLE eq Diamond Worker*" /T /F >nul 2>nul
taskkill /FI "WINDOWTITLE eq Diamond Frontend*" /T /F >nul 2>nul

rem Fallback: free common ports if any process is still holding them
for %%P in (8000 5173) do (
  for /f "tokens=5" %%A in ('netstat -ano ^| findstr ":%%P" ^| findstr "LISTENING"') do (
    taskkill /PID %%A /F >nul 2>nul
  )
)

timeout /t 2 >nul
echo Starting Diamond services again...
call "%ROOT%\start_website.bat"

endlocal

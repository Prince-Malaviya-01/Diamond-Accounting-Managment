@echo off
setlocal

echo Stopping running background Diamond Backup Service...

rem Kill any running pythonw.exe processes
taskkill /F /IM pythonw.exe >nul 2>nul

echo.
echo ================================================================
echo Stopped! Background backup service has been terminated.
echo ================================================================
echo.

timeout /t 5
endlocal

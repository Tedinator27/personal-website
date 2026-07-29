@echo off
cd /d "%~dp0"
echo === Pushing latest changes to GitHub ===

:: Remove any stale lock files
del /f /q ".git\index.lock" 2>nul

:: Make sure author is set
git config user.name "Theodore Zhang"
git config user.email "zhangtheodore1234@gmail.com"

:: Stage and commit everything
git add .

set /p msg="Commit message (press Enter for 'Update portfolio'): "
if "%msg%"=="" set msg=Update portfolio

git commit -m "%msg%"

:: Push
git push origin main

echo.
echo === Done! Vercel will auto-deploy the new version. ===
pause

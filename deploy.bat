@echo off
cd /d "%~dp0"
del /f /q ".git\index.lock" 2>nul
git config user.name "Theodore Zhang"
git config user.email "zhangtheodore1234@gmail.com"
git add .
git commit -m "Update portfolio"
git push origin main
echo.
echo Done! Vercel is deploying — live in ~30 seconds.
timeout /t 3

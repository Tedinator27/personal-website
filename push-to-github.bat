@echo off
cd /d "%~dp0"
echo === Setting up git repo and pushing to GitHub ===

:: Remove any stale lock files from previous operations
del /f /q ".git\index.lock" 2>nul

:: Remove the .git folder initialized from Linux (had permission issues)
if exist ".git" (
    echo Removing old .git folder...
    rmdir /s /q ".git"
)

:: Initialize fresh repo
git init
git branch -m main
git config user.name "Theodore Zhang"
git config user.email "zhangtheodore1234@gmail.com"

:: Stage everything (respects .gitignore)
git add .

:: Create single clean commit — only Theodore Zhang as author
git commit -m "Portfolio site built with React, Vite, TypeScript, and Tailwind CSS"

:: Point to your GitHub repo
git remote add origin https://github.com/Tedinator27/personal-website.git

:: Force push — this replaces the old Next.js repo and its commit history
echo.
echo === Pushing to GitHub (browser may open for authentication) ===
git push --force origin main

echo.
echo === Done! Visit https://github.com/Tedinator27/personal-website to verify ===
pause

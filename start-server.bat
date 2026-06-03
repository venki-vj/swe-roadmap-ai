@echo off
REM ============================================================
REM  SkillForge - local web server launcher
REM  YouTube embeds need an http(s) origin. Opening index.html
REM  directly (file://) causes "Error 153". This serves the
REM  folder over http://localhost:8000 so videos play.
REM ============================================================
setlocal
cd /d "%~dp0"
title SkillForge server

echo.
echo   ============================================
echo    SkillForge  -  starting local web server
echo   ============================================
echo.
echo    Opening:  http://localhost:8000
echo    Stop it:  press Ctrl+C, then close this window
echo.

REM Open the browser first, then start a server that blocks.
start "" "http://localhost:8000/index.html"

REM Try the Windows Python launcher, then python, then Node's serve.
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 -m http.server 8000
  goto :end
)

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8000
  goto :end
)

where npx >nul 2>nul
if %errorlevel%==0 (
  echo Python not found - using Node ^(npx serve^)...
  npx --yes serve -l 8000
  goto :end
)

echo.
echo   Could not find Python or Node.js.
echo   Install Python from https://www.python.org/downloads/
echo   (tick "Add python.exe to PATH"), then run this file again.
echo.
pause

:end
endlocal

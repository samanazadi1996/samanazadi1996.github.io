@echo off
setlocal

REM Navigate to the source directory
cd ".\Source\MyResume\"

REM Execute ng build and check for errors
call ng build
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b %errorlevel%
)

REM Copy files using xcopy and check for errors
xcopy ".\dist\my-resume\browser\" "..\.." /s /e /h /i
if %errorlevel% neq 0 (
    echo Copy failed!
    exit /b %errorlevel%
)

echo Build and copy successful!
pause
endlocal

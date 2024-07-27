@echo off
setlocal enabledelayedexpansion

:: Get the current date in YYYY-MM-DD format
for /f "tokens=2 delims==" %%i in ('wmic os get localdatetime /value ^| find "="') do set datetime=%%i
set "year=%datetime:~0,4%"
set "month=%datetime:~4,2%"
set "day=%datetime:~6,2%"
set "hour=%datetime:~8,2%"
set "minute=%datetime:~10,2%"

:: Combine date and time for filename
set "formatted_datetime=%year%-%month%-%day%_%hour%-%minute%"

echo "Publish on %formatted_datetime%"
:: Ask the user if they want to publish
set /p userInput=Do you want to publish changes? (yes/no): 

:: Convert the input to lowercase for easier comparison
set "userInput=%userInput:~0,1%"

if /I "%userInput%" == "y" (
    :: Commit and push to git
    echo Committing changes...
    git add .
    git commit -m "Publish on %formatted_datetime%"
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to commit changes.
        exit /b 1
    )

    echo Pushing changes...
    git push
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to push changes.
        exit /b 1
    )
    
    echo Changes have been published.
) else (
    echo No changes were published.
)

endlocal

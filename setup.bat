@echo off
echo 🚀 Setting up Brand Top Up Admin Dashboard...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python 3.11+ first.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo 📦 Installing frontend dependencies...
npm install

echo 🐍 Setting up Python virtual environment...
cd backend
python -m venv venv

echo 📦 Installing backend dependencies...
call venv\Scripts\activate.bat
pip install -r requirements.txt

echo ⚙️ Creating environment files...
if not exist .env (
    copy env.example .env
    echo ✅ Created .env file. Please edit it with your database credentials.
) else (
    echo ✅ .env file already exists.
)

cd ..

echo 📝 Creating frontend environment file...
if not exist .env.local (
    echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
    echo ✅ Created .env.local file.
) else (
    echo ✅ .env.local file already exists.
)

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Edit backend\.env with your database credentials
echo 2. Start PostgreSQL database
echo 3. Run backend: cd backend ^&^& venv\Scripts\activate ^&^& uvicorn main:app --reload
echo 4. Run frontend: npm run dev
echo 5. Access admin: http://localhost:3000/admin
echo.
echo 🔑 Default admin credentials:
echo    Username: admin
echo    Password: admin123
echo.
echo ⚠️  Remember to change the default credentials in production!
pause 
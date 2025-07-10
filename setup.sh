#!/bin/bash

echo "🚀 Setting up Brand Top Up Admin Dashboard..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.11+ first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed. Please install PostgreSQL first."
    echo "   You can download it from: https://www.postgresql.org/download/"
fi

echo "📦 Installing frontend dependencies..."
npm install

echo "🐍 Setting up Python virtual environment..."
cd backend
python3 -m venv venv

# Activate virtual environment
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    source venv/Scripts/activate
else
    source venv/bin/activate
fi

echo "📦 Installing backend dependencies..."
pip install -r requirements.txt

echo "⚙️  Creating environment files..."
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Created .env file. Please edit it with your database credentials."
else
    echo "✅ .env file already exists."
fi

cd ..

echo "📝 Creating frontend environment file..."
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
    echo "✅ Created .env.local file."
else
    echo "✅ .env.local file already exists."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit backend/.env with your database credentials"
echo "2. Start PostgreSQL database"
echo "3. Run backend: cd backend && source venv/bin/activate && uvicorn main:app --reload"
echo "4. Run frontend: npm run dev"
echo "5. Access admin: http://localhost:3000/admin"
echo ""
echo "🔑 Default admin credentials:"
echo "   Username: admin"
echo "   Password: admin123"
echo ""
echo "⚠️  Remember to change the default credentials in production!" 
# Brand Top Up - Admin Dashboard

A secure admin dashboard for managing lead submissions from the Brand Top Up website.

## 🚀 Live Demo

- **Frontend**: [https://brandtopup.vercel.app](https://brandtopup.vercel.app)
- **Admin Panel**: [https://brandtopup.vercel.app/admin](https://brandtopup.vercel.app/admin)
- **API Documentation**: [https://brandtopup-api.onrender.com/docs](https://brandtopup-api.onrender.com/docs)

## Features

### 🔐 Admin Authentication
- Secure login system with JWT tokens
- Session management with automatic logout
- Protected admin routes

### 📋 Lead Management Dashboard
- View all lead submissions in a responsive table
- Search and filter functionality
- Bulk operations (select, delete multiple)
- Date range deletion
- Clear all leads functionality

### 🗃️ Database
- SQLite for development (PostgreSQL for production)
- Automatic IP address and location capture
- Timestamp tracking for all submissions

### 🛠️ Admin Actions
- Delete individual leads
- Bulk delete selected leads
- Delete leads by date range
- Clear all leads with confirmation

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLite/PostgreSQL** - Database
- **SQLAlchemy** - ORM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **uvicorn** - ASGI server

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brandtopup.git
   cd brandtopup
   ```

2. **Run the setup script**
   ```bash
   # On Windows
   setup.bat
   
   # On Mac/Linux
   ./setup.sh
   ```

3. **Start the backend**
   ```bash
   cd backend
   venv\Scripts\activate  # Windows
   uvicorn main_sqlite:app --reload
   ```

4. **Start the frontend**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Main site: [http://localhost:3000](http://localhost:3000)
   - Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)
   - Default credentials: `admin` / `admin123`

## Deployment

### 🚀 Quick Deploy

1. **Fork this repository**
2. **Deploy to Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/brandtopup)
3. **Deploy backend to Render**: [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Manual Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## API Endpoints

### Authentication
- `POST /login` - Admin login

### Leads Management
- `POST /leads` - Create new lead (public)
- `GET /leads` - Get all leads (admin only)
- `DELETE /leads/{id}` - Delete single lead (admin only)
- `POST /leads/delete-multiple` - Bulk delete leads (admin only)
- `POST /leads/delete-by-date` - Delete by date range (admin only)
- `DELETE /leads/clear-all` - Clear all leads (admin only)

## Environment Variables

### Backend (.env)
```env
DATABASE_URL=sqlite:///./brandtopup.db
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
ALLOWED_ORIGINS=["http://localhost:3000"]
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Security Features

- **JWT Token Authentication**
- **Password Hashing** with bcrypt
- **CORS Protection**
- **Input Validation** with Pydantic
- **SQL Injection Protection**
- **XSS Protection**
- **Secure Session Management**

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@brandtopup.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/brandtopup/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/brandtopup/wiki)

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [FastAPI](https://fastapi.tiangolo.com/) for the modern Python web framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library

---

**Made with ❤️ by the Brand Top Up Team**

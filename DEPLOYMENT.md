# Deployment Guide

This guide will help you deploy the Brand Top Up Admin Dashboard to GitHub and Vercel.

## 🚀 Quick Deployment Steps

### 1. GitHub Repository Setup

1. **Create a new repository on GitHub**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit: Brand Top Up Admin Dashboard"
   git branch -M main
   git remote add origin https://github.com/yourusername/brandtopup.git
   git push -u origin main
   ```

2. **Update repository URL in package.json**
   - Edit `package.json` and replace `yourusername` with your actual GitHub username

### 2. Backend Deployment (Render.com)

1. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure the service:**
   - **Name**: `brandtopup-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main_sqlite:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend`

3. **Add Environment Variables:**
   ```
   SECRET_KEY=your-secret-key-here-make-it-long-and-random
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the service URL (e.g., `https://brandtopup-api.onrender.com`)

### 3. Frontend Deployment (Vercel)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-url.onrender.com`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your project

### 4. Update CORS Settings

After deployment, update the backend CORS settings:

1. **Go to your Render dashboard**
2. **Edit the environment variable:**
   ```
   ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app
   ```
3. **Redeploy the service**

## 🔧 Manual Deployment Steps

### Backend (Alternative: Railway, Heroku, etc.)

1. **Railway Deployment:**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Heroku Deployment:**
   ```bash
   # Install Heroku CLI
   # Create Procfile in backend/
   echo "web: uvicorn main_sqlite:app --host 0.0.0.0 --port \$PORT" > backend/Procfile
   
   # Deploy
   heroku create your-app-name
   git push heroku main
   ```

### Frontend (Alternative: Netlify, etc.)

1. **Netlify Deployment:**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Netlify dashboard

## 🔐 Security Configuration

### Production Environment Variables

**Backend (.env):**
```env
SECRET_KEY=your-very-long-and-secure-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-password
ALLOWED_ORIGINS=https://your-frontend-domain.com
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

### Security Checklist

- [ ] Change default admin credentials
- [ ] Use strong SECRET_KEY
- [ ] Configure proper CORS origins
- [ ] Enable HTTPS
- [ ] Set up proper logging
- [ ] Configure rate limiting (optional)

## 📊 Monitoring & Analytics

### Vercel Analytics
- Enable Vercel Analytics in your project settings
- Monitor performance and user behavior

### Backend Monitoring
- Use Render's built-in monitoring
- Set up health checks
- Monitor API response times

## 🔄 CI/CD Pipeline

The project includes GitHub Actions for automated deployment:

1. **Set up GitHub Secrets:**
   - `VERCEL_TOKEN`: Get from Vercel dashboard
   - `ORG_ID`: Your Vercel organization ID
   - `PROJECT_ID`: Your Vercel project ID
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

2. **Automatic deployment:**
   - Push to `main` branch triggers deployment
   - Pull requests create preview deployments

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Check `ALLOWED_ORIGINS` in backend
   - Ensure frontend URL is included

2. **Build Failures:**
   - Check Node.js version (>=18)
   - Verify all dependencies are installed
   - Check TypeScript compilation

3. **API Connection Issues:**
   - Verify backend URL is correct
   - Check if backend is running
   - Test API endpoints directly

4. **Database Issues:**
   - SQLite is used for development
   - For production, consider PostgreSQL
   - Ensure database file permissions

### Debug Commands

```bash
# Test backend locally
cd backend
python -m uvicorn main_sqlite:app --reload

# Test frontend build
npm run build

# Check TypeScript
npm run type-check

# Lint code
npm run lint
```

## 📝 Post-Deployment Checklist

- [ ] Test admin login functionality
- [ ] Test form submission
- [ ] Verify CORS is working
- [ ] Check all API endpoints
- [ ] Test responsive design
- [ ] Verify environment variables
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificates
- [ ] Set up monitoring and alerts

## 🆘 Support

If you encounter issues:

1. Check the deployment logs in Vercel/Render
2. Verify environment variables are set correctly
3. Test API endpoints using tools like Postman
4. Check browser console for frontend errors
5. Review server logs for backend errors

## 🔄 Updates & Maintenance

### Updating the Application

1. **Make changes locally**
2. **Test thoroughly**
3. **Push to GitHub**
4. **Automatic deployment will trigger**

### Database Migrations

For production database changes:
1. Create migration scripts
2. Test on staging environment
3. Apply to production during maintenance window

---

**Happy Deploying! 🚀** 
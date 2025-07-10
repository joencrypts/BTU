# Brand Top Up - GitHub Deployment Script
# This script helps you prepare and push your project to GitHub

Write-Host "🚀 Brand Top Up - GitHub Deployment Setup" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Brand Top Up Admin Dashboard with FastAPI backend and Next.js frontend"

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "✅ Git repository is ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub" -ForegroundColor White
Write-Host "2. Run the following commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/brandtopup.git" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Update the repository URL in package.json" -ForegroundColor White
Write-Host "4. Deploy to Vercel and Render using the instructions in DEPLOYMENT.md" -ForegroundColor White
Write-Host ""
Write-Host "📖 For detailed deployment instructions, see DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to proceed with remote setup
$setupRemote = Read-Host "Do you want to set up the remote repository now? (y/n)"
if ($setupRemote -eq "y" -or $setupRemote -eq "Y") {
    $username = Read-Host "Enter your GitHub username"
    $repoName = Read-Host "Enter repository name (default: brandtopup)"
    if (-not $repoName) {
        $repoName = "brandtopup"
    }
    
    $remoteUrl = "https://github.com/$username/$repoName.git"
    
    Write-Host "Adding remote origin: $remoteUrl" -ForegroundColor Yellow
    git remote add origin $remoteUrl
    
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    Write-Host ""
    Write-Host "🎉 Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository URL: $remoteUrl" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Go to Vercel.com and import your repository" -ForegroundColor White
    Write-Host "2. Go to Render.com and deploy your backend" -ForegroundColor White
    Write-Host "3. Update environment variables as described in DEPLOYMENT.md" -ForegroundColor White
}

Write-Host ""
Write-Host "🎯 Deployment Checklist:" -ForegroundColor Yellow
Write-Host "□ Create GitHub repository" -ForegroundColor White
Write-Host "□ Push code to GitHub" -ForegroundColor White
Write-Host "□ Deploy backend to Render" -ForegroundColor White
Write-Host "□ Deploy frontend to Vercel" -ForegroundColor White
Write-Host "□ Configure environment variables" -ForegroundColor White
Write-Host "□ Test admin login" -ForegroundColor White
Write-Host "□ Test form submission" -ForegroundColor White
Write-Host "□ Update CORS settings" -ForegroundColor White
Write-Host ""
Write-Host "📚 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Cyan 
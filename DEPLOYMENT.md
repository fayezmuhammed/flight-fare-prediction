# Flight Fare Prediction - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Deploy Frontend + Backend Separately (Recommended)

#### Frontend Deployment (React/Vite)

**A) Vercel (Recommended - Free)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variable
vercel env add VITE_API_URL https://your-backend-url.com
```

**B) Netlify (Free)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist

# Set environment variable in Netlify dashboard
VITE_API_URL=https://your-backend-url.com
```

**C) GitHub Pages (Free)**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/repo-name",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

#### Backend Deployment (Flask + ML Model)

**A) Render (Recommended - Free tier)**
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repo
5. Set build command: `pip install -r requirements.txt`
6. Set start command: `gunicorn app:app`
7. Add environment variables if needed

**B) Railway (Free tier)**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Deploy automatically

**C) Heroku (Paid)**
```bash
# Install Heroku CLI
# Create Procfile
echo "web: gunicorn app:app" > Procfile

# Deploy
heroku create your-app-name
git push heroku main
```

### Option 2: Docker Deployment

**Build and run with Docker:**
```bash
# Build the image
docker build -t flight-fare-prediction .

# Run the container
docker run -p 5000:5000 flight-fare-prediction
```

**Deploy to Docker Hub:**
```bash
# Tag and push
docker tag flight-fare-prediction yourusername/flight-fare-prediction
docker push yourusername/flight-fare-prediction
```

### Option 3: Full-Stack Deployment

**A) Vercel (Frontend) + Render (Backend)**
1. Deploy backend to Render
2. Deploy frontend to Vercel
3. Set `VITE_API_URL` to your Render backend URL

**B) Netlify (Frontend) + Railway (Backend)**
1. Deploy backend to Railway
2. Deploy frontend to Netlify
3. Set environment variables

## 🔧 Environment Variables

Create `.env.local` file in the root directory:
```
VITE_API_URL=http://127.0.0.1:5000
```

For production, change to your deployed backend URL:
```
VITE_API_URL=https://your-backend-url.com
```

## 📁 Project Structure for Deployment

```
sky-fare-ai-forecast/
├── src/                    # React frontend
├── backend/               # Flask backend
│   ├── app.py            # Flask application
│   ├── model.pkl         # ML model
│   ├── scaler.pkl        # Scaler
│   ├── requirements.txt  # Python dependencies
│   └── Dockerfile        # Docker configuration
├── dist/                 # Built frontend (after npm run build)
└── package.json          # Node.js dependencies
```

## 🚀 Step-by-Step Deployment

### 1. Prepare Backend
```bash
cd backend
pip install -r requirements.txt
python app.py  # Test locally
```

### 2. Prepare Frontend
```bash
npm run build
```

### 3. Deploy Backend
- Choose a platform (Render/Railway/Heroku)
- Upload backend folder
- Set environment variables

### 4. Deploy Frontend
- Choose a platform (Vercel/Netlify/GitHub Pages)
- Upload dist folder
- Set VITE_API_URL environment variable

### 5. Test Deployment
- Test the API endpoint
- Test the frontend
- Verify predictions work

## 🔍 Troubleshooting

**Common Issues:**
1. **CORS errors**: Ensure backend has CORS enabled
2. **Model loading errors**: Check if model.pkl and scaler.pkl are included
3. **Environment variables**: Verify VITE_API_URL is set correctly
4. **Build errors**: Check Node.js and Python versions

**Debug Commands:**
```bash
# Test backend locally
curl -X POST http://127.0.0.1:5000/predict -H "Content-Type: application/json" -d '{"airline":"AirAsia","source_city":"Bangalore","destination_city":"Delhi","departure_time":"Morning","arrival_time":"Evening","day":"Monday","stops":"zero","class":"Economy","duration":"2.5","days_left":"30"}'

# Test frontend build
npm run build
npm run preview
```

## 💰 Cost Estimation

**Free Tier Options:**
- Frontend: Vercel/Netlify/GitHub Pages (Free)
- Backend: Render/Railway (Free tier)
- Total: $0/month

**Paid Options:**
- Heroku: $7/month
- AWS/GCP: Pay per use
- DigitalOcean: $5/month

## 🎯 Recommended Deployment Stack

**For Production:**
- Frontend: Vercel
- Backend: Render
- Database: None (stateless)
- Total Cost: $0/month

This setup provides:
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ SSL certificates
- ✅ Global CDN
- ✅ Easy scaling 
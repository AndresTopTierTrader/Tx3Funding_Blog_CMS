# Deployment Guide for Tx3Funding Blog CMS

## Prerequisites
- A Render account
- Git repository with your code

## Step 1: Database Setup

### Option A: Render PostgreSQL (Recommended)
1. Go to your Render dashboard
2. Click "New" → "PostgreSQL"
3. Choose a name (e.g., "tx3funding-blog-db")
4. Select "Starter" plan
5. Choose a region close to your users
6. Click "Create Database"
7. Note down the connection details

### Option B: External Database
You can also use:
- Supabase
- Railway
- PlanetScale
- Any PostgreSQL provider

## Step 2: Deploy to Render

### Option A: Using render.yaml (Recommended)
1. Push your code to GitHub/GitLab
2. In Render dashboard, click "New" → "Blueprint"
3. Connect your repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

### Option B: Manual Deployment
1. In Render dashboard, click "New" → "Web Service"
2. Connect your Git repository
3. Configure:
   - **Name**: tx3funding-blog-cms
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Starter

## Step 3: Environment Variables

Add these environment variables in your Render service:

### Database Configuration
```
DATABASE_CLIENT=postgres
DATABASE_HOST=<your-database-host>
DATABASE_PORT=5432
DATABASE_NAME=<your-database-name>
DATABASE_USERNAME=<your-database-username>
DATABASE_PASSWORD=<your-database-password>
DATABASE_SSL=true
```

### Security Keys (Generate these)
```
APP_KEYS=<generate-4-random-strings-separated-by-commas>
API_TOKEN_SALT=<random-string>
ADMIN_JWT_SECRET=<random-string>
JWT_SECRET=<random-string>
TRANSFER_TOKEN_SALT=<random-string>
ENCRYPTION_KEY=<random-string>
```

### Server Configuration
```
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
URL=https://your-app-name.onrender.com
```

### CORS Configuration
```
CORS_ORIGIN=https://your-frontend-domain.com,http://localhost:3000
```

### Cloudinary Configuration (for file uploads)
```
CLOUDINARY_NAME=your-cloudinary-cloud-name
CLOUDINARY_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET=your-cloudinary-api-secret
```

## Step 4: Generate Security Keys

You can generate random strings using:
```bash
# Generate APP_KEYS (4 random strings)
node -e "console.log(Array.from({length: 4}, () => Math.random().toString(36).substring(2)).join(','))"

# Generate other keys
node -e "console.log(Math.random().toString(36).substring(2))"
```

## Step 5: Initial Setup

After deployment:
1. Visit your admin panel: `https://your-app-name.onrender.com/admin`
2. Create your first admin user
3. Create and publish some blog posts
4. Test your API endpoints

## Step 6: Update Frontend

Update your frontend API calls to use the production URL:
```javascript
const API_URL = 'https://your-app-name.onrender.com/api';
```

## Troubleshooting

### Common Issues:
1. **Database Connection**: Ensure all database environment variables are correct
2. **CORS Errors**: Update CORS_ORIGIN with your frontend domain
3. **Build Failures**: Check that all dependencies are in package.json
4. **Permission Errors**: Ensure your blog routes are properly configured for public access

### Logs:
- Check Render logs for detailed error messages
- Use `npm run console` locally to debug issues

## Security Notes

- Never commit `.env` files to your repository
- Use strong, unique keys for all security variables
- Regularly update dependencies
- Monitor your application logs
- Consider setting up SSL certificates

## Cost Optimization

- Use "Starter" plans for development
- Monitor usage to avoid unexpected charges
- Consider "Free" tier for small projects (with limitations)

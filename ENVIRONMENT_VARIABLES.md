# Environment Variables for Production Deployment

## Required Environment Variables

Add these to your Render service environment variables:

### Database Configuration
```
DATABASE_CLIENT=postgres
DATABASE_HOST=dpg-d2maaper433s73fnojmo-a
DATABASE_PORT=5432
DATABASE_NAME=tx3funding_blog_cms
DATABASE_USERNAME=tx3funding_blog_user
DATABASE_PASSWORD=<your-database-password>
DATABASE_SSL=true
```

### Security Keys (Generate these)
```
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
ENCRYPTION_KEY=your-encryption-key
```

### Server Configuration
```
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
URL=https://tx3funding-blog-cms.onrender.com
```

### CORS Configuration
```
CORS_ORIGIN=https://your-frontend-domain.com,http://localhost:3000
```

## How to Generate Security Keys

### Option 1: Using Node.js
```bash
# Generate APP_KEYS (4 random strings)
node -e "console.log(Array.from({length: 4}, () => Math.random().toString(36).substring(2)).join(','))"

# Generate other keys
node -e "console.log(Math.random().toString(36).substring(2))"
```

### Option 2: Using Online Generators
- Use a secure random string generator
- Make sure each key is at least 32 characters long

### Option 3: Using OpenSSL
```bash
# Generate a random string
openssl rand -base64 32
```

## Example Generated Values

```
APP_KEYS=abc123def456ghi789jkl012,mno345pqr678stu901vwx234,yz567abc890def123ghi456,jkl789mno012pqr345stu678
API_TOKEN_SALT=your-super-secure-api-token-salt-here
ADMIN_JWT_SECRET=your-super-secure-admin-jwt-secret-here
JWT_SECRET=your-super-secure-jwt-secret-here
TRANSFER_TOKEN_SALT=your-super-secure-transfer-token-salt-here
ENCRYPTION_KEY=your-super-secure-encryption-key-here
```

## Important Notes

1. **Never commit these values to git**
2. **Use different values for each environment**
3. **Keep these values secure**
4. **Make them at least 32 characters long**
5. **Use truly random values**

## Database Password

You can find your database password in your Render dashboard:
1. Go to your PostgreSQL database
2. Click on "Connections"
3. Copy the password from there

## Testing

After setting all variables:
1. Redeploy your service
2. Check the logs for any missing variables
3. Test the API endpoints

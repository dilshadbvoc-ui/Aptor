# Vercel Deployment Guide - Final Setup

## Environment Variables Setup

**IMPORTANT**: Environment variables must be set in the Vercel Dashboard, not in vercel.json.

### Required Environment Variables

Set these in your Vercel project dashboard (Settings → Environment Variables):

```
AUTH_SECRET="/lxEsDaviPua+c0r6Qq9yIk24YLNXswbjcefdkpooNM="
NEXTAUTH_URL="https://your-app-name.vercel.app"
MONGODB_URI="mongodb+srv://dilshadbvoc_db_user:aptor123@aptor.onnf1zm.mongodb.net/aptor-studies?retryWrites=true&w=majority&appName=Aptor"
PORT=3000
ADMIN_PASSWORD="SecureAdmin123!"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_FROM_NAME="Aptor Studies"
SMTP_FROM_EMAIL="your-email@gmail.com"
ADMIN_EMAIL="info@aptorstudies.com"
```

## Deployment Steps

1. **Push to GitHub**: Ensure all changes are committed and pushed
2. **Set Environment Variables**: Add all variables in Vercel dashboard
3. **Deploy**: Trigger deployment from Vercel dashboard
4. **Seed Database**: Visit `/seed-database` page after deployment
5. **Create Admin User**: Visit `/api/seed-admin` endpoint

## Admin Credentials

- **Email**: info@aptorstudies.com
- **Password**: SecureAdmin123!

## Post-Deployment Checklist

- [ ] Application loads successfully
- [ ] Database connection works
- [ ] Admin login functions
- [ ] Contact form sends emails
- [ ] All pages render correctly
- [ ] Mobile optimization works

## Troubleshooting

### Build Errors
- Ensure all TypeScript errors are resolved
- Check that all imports are correct
- Verify Next.js 16.1.4 compatibility

### Environment Variables
- Set in Vercel dashboard, not vercel.json
- Use exact variable names as listed above
- Ensure MongoDB connection string is correct

### Database Issues
- Verify MongoDB Atlas connection
- Check database name in connection string
- Ensure user has proper permissions

## Contact Information

- **Phone**: +91 95267 97987
- **Email**: info@aptorstudies.com
- **Location**: Calicut, Kerala, India
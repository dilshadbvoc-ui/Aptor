# 🌍 Vercel Environment Variables Setup

## 🎯 Required Environment Variables for Vercel

Copy these exact values into your Vercel dashboard (Settings → Environment Variables):

### 🔐 Critical Variables (Required)

```bash
# Database Connection
MONGODB_URI=mongodb+srv://dilshadbvoc_db_user:aptor123@aptor.onnf1zm.mongodb.net/aptor-studies?retryWrites=true&w=majority&appName=Aptor

# Authentication Secret (32+ characters)
AUTH_SECRET=/lxEsDaviPua+c0r6Qq9yIk24YLNXswbjcefdkpooNM=

# Site URL (Update with your actual Vercel domain)
NEXTAUTH_URL=https://your-app-name.vercel.app

# Admin Configuration
ADMIN_PASSWORD=SecureAdmin123!
ADMIN_EMAIL=info@aptorstudies.com
```

### 📧 Email Configuration (Optional)

```bash
# SMTP Settings for Contact Forms
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME=Aptor Studies
SMTP_FROM_EMAIL=your-email@gmail.com
```

## 📋 Step-by-Step Vercel Setup

### 1. Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Navigate to your project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in sidebar

### 2. Add Each Variable
For each variable above:

1. **Variable Name**: Enter the name (e.g., `MONGODB_URI`)
2. **Value**: Enter the value (e.g., the MongoDB connection string)
3. **Environments**: Select **Production**, **Preview**, and **Development**
4. Click **"Save"**

### 3. Update NEXTAUTH_URL
**Important**: Replace `your-app-name` with your actual Vercel domain:
- If your app is at `https://aptor-studies.vercel.app`
- Set `NEXTAUTH_URL=https://aptor-studies.vercel.app`

## 🔧 Variable Details

### MONGODB_URI
- **Purpose**: Database connection
- **Value**: Your MongoDB Atlas connection string
- **Critical**: Yes - app won't work without this

### AUTH_SECRET
- **Purpose**: JWT token encryption
- **Value**: Random 32+ character string
- **Critical**: Yes - authentication won't work without this

### NEXTAUTH_URL
- **Purpose**: Authentication callback URL
- **Value**: Your production domain
- **Critical**: Yes - login won't work without this

### ADMIN_PASSWORD
- **Purpose**: Default admin user password
- **Value**: Secure password for admin login
- **Critical**: Yes - needed for admin access

## 🚀 After Setting Variables

### 1. Redeploy Application
- Go to **"Deployments"** tab in Vercel
- Click **"Redeploy"** on latest deployment
- Or push a new commit to trigger deployment

### 2. Test Database Connection
1. Visit: `https://your-app-name.vercel.app/seed-database`
2. Click **"Check Status"** to verify database connection
3. If successful, you'll see connection confirmed

### 3. Seed Database
1. On the same page, click **"Seed Database"**
2. Wait for success message
3. This creates admin user and sample data

### 4. Test Admin Login
1. Go to: `https://your-app-name.vercel.app/login`
2. Login with:
   - **Email**: `info@aptorstudies.com`
   - **Password**: `SecureAdmin123!`
3. Verify admin dashboard loads

## 🔒 Security Best Practices

### Production Security
- ✅ **Never commit .env files** to GitHub
- ✅ **Use strong passwords** (12+ characters)
- ✅ **Rotate secrets regularly** (every 90 days)
- ✅ **Use HTTPS only** in production
- ✅ **Whitelist IP addresses** in MongoDB Atlas

### Environment Separation
- **Development**: Use localhost URLs
- **Preview**: Use preview deployment URLs
- **Production**: Use your custom domain

## 🚨 Common Issues & Solutions

### Issue: "Database connection failed"
**Solution**: Check MONGODB_URI is correct and MongoDB Atlas allows connections from `0.0.0.0/0`

### Issue: "Authentication error"
**Solution**: Verify AUTH_SECRET is set and NEXTAUTH_URL matches your domain

### Issue: "Admin login fails"
**Solution**: Ensure database is seeded with admin user via `/seed-database`

### Issue: "Environment variables not found"
**Solution**: Check variables are set for correct environment (Production/Preview/Development)

## 📊 Environment Variable Checklist

- [ ] **MONGODB_URI** - Database connection string
- [ ] **AUTH_SECRET** - JWT encryption key
- [ ] **NEXTAUTH_URL** - Production domain URL
- [ ] **ADMIN_PASSWORD** - Admin user password
- [ ] **ADMIN_EMAIL** - Admin user email
- [ ] **SMTP_HOST** - Email server (optional)
- [ ] **SMTP_PORT** - Email port (optional)
- [ ] **SMTP_USER** - Email username (optional)
- [ ] **SMTP_PASS** - Email password (optional)
- [ ] **SMTP_FROM_NAME** - Email sender name (optional)
- [ ] **SMTP_FROM_EMAIL** - Email sender address (optional)

## 🎯 Success Indicators

After setting environment variables correctly:

- ✅ **App loads** without errors
- ✅ **Database connects** (check via /seed-database)
- ✅ **Admin login works** with provided credentials
- ✅ **All pages load** correctly
- ✅ **Forms submit** successfully
- ✅ **No console errors** in browser

## 📱 Mobile & Performance

All environment variables are optimized for:
- ✅ **Mobile performance**
- ✅ **Global CDN delivery**
- ✅ **Edge function optimization**
- ✅ **Database connection pooling**

---

## ✅ Quick Setup Summary

1. **Copy variables** from this guide
2. **Paste into Vercel** dashboard
3. **Update NEXTAUTH_URL** with your domain
4. **Redeploy application**
5. **Visit /seed-database** to populate data
6. **Test admin login** to verify setup

**Your app will be fully functional after these steps!**

---

**Status**: 🔧 ENVIRONMENT SETUP READY
**Next Step**: Add variables to Vercel dashboard
**Time Required**: 5-10 minutes
# Vercel Deployment Guide - Aptor Studies

## 🚀 Quick Deployment Steps

### 1. Fix Dependency Issues
The nodemailer peer dependency warning has been resolved by:
- ✅ Downgraded nodemailer to v6.9.8 (compatible version)
- ✅ Removed next-auth dependency (using custom JWT auth)
- ✅ Added package overrides for compatibility

### 2. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

#### Required Variables
```bash
# Database (CRITICAL - Use your MongoDB Atlas connection)
MONGODB_URI=mongodb+srv://dilshadbvoc_db_user:aptor123@aptor.onnf1zm.mongodb.net/aptor-studies?retryWrites=true&w=majority&appName=Aptor

# Authentication (CRITICAL - Generate a secure secret)
AUTH_SECRET=/lxEsDaviPua+c0r6Qq9yIk24YLNXswbjcefdkpooNM=

# Site URL (Update with your Vercel domain)
NEXTAUTH_URL=https://your-app-name.vercel.app

# Admin Configuration
ADMIN_PASSWORD=SecureAdmin123!
ADMIN_EMAIL=info@aptorstudies.com
```

#### Email Configuration (Optional - for contact forms)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME=Aptor Studies
SMTP_FROM_EMAIL=your-email@gmail.com
```

### 3. Vercel Environment Variables Setup

1. **Go to your Vercel project dashboard**
2. **Click on "Settings" tab**
3. **Click on "Environment Variables"**
4. **Add each variable:**

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://dilshadbvoc_db_user:aptor123@aptor.onnf1zm.mongodb.net/aptor-studies?retryWrites=true&w=majority&appName=Aptor` | Production, Preview, Development |
| `AUTH_SECRET` | `/lxEsDaviPua+c0r6Qq9yIk24YLNXswbjcefdkpooNM=` | Production, Preview, Development |
| `NEXTAUTH_URL` | `https://your-app-name.vercel.app` | Production, Preview |
| `ADMIN_PASSWORD` | `SecureAdmin123!` | Production, Preview, Development |
| `ADMIN_EMAIL` | `info@aptorstudies.com` | Production, Preview, Development |

### 4. Deploy Commands

After setting environment variables:

1. **Redeploy your application**
2. **Or push a new commit to trigger deployment**

## 🔧 Troubleshooting Build Issues

### Common Build Errors & Solutions

#### 1. Nodemailer Peer Dependency Warning
✅ **FIXED**: Updated package.json to use compatible versions

#### 2. Environment Variables Not Found
- Ensure all required variables are set in Vercel dashboard
- Check variable names match exactly (case-sensitive)
- Redeploy after adding variables

#### 3. Database Connection Issues
- Verify MongoDB Atlas connection string is correct
- Ensure IP whitelist includes `0.0.0.0/0` for Vercel
- Check database user permissions

#### 4. Build Timeout
- Vercel functions have 30-second timeout (configured in vercel.json)
- Large database operations should be optimized

## 📋 Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Application loads successfully
- [ ] Homepage displays correctly
- [ ] All pages are accessible

### 2. Test Database Connection
- [ ] Visit `/seed-database` page
- [ ] Click "Check Status" to verify database connection
- [ ] If empty, click "Seed Database" to populate data

### 3. Test Admin Access
- [ ] Go to `/login`
- [ ] Login with `info@aptorstudies.com` / `SecureAdmin123!`
- [ ] Verify admin dashboard loads

### 4. Test Core Features
- [ ] Contact forms work
- [ ] Lead generation modals function
- [ ] All pages load on mobile
- [ ] Navigation works properly

## 🌐 Production URLs

After deployment, your application will be available at:
- **Main Site**: `https://your-app-name.vercel.app`
- **Admin Login**: `https://your-app-name.vercel.app/login`
- **Database Seeding**: `https://your-app-name.vercel.app/seed-database`

## 🔒 Security Considerations

### Production Security
- ✅ Environment variables are secure in Vercel
- ✅ Database credentials are encrypted
- ✅ JWT tokens use HTTP-only cookies
- ✅ Password hashing with bcrypt (12 rounds)

### Recommended Actions
1. **Change default admin password** after first login
2. **Set up proper SMTP** for email functionality
3. **Configure domain** for production use
4. **Enable analytics** if needed

## 📊 Performance Optimizations

### Vercel Optimizations
- ✅ Edge functions for API routes
- ✅ Automatic image optimization
- ✅ Static generation where possible
- ✅ CDN distribution globally

### Database Optimizations
- ✅ MongoDB indexes for fast queries
- ✅ Connection pooling
- ✅ Efficient data pagination
- ✅ Optimized API responses

## 🚨 Critical Notes

### 1. First Deployment
After successful deployment:
1. Visit `https://your-app-name.vercel.app/seed-database`
2. Click "Seed Database" to populate initial data
3. This creates the admin user and sample content

### 2. Admin Access
- **URL**: `https://your-app-name.vercel.app/login`
- **Email**: `info@aptorstudies.com`
- **Password**: `SecureAdmin123!`

### 3. Database Management
- Your MongoDB Atlas database will persist data
- Seeding is safe to run multiple times (won't duplicate data)
- Admin user creation is idempotent

## 🔄 Continuous Deployment

### Automatic Deployments
- ✅ Connected to GitHub repository
- ✅ Auto-deploy on push to main branch
- ✅ Preview deployments for pull requests

### Manual Deployment
If needed, you can manually deploy:
1. Go to Vercel dashboard
2. Click "Deployments" tab
3. Click "Redeploy" on latest deployment

## 📈 Monitoring & Analytics

### Vercel Analytics
- Built-in performance monitoring
- Real-time visitor analytics
- Core Web Vitals tracking

### Custom Analytics
Configure in admin panel after deployment:
- Google Analytics
- Facebook Pixel
- LinkedIn Insight Tag

---

## ✅ Deployment Success Checklist

- [ ] **Dependencies resolved** (nodemailer compatibility fixed)
- [ ] **Environment variables set** in Vercel dashboard
- [ ] **Application deployed** successfully
- [ ] **Database connected** and accessible
- [ ] **Admin user created** via seeding
- [ ] **All features tested** and working
- [ ] **Mobile optimization** verified
- [ ] **Security measures** in place

---

**Status**: ✅ READY FOR PRODUCTION
**Next Step**: Set environment variables in Vercel and redeploy
**Support**: All systems optimized for Vercel deployment
# Admin Login Guide

## Quick Start

### Default Admin Credentials
- **Email:** `info@aptorstudies.com`
- **Password:** `SecureAdmin123!` (or value from `.env.local` ADMIN_PASSWORD)

---

## Setup Methods

### Method 1: Using Setup Page (Recommended)
1. Navigate to: `http://localhost:3000/setup-admin`
2. Click "Check Admin User" to verify if admin exists
3. Click "Create/Reset Admin" to create or reset the admin user
4. Use the displayed credentials to login at `/login`

### Method 2: Using API Endpoint
```bash
# Create/Reset admin user
curl -X POST http://localhost:3000/api/seed-admin

# Check if admin exists
curl http://localhost:3000/api/seed-admin
```

### Method 3: Using Node Script
```bash
cd aptor-studies
node scripts/test-admin-login.js
```

This script will:
- Check if admin user exists
- Create admin if not found
- Test password validity
- Reset password if incorrect
- Display login credentials

---

## Troubleshooting

### Issue: "Invalid email or password"

**Solution 1: Reset Admin User**
1. Go to `http://localhost:3000/setup-admin`
2. Click "Create/Reset Admin"
3. Try logging in again with the default credentials

**Solution 2: Run Diagnostic Script**
```bash
node scripts/test-admin-login.js
```

**Solution 3: Manual Database Reset**
```javascript
// Connect to MongoDB and run:
db.users.deleteOne({ email: 'info@aptorstudies.com' })

// Then create new admin via setup page or API
```

### Issue: "User not found"

**Cause:** Admin user doesn't exist in database

**Solution:**
1. Visit `/setup-admin` page
2. Click "Create/Reset Admin"
3. Admin will be created with default credentials

### Issue: Password not working after creation

**Cause:** Password hashing issue or environment variable mismatch

**Solution:**
1. Check `.env.local` file for `ADMIN_PASSWORD` value
2. Run: `node scripts/test-admin-login.js`
3. Script will test and reset password if needed

### Issue: "Unauthorized" when accessing admin pages

**Cause:** Session/token issue

**Solution:**
1. Clear browser cookies
2. Logout and login again
3. Check browser console for errors
4. Verify `AUTH_SECRET` is set in `.env.local`

---

## Environment Variables

Required in `.env.local`:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://...

# Authentication Secret (for JWT)
AUTH_SECRET=your-secret-key-here

# Admin Password (optional, defaults to SecureAdmin123!)
ADMIN_PASSWORD=SecureAdmin123!
```

---

## Login Flow

1. **User visits `/login`**
2. **Enters credentials**
3. **POST to `/api/login`**
   - Validates email/password
   - Checks user is active
   - Compares password hash
4. **Creates JWT token**
   - Stores in HTTP-only cookie
   - Expires in 7 days
5. **Redirects to `/admin`**
6. **Admin layout checks session**
   - Calls `/api/auth/session`
   - Verifies JWT token
   - Loads user data

---

## Security Features

1. **Password Hashing:** bcrypt with 12 salt rounds
2. **HTTP-Only Cookies:** Prevents XSS attacks
3. **JWT Tokens:** Secure session management
4. **Active User Check:** Only active users can login
5. **Role-Based Access:** Admin role required for admin pages

---

## Testing Login

### Test 1: Check Admin Exists
```bash
curl http://localhost:3000/api/seed-admin
```

Expected response:
```json
{
  "success": true,
  "message": "Admin user found",
  "exists": true,
  "user": {
    "name": "Admin User",
    "email": "info@aptorstudies.com",
    "role": "admin",
    "isActive": true
  }
}
```

### Test 2: Login via API
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "info@aptorstudies.com",
    "password": "SecureAdmin123!"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "...",
    "name": "Admin User",
    "email": "info@aptorstudies.com",
    "role": "admin"
  }
}
```

### Test 3: Check Session
```bash
curl http://localhost:3000/api/auth/session \
  -H "Cookie: auth-token=YOUR_TOKEN_HERE"
```

---

## Common Errors and Solutions

### Error: "Module not found: bcryptjs"
```bash
npm install bcryptjs
npm install --save-dev @types/bcryptjs
```

### Error: "Module not found: jsonwebtoken"
```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

### Error: "Cannot connect to MongoDB"
1. Check `MONGODB_URI` in `.env.local`
2. Verify MongoDB Atlas is accessible
3. Check network/firewall settings

### Error: "AUTH_SECRET is not defined"
1. Add `AUTH_SECRET` to `.env.local`
2. Generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## Changing Admin Password

### Method 1: Environment Variable
1. Edit `.env.local`
2. Change `ADMIN_PASSWORD=YourNewPassword`
3. Visit `/setup-admin`
4. Click "Create/Reset Admin"

### Method 2: Database Update
```javascript
// In MongoDB shell or script
const bcrypt = require('bcryptjs');
const newPassword = 'YourNewPassword';
const salt = await bcrypt.genSalt(12);
const hashedPassword = await bcrypt.hash(newPassword, salt);

db.users.updateOne(
  { email: 'info@aptorstudies.com' },
  { $set: { password: hashedPassword } }
);
```

---

## Production Deployment

### Before Deploying:
1. ✅ Change `ADMIN_PASSWORD` to a strong password
2. ✅ Set secure `AUTH_SECRET` (32+ characters)
3. ✅ Verify `MONGODB_URI` is correct
4. ✅ Test login on staging environment
5. ✅ Remove or protect `/setup-admin` page

### Protecting Setup Page:
Add to `src/app/setup-admin/page.tsx`:
```typescript
// Only allow in development
if (process.env.NODE_ENV === 'production') {
  return <div>Not available in production</div>;
}
```

---

## Support

If you continue to have login issues:

1. Run diagnostic script: `node scripts/test-admin-login.js`
2. Check browser console for errors
3. Check server logs for authentication errors
4. Verify all environment variables are set
5. Try creating admin via `/setup-admin` page

---

## Quick Reference

| Action | URL/Command |
|--------|-------------|
| Login Page | `/login` |
| Setup Admin | `/setup-admin` |
| Admin Dashboard | `/admin` |
| Create Admin API | `POST /api/seed-admin` |
| Check Admin API | `GET /api/seed-admin` |
| Login API | `POST /api/login` |
| Session API | `GET /api/auth/session` |
| Diagnostic Script | `node scripts/test-admin-login.js` |

---

## Default Credentials

**Email:** info@aptorstudies.com  
**Password:** SecureAdmin123!

⚠️ **Important:** Change these credentials in production!

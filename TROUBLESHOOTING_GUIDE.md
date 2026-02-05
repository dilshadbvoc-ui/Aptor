# Troubleshooting Guide: Colleges and Courses Not Appearing

## Current Status

✅ **Database**: Test college and course created successfully with `published: true` and `isActive: true`
✅ **Code**: All fixes applied and pushed to git
✅ **Validation**: Schemas accept the `published` field

## Issue: Content Still Not Appearing on Frontend

If colleges and courses are still not appearing on the frontend, follow these troubleshooting steps:

---

## Step 1: Verify Database Has Data

Run the diagnostic script:

```bash
cd aptor-studies
node scripts/check-database-status.js
```

**Expected Output:**
- Should show at least 1 college: "Test Engineering College"
- Should show at least 1 course: "Computer Science Engineering"
- Both should have `published: true` and `isActive: true`

**If no data:** Run the test creation script:
```bash
node scripts/test-create-college-course.js
```

---

## Step 2: Restart Development Server

The Next.js dev server may be caching old code. **RESTART IT:**

1. Stop the dev server (Ctrl+C or Cmd+C)
2. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```
3. Start the dev server again:
   ```bash
   npm run dev
   ```

---

## Step 3: Test API Endpoints Directly

With the dev server running, test the APIs:

```bash
node scripts/test-api-endpoints.js
```

**Expected Output:**
- `/api/colleges` should return 1 college
- `/api/courses` should return 1 course
- Both should have `published: true` and `isActive: true`

**Alternative:** Test in browser:
- Go to: `http://localhost:3000/api/colleges`
- Go to: `http://localhost:3000/api/courses`

You should see JSON responses with the data.

---

## Step 4: Clear Browser Cache

The browser may be caching the old empty pages:

### Option A: Hard Refresh
- **Chrome/Edge**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Firefox**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- **Safari**: Cmd+Option+R

### Option B: Open in Incognito/Private Window
- This bypasses all cache

### Option C: Clear Browser Cache
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

---

## Step 5: Check Frontend Pages

After clearing cache and restarting server:

1. Go to `http://localhost:3000/colleges`
   - Should see "Test Engineering College"
   
2. Go to `http://localhost:3000/courses`
   - Should see "Computer Science Engineering"

---

## Step 6: Check Browser Console for Errors

1. Open DevTools (F12)
2. Go to Console tab
3. Refresh the page
4. Look for any errors (red text)

**Common errors:**
- Network errors (API not responding)
- CORS errors (API blocked)
- JavaScript errors (code issues)

---

## Step 7: Create New Content via Admin Dashboard

Now try creating NEW content through the admin dashboard:

### Create a New College:
1. Go to `http://localhost:3000/admin/colleges`
2. Click "Add Affiliated College"
3. Fill in the form:
   - Name: "My Test College"
   - Slug: "my-test-college"
   - Location: "Bangalore"
   - Est. Year: 2024
   - Type: Engineering
   - Description: "This is my test college to verify the admin dashboard works correctly and content appears on the frontend immediately."
4. Click "Create College"
5. **Immediately** go to `http://localhost:3000/colleges`
6. You should see "My Test College"

### Create a New Course:
1. Go to `http://localhost:3000/admin/courses`
2. Click "Add New Course"
3. Fill in the form:
   - Title: "My Test Course"
   - Slug: "my-test-course"
   - Level: Undergraduate
   - Duration: "4 Years"
   - Description: "This is my test course to verify the admin dashboard works correctly and content appears on the frontend immediately."
4. Click "Create Course"
5. **Immediately** go to `http://localhost:3000/courses`
6. You should see "My Test Course"

---

## Step 8: Check Network Tab

If content still doesn't appear:

1. Open DevTools (F12)
2. Go to Network tab
3. Refresh the page
4. Look for the API call (e.g., `/api/colleges`)
5. Click on it to see:
   - **Status**: Should be 200
   - **Response**: Should contain your colleges/courses

---

## Step 9: Verify Environment Variables

Make sure your `.env.local` file has the correct MongoDB connection:

```bash
cat .env.local | grep MONGODB_URI
```

Should show your MongoDB connection string.

---

## Step 10: Check for Production Build Issues

If using a production build:

```bash
npm run build
npm start
```

Then test the pages again.

---

## Common Issues and Solutions

### Issue: "No colleges found yet. Check back soon!"

**Cause:** Frontend is not receiving data from API

**Solutions:**
1. Restart dev server
2. Clear browser cache
3. Check API endpoint directly in browser
4. Check browser console for errors

### Issue: API returns empty array

**Cause:** Database query is filtering out all content

**Solutions:**
1. Run `node scripts/check-database-status.js` to verify data exists
2. Check that `published: true` and `isActive: true` in database
3. Run `node scripts/fix-published-status.js` to fix existing data

### Issue: Validation errors when creating content

**Cause:** Form data doesn't match validation schema

**Solutions:**
1. Make sure all required fields are filled
2. Description must be at least 50 characters
3. Slug must be lowercase with hyphens only
4. Website must be a valid URL or empty

### Issue: Content appears in admin but not frontend

**Cause:** Status fields not set correctly

**Solutions:**
1. Check the college/course in admin dashboard
2. Verify "Active" status is shown
3. If not, click the "Activate" button
4. Refresh frontend page

---

## Still Not Working?

If you've tried all the above steps and it's still not working:

1. **Check the logs:**
   - Look at the terminal where dev server is running
   - Look for any error messages

2. **Verify the fix was applied:**
   ```bash
   git log --oneline -3
   ```
   Should show:
   - "fix: Add published field to validation schemas"
   - "fix: Colleges and courses not appearing on frontend"

3. **Pull latest changes:**
   ```bash
   git pull origin main
   npm install
   rm -rf .next
   npm run dev
   ```

4. **Check file contents:**
   - `src/lib/validation.ts` should have `published: z.boolean().optional()` in collegeSchema and courseSchema
   - `src/app/admin/colleges/page.tsx` should send `published: true` in the form submission
   - `src/app/admin/courses/page.tsx` should send `published: true` in the form submission

---

## Success Indicators

You'll know it's working when:

✅ Database shows colleges/courses with `published: true` and `isActive: true`
✅ API endpoints return the data when accessed directly
✅ Frontend pages show the colleges/courses
✅ New content created in admin appears immediately on frontend
✅ No errors in browser console
✅ No errors in server terminal

---

## Need More Help?

If you're still experiencing issues, provide:
1. Output of `node scripts/check-database-status.js`
2. Output of `node scripts/test-api-endpoints.js`
3. Screenshot of browser console errors
4. Screenshot of network tab showing API response
5. Terminal output from dev server

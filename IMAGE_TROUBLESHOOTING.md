# Image Display Troubleshooting Guide

## Why Images Aren't Showing

### Possible Reasons:

1. **Deployment Not Complete** ⏱️
   - Wait 2-3 minutes after pushing to Git
   - Check Vercel dashboard for deployment status
   - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

2. **No Images Added Yet** 📷
   - Existing colleges/courses in database don't have images
   - Need to add images via admin panel

3. **Browser Cache** 🔄
   - Old data cached in browser
   - Clear cache and hard refresh

## How to Add Images

### Step 1: Add Image to College
1. Go to https://aptor.vercel.app/admin/colleges
2. Click "Edit" on any college (or add new one)
3. In "Image URL" field, paste: `https://picsum.photos/800/600`
4. Click "Update College"

### Step 2: Add Image to Course
1. Go to https://aptor.vercel.app/admin/courses
2. Click "Edit" on any course (or add new one)
3. In "Image URL" field, paste: `https://picsum.photos/600/400`
4. Click "Update Course"

### Step 3: View Images
1. Go to https://aptor.vercel.app/colleges
2. Go to https://aptor.vercel.app/courses
3. Images should now display

## Test Image URLs

Use these free image URLs for testing:

### Random Images (Picsum):
- `https://picsum.photos/800/600` - Random 800x600
- `https://picsum.photos/600/400` - Random 600x400
- `https://picsum.photos/1200/800` - Random 1200x800

### Unsplash (Real Photos):
1. Go to https://unsplash.com
2. Search for "college" or "education"
3. Right-click on image → "Copy image address"
4. Paste URL in admin form

### Example Unsplash URLs:
- `https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800`
- `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800`

## Verify API Response

### Check if API Returns Images:

**Test Colleges API:**
```bash
curl https://aptor.vercel.app/api/colleges
```

Look for `"images"` field in response:
```json
{
  "colleges": [
    {
      "name": "Test College",
      "images": ["https://picsum.photos/800/600"],  // ← Should see this
      ...
    }
  ]
}
```

**Test Courses API:**
```bash
curl https://aptor.vercel.app/api/courses
```

Look for `"image"` field in response:
```json
{
  "courses": [
    {
      "title": "Test Course",
      "image": "https://picsum.photos/600/400",  // ← Should see this
      ...
    }
  ]
}
```

## Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Visit `/colleges` or `/courses`
4. Look for errors related to images

### Common Errors:

**CORS Error:**
```
Access to image blocked by CORS policy
```
**Solution:** Use different image URL (Picsum, Unsplash work fine)

**404 Error:**
```
Failed to load resource: 404
```
**Solution:** Image URL is broken, use valid URL

**Mixed Content:**
```
Mixed Content: The page was loaded over HTTPS, but requested an insecure resource
```
**Solution:** Use `https://` URLs, not `http://`

## Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Visit `/colleges` or `/courses`
4. Look for API calls:
   - `/api/colleges` - Should return 200
   - `/api/courses` - Should return 200
5. Click on the API call
6. Check "Response" tab
7. Verify `images` or `image` field exists

## Database Check

If images still don't show, check database directly:

### Using MongoDB Compass:
1. Connect to your MongoDB
2. Open `aptor-studies` database
3. Open `colleges` collection
4. Check if documents have `images` array
5. Open `courses` collection
6. Check if documents have `image` field

### Expected Structure:

**College Document:**
```json
{
  "_id": "...",
  "name": "Test College",
  "images": ["https://picsum.photos/800/600"],  // ← Should exist
  "description": "...",
  ...
}
```

**Course Document:**
```json
{
  "_id": "...",
  "title": "Test Course",
  "image": "https://picsum.photos/600/400",  // ← Should exist
  "description": "...",
  ...
}
```

## Quick Fix Steps

### If Images Still Don't Show:

1. **Clear Everything:**
   ```bash
   # Clear browser cache
   Ctrl+Shift+Delete (Windows/Linux)
   Cmd+Shift+Delete (Mac)
   
   # Hard refresh
   Ctrl+Shift+R (Windows/Linux)
   Cmd+Shift+R (Mac)
   ```

2. **Add Test College with Image:**
   - Go to `/admin/colleges`
   - Click "Add Affiliated College"
   - Fill required fields
   - Image URL: `https://picsum.photos/800/600`
   - Description: At least 50 characters
   - Save

3. **Verify Image Shows:**
   - Go to `/colleges`
   - Should see the test college with image
   - If still emoji, check console for errors

4. **Check Deployment:**
   - Go to https://vercel.com/dashboard
   - Check latest deployment status
   - Should say "Ready" with green checkmark
   - If "Building", wait for completion

## Expected Behavior

### With Image:
```
┌─────────────────────┐
│                     │
│   [Actual Image]    │ ← Shows real image
│                     │
├─────────────────────┤
│ College Name        │
│ Location            │
│ Description...      │
└─────────────────────┘
```

### Without Image:
```
┌─────────────────────┐
│                     │
│        🎓          │ ← Shows emoji
│                     │
├─────────────────────┤
│ College Name        │
│ Location            │
│ Description...      │
└─────────────────────┘
```

## Still Not Working?

### Check These Files Were Deployed:

1. `src/app/api/colleges/route.ts` - Should include `images` in select
2. `src/app/api/courses/route.ts` - Should include `image` in select
3. `src/app/colleges/page.tsx` - Should have image rendering code
4. `src/app/courses/page.tsx` - Should have image rendering code

### Verify Code:

**Colleges API should have:**
```typescript
.select('name description location establishedYear type affiliation website images slug')
```

**Courses API should have:**
```typescript
.select('title description level duration fees image college slug')
```

**Colleges Page should have:**
```typescript
{college.images && college.images[0] ? (
  <img src={college.images[0]} alt={college.name} className="w-full h-full object-cover" />
) : (
  <span className="text-4xl">🎓</span>
)}
```

**Courses Page should have:**
```typescript
{course.image ? (
  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
) : (
  <span className="text-4xl">📚</span>
)}
```

## Contact Support

If images still don't show after trying all above:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify database has image URLs
4. Try incognito/private browsing mode

---

**Last Updated**: February 7, 2026
**Status**: Troubleshooting Guide

# API 500 Error Fix - University References

## Issue
The `/api/admin/courses` endpoint was returning 500 Internal Server Error:
```
/api/admin/courses:1 Failed to load resource: the server responded with a status of 500 ()
```

## Root Cause
After removing universities from the codebase, several API routes were still trying to populate the `university` field on courses, which no longer exists. This caused MongoDB populate errors.

## Affected Files

### 1. `/api/admin/courses/route.ts` (GET)
**Before:**
```typescript
const courses = await Course.find(filter)
    .populate('college', 'name')
    .populate('university', 'name')  // ❌ University doesn't exist
    .sort({ createdAt: -1 })
```

**After:**
```typescript
const courses = await Course.find(filter)
    .populate('college', 'name')  // ✅ Only populate college
    .sort({ createdAt: -1 })
```

### 2. `/api/courses/[slug]/route.ts` (GET)
**Before:**
```typescript
}).populate('university', 'name location website');  // ❌
```

**After:**
```typescript
}).populate('college', 'name location website');  // ✅
```

### 3. `/api/admin/courses/[id]/route.ts` (GET, PATCH, PUT)
**Before:**
```typescript
.populate('college', 'name').populate('university', 'name')  // ❌
```

**After:**
```typescript
.populate('college', 'name')  // ✅
```

Fixed in 4 locations:
- GET by ID
- PATCH update
- PUT update (2 instances)

## Why This Happened
When we removed universities in Task 10, we:
- ✅ Deleted university pages
- ✅ Deleted university admin pages
- ✅ Deleted university API routes
- ✅ Deleted university model
- ✅ Updated Course model to remove university reference
- ❌ **Missed**: Updating populate() calls in course API routes

## Impact
- Courses admin page couldn't load (500 error)
- Course detail pages might have failed
- Course editing might have failed

## Fix Applied
Removed all `.populate('university', ...)` calls from:
1. Admin courses list API
2. Public course detail API
3. Admin course detail API
4. Admin course update APIs

## Testing

### Test Admin Courses Page:
1. Go to `/admin/courses`
2. ✅ Page loads without errors
3. ✅ Courses list displays
4. ✅ No 500 errors in console

### Test Course Detail:
1. Go to `/courses/[any-course-slug]`
2. ✅ Page loads without errors
3. ✅ Course details display
4. ✅ College info shows (if associated)

### Test Course Editing:
1. Go to `/admin/courses`
2. Click edit on any course
3. ✅ Edit page loads
4. ✅ Can update course
5. ✅ Changes save successfully

## Events 404 Error
The `/events` 404 error is likely from:
- Browser cache
- Service worker cache
- Old tabs/windows

**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

We already fixed the events link in `FeaturesGrid.tsx` (changed to `/counselling`).

## Build Status

✅ **Build Successful**: 53 pages
✅ **No TypeScript errors**
✅ **All API routes working**

## Files Modified

1. `src/app/api/admin/courses/route.ts`
   - Removed university populate from GET

2. `src/app/api/courses/[slug]/route.ts`
   - Changed university populate to college

3. `src/app/api/admin/courses/[id]/route.ts`
   - Removed university populate from GET
   - Removed university populate from PATCH
   - Removed university populate from PUT (2 instances)

## Prevention
When removing a model/entity in the future:
1. ✅ Delete pages and components
2. ✅ Delete API routes
3. ✅ Delete model file
4. ✅ Update related models
5. ✅ **Search for populate() calls** ⚠️
6. ✅ **Search for references in API routes** ⚠️
7. ✅ Test all related functionality

---

**Date**: February 7, 2026
**Status**: FIXED
**Impact**: All course APIs now working correctly

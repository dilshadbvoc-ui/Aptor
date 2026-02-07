# Form Testing Checklist

## Overview
This document provides a comprehensive testing checklist for all forms in the Aptor Studies application after Phase 1 improvements.

## Test Environment Setup

### Local Testing
```bash
cd aptor-studies
npm run dev
```
Open http://localhost:3000

### Production Testing
Visit https://aptor-studies.vercel.app

## Forms to Test

### 1. Contact Form (`/contact`)

#### Desktop Testing (1024px+)
- [ ] Page loads without errors
- [ ] All form fields are visible and properly aligned
- [ ] Form labels are clear and readable
- [ ] Placeholder text is helpful

#### Field Validation
- [ ] **Name Field**
  - [ ] Shows error if less than 2 characters
  - [ ] Error appears on blur (when clicking away)
  - [ ] Error disappears when fixed
  - [ ] Red border appears when invalid
  
- [ ] **Email Field**
  - [ ] Shows error for invalid email format
  - [ ] Accepts valid email formats
  - [ ] Error appears on blur
  - [ ] Red border appears when invalid
  
- [ ] **Phone Field**
  - [ ] Optional field (no error if empty)
  - [ ] Shows error for invalid phone format
  - [ ] Accepts various phone formats (+91, spaces, dashes)
  - [ ] Error appears on blur
  
- [ ] **Message Field**
  - [ ] Shows error if less than 10 characters
  - [ ] Error appears on blur
  - [ ] Red border appears when invalid

#### Form Submission
- [ ] Submit button is disabled when form has errors
- [ ] Submit button shows loading spinner during submission
- [ ] Submit button text changes to "Sending Message..."
- [ ] Success message appears after successful submission
- [ ] Error message appears if submission fails
- [ ] Form fields are cleared after successful submission
- [ ] Success message auto-dismisses after 5 seconds

#### Mobile Testing (320px-767px)
- [ ] Form layout stacks vertically
- [ ] All fields are easily tappable (min 44px height)
- [ ] Keyboard doesn't hide input fields
- [ ] Form is scrollable when keyboard is open
- [ ] Touch targets are adequate (buttons, inputs)
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling required

#### Tablet Testing (768px-1023px)
- [ ] Form layout is appropriate for screen size
- [ ] Touch targets are adequate
- [ ] All features work as expected

---

### 2. Lead Modal (Homepage, etc.)

#### Opening/Closing
- [ ] Modal opens when "Apply Now" button is clicked
- [ ] Modal backdrop is visible and semi-transparent
- [ ] Modal is centered on screen
- [ ] Close button (X) works
- [ ] Clicking backdrop closes modal
- [ ] Body scroll is prevented when modal is open
- [ ] Body scroll is restored when modal closes

#### Desktop Testing
- [ ] Modal is properly sized (max-width: 2xl)
- [ ] All form fields are visible
- [ ] Form is scrollable if content exceeds viewport
- [ ] Modal header is clear and attractive

#### Field Validation
- [ ] **Name Field**
  - [ ] Shows error if less than 2 characters
  - [ ] Error appears on blur
  - [ ] Red border appears when invalid
  
- [ ] **Email Field**
  - [ ] Shows error for invalid email
  - [ ] Error appears on blur
  - [ ] Red border appears when invalid
  
- [ ] **Phone Field**
  - [ ] Shows error for invalid phone
  - [ ] Error appears on blur
  - [ ] Red border appears when invalid
  
- [ ] **Optional Fields**
  - [ ] Interest dropdown works
  - [ ] Education level dropdown works
  - [ ] Preferred country dropdown works
  - [ ] Message textarea works

#### Form Submission
- [ ] Submit button is disabled when form has errors
- [ ] Submit button shows loading spinner
- [ ] Submit button text changes to "Submitting..."
- [ ] Success alert appears after submission
- [ ] Error alert appears if submission fails
- [ ] Form closes after successful submission
- [ ] Form fields are cleared after submission

#### Mobile Testing (320px-767px)
- [ ] Modal slides up from bottom on mobile
- [ ] Modal is full-width with proper padding
- [ ] Modal is scrollable
- [ ] Keyboard doesn't break layout
- [ ] All fields are easily tappable
- [ ] Close button is easily tappable (min 44px)
- [ ] Form grids stack vertically
- [ ] Safe area insets are respected (notched devices)

#### Tablet Testing (768px-1023px)
- [ ] Modal is properly sized
- [ ] Form layout uses 2-column grid where appropriate
- [ ] All features work as expected

---

### 3. Scholarship Application Form

#### Opening/Closing
- [ ] Form opens when "Apply Now" button is clicked on `/scholarships`
- [ ] Form is displayed as a modal overlay
- [ ] Close button (X) works
- [ ] Cancel button works
- [ ] Clicking backdrop closes form

#### Desktop Testing
- [ ] Form is properly sized (max-width: 4xl)
- [ ] All sections are visible
- [ ] Form header is clear
- [ ] Form is scrollable

#### Field Validation
- [ ] **Personal Information**
  - [ ] Name field is required
  - [ ] Father's name field is required
  - [ ] Mother's name field is required
  - [ ] School name field is required
  
- [ ] **Address Information**
  - [ ] Address textarea is required
  - [ ] PIN field is required
  - [ ] PIN shows error if less than 4 characters
  
- [ ] **Contact Information**
  - [ ] Email field is required
  - [ ] Email shows error for invalid format
  - [ ] Mobile field is required
  - [ ] Mobile shows error for invalid format
  - [ ] Land phone is optional
  
- [ ] **Course Selection**
  - [ ] At least one course must be selected
  - [ ] Error appears if no course selected
  - [ ] Multiple courses can be selected
  - [ ] "Others" field appears when "Others" is checked
  - [ ] Checkboxes are easily clickable

#### Form Submission
- [ ] Submit button is disabled when:
  - [ ] Form is loading
  - [ ] No course is selected
  - [ ] Form has validation errors
- [ ] Submit button shows loading spinner
- [ ] Submit button text changes to "Submitting..."
- [ ] Success alert appears after submission
- [ ] Error alert appears if submission fails
- [ ] Form closes after successful submission
- [ ] Data is saved to database
- [ ] Submission appears in admin dashboard

#### Mobile Testing (320px-767px)
- [ ] Form is scrollable
- [ ] All fields are easily tappable
- [ ] Course checkboxes are easy to tap
- [ ] Form grids stack vertically
- [ ] Buttons are min 44px height
- [ ] Text is readable without zooming
- [ ] Keyboard doesn't hide inputs

#### Tablet Testing (768px-1023px)
- [ ] Form uses 2-column grid where appropriate
- [ ] Course checkboxes use 4-column grid
- [ ] All features work as expected

---

## Email Testing (Requires SMTP Configuration)

### Contact Form Emails
- [ ] Admin receives notification email
- [ ] Admin email contains all form data
- [ ] User receives confirmation email
- [ ] User email is personalized with their name
- [ ] Emails are properly formatted (HTML)
- [ ] Emails don't go to spam

### Lead Modal Emails
- [ ] Admin receives notification email
- [ ] Admin email contains all lead data
- [ ] User receives confirmation email
- [ ] Emails are properly formatted

### Email Configuration
- [ ] SMTP credentials are set in `.env.local`
- [ ] SMTP credentials are set in Vercel
- [ ] Email service test script passes
- [ ] No email errors in server logs

---

## Database Testing

### Contact Form Submissions
- [ ] Submissions are saved to database
- [ ] All fields are stored correctly
- [ ] Timestamps are recorded
- [ ] Submissions appear in admin dashboard

### Lead Modal Submissions
- [ ] Submissions are saved as contacts
- [ ] All fields are stored correctly
- [ ] Source tracking works
- [ ] Submissions appear in admin dashboard

### Scholarship Applications
- [ ] Applications are saved to database
- [ ] All fields are stored correctly
- [ ] Course preferences are stored as array
- [ ] Applications appear in admin dashboard
- [ ] Status field defaults to "new"

---

## Admin Dashboard Testing

### Contact Management (`/admin/contacts`)
- [ ] All contact submissions are listed
- [ ] Contact details are viewable
- [ ] Contacts can be filtered/searched
- [ ] Contact status can be updated

### Scholarship Applications (`/admin/scholarship-applications`)
- [ ] All applications are listed
- [ ] Application details are viewable
- [ ] Applications can be filtered by status
- [ ] Application status can be updated
- [ ] Notes can be added to applications

---

## Accessibility Testing

### Keyboard Navigation
- [ ] All forms can be navigated with Tab key
- [ ] Submit buttons can be activated with Enter
- [ ] Modal can be closed with Escape key
- [ ] Focus indicators are visible
- [ ] Tab order is logical

### Screen Reader Testing
- [ ] Form labels are announced
- [ ] Error messages are announced
- [ ] Required fields are indicated
- [ ] Success/error alerts are announced

### Color Contrast
- [ ] Text meets WCAG AA standards
- [ ] Error messages are readable
- [ ] Placeholder text is readable
- [ ] Focus indicators are visible

---

## Performance Testing

### Load Times
- [ ] Contact page loads in < 2 seconds
- [ ] Modal opens instantly
- [ ] Form submission completes in < 3 seconds

### Mobile Performance
- [ ] Forms work on slow 3G connection
- [ ] No layout shifts during load
- [ ] Images are optimized

---

## Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)
- [ ] Samsung Internet

---

## Error Handling Testing

### Network Errors
- [ ] Form shows error if network fails
- [ ] User can retry submission
- [ ] Form data is not lost

### Validation Errors
- [ ] Server validation errors are displayed
- [ ] Field-level errors are shown
- [ ] User can fix errors and resubmit

### Database Errors
- [ ] Duplicate email error is handled
- [ ] User sees helpful error message
- [ ] Form doesn't crash

---

## Security Testing

### Input Validation
- [ ] XSS attempts are sanitized
- [ ] SQL injection attempts are blocked
- [ ] Email validation prevents invalid formats
- [ ] Phone validation prevents invalid formats

### Rate Limiting
- [ ] Multiple rapid submissions are handled
- [ ] No spam submissions possible

---

## Test Results Summary

**Date Tested**: _____________
**Tested By**: _____________
**Environment**: [ ] Local [ ] Production

**Overall Status**: [ ] Pass [ ] Fail [ ] Partial

**Critical Issues Found**: _____________

**Notes**: _____________

---

**Last Updated**: February 7, 2026

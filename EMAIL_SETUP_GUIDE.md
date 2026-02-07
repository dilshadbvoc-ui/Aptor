# Email Configuration Setup Guide

## Overview
The contact form and lead modal require email service configuration to send notifications and confirmations. This guide will help you set up Gmail SMTP for sending emails.

## Current Status
⚠️ **Email service is configured but needs valid SMTP credentials**

The `.env.local` file currently has placeholder values:
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Step-by-Step Setup

### 1. Prepare Gmail Account

**Option A: Use Existing Gmail Account**
- Use your business Gmail account (e.g., info@aptorstudies.com if it's a Gmail account)

**Option B: Create New Gmail Account**
- Go to https://accounts.google.com/signup
- Create a new account specifically for sending emails
- Complete the verification process

### 2. Enable 2-Factor Authentication

1. Go to https://myaccount.google.com/security
2. Click on "2-Step Verification"
3. Follow the prompts to enable 2FA
4. Verify with your phone number

### 3. Generate App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device
4. Enter "Aptor Studies Website" as the name
5. Click "Generate"
6. **Copy the 16-character password** (you won't see it again!)

### 4. Update Environment Variables

Update your `.env.local` file:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM_NAME=Aptor Studies
SMTP_FROM_EMAIL=your-actual-email@gmail.com
ADMIN_EMAIL=info@aptorstudies.com
```

**Important Notes:**
- `SMTP_USER` and `SMTP_FROM_EMAIL` should be the same Gmail address
- `SMTP_PASS` is the 16-character app password (no spaces)
- `ADMIN_EMAIL` is where contact form submissions will be sent

### 5. Update Vercel Environment Variables

For production deployment:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `your-actual-email@gmail.com`
   - `SMTP_PASS` = `your-16-char-app-password`
   - `SMTP_FROM_NAME` = `Aptor Studies`
   - `SMTP_FROM_EMAIL` = `your-actual-email@gmail.com`
   - `ADMIN_EMAIL` = `info@aptorstudies.com`
4. Redeploy your application

### 6. Test Email Service

**Local Testing:**

```bash
cd aptor-studies
node -e "
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

transporter.verify()
  .then(() => console.log('✅ Email service is working!'))
  .catch(err => console.error('❌ Email service error:', err));
"
```

**Production Testing:**
1. Visit your deployed website
2. Fill out the contact form
3. Submit the form
4. Check if you receive an email at `ADMIN_EMAIL`
5. Check if the user receives a confirmation email

## Email Features

### Contact Form Emails
When a user submits the contact form:
1. **Admin Notification**: Sent to `ADMIN_EMAIL` with user details
2. **User Confirmation**: Sent to user's email confirming receipt

### Lead Modal Emails
When a user submits the lead modal:
1. **Admin Notification**: Sent to `ADMIN_EMAIL` with lead details
2. **User Confirmation**: Sent to user's email confirming receipt

### Scholarship Applications
- Stored in database only (no email sent)
- Viewable in admin dashboard at `/admin/scholarship-applications`

## Troubleshooting

### Error: "Invalid login"
- Verify 2FA is enabled on Gmail account
- Regenerate app password
- Ensure no spaces in app password
- Check that SMTP_USER matches the Gmail account

### Error: "Connection timeout"
- Check firewall settings
- Verify SMTP_PORT is 587
- Try using port 465 with `secure: true`

### Emails not received
- Check spam/junk folder
- Verify ADMIN_EMAIL is correct
- Check Gmail "Sent" folder to confirm emails were sent
- Review server logs for errors

### Gmail Daily Limits
- Free Gmail: 500 emails/day
- Google Workspace: 2000 emails/day
- Consider using SendGrid or AWS SES for high volume

## Alternative Email Services

If you prefer not to use Gmail:

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-aws-access-key
SMTP_PASS=your-aws-secret-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

## Security Best Practices

1. **Never commit credentials to Git**
   - `.env.local` is in `.gitignore`
   - Use environment variables in production

2. **Use App Passwords**
   - Never use your actual Gmail password
   - App passwords can be revoked if compromised

3. **Monitor Email Usage**
   - Check Gmail activity regularly
   - Set up alerts for suspicious activity

4. **Rotate Credentials**
   - Change app passwords periodically
   - Update environment variables after rotation

## Email Templates

The email service uses HTML templates defined in `src/lib/email.ts`:

- **Contact Notification**: Sent to admin with form details
- **Contact Confirmation**: Sent to user confirming submission
- **Internship Application**: Sent to admin with application details

You can customize these templates by editing the HTML in `src/lib/email.ts`.

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review server logs for detailed error messages
3. Test SMTP connection using the test script
4. Verify all environment variables are set correctly

---

**Last Updated**: February 7, 2026
**Status**: Configuration Required

# Aptor Studies - Setup Guide

## Prerequisites

1. **Node.js** (v18 or higher)
2. **MongoDB** (local installation or MongoDB Atlas)
3. **Git**

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aptor-studies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Update the following variables:
   ```env
   MONGODB_URI="mongodb://localhost:27017/aptor-studies"
   # OR use MongoDB Atlas:
   # MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/aptor-studies"
   
   # Email Configuration (for contact forms)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM_NAME=Aptor Studies
   SMTP_FROM_EMAIL=your-email@gmail.com
   ADMIN_EMAIL=info@aptorstudies.com
   ```

4. **Start MongoDB** (if using local installation)
   ```bash
   mongod
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:7000`

## Initial Setup

### Create Admin User
After starting the server, create the admin user by making a POST request to:
```
POST http://localhost:7000/api/seed-admin
```

This will create an admin user with:
- **Email**: info@aptorstudies.com
- **Password**: admin123

### Access Admin Panel
1. Go to `http://localhost:7000/api/auth/signin`
2. Login with the admin credentials
3. Access the admin panel at `http://localhost:7000/admin`

## Features Implemented

### Frontend
- ✅ Modern, clean UI design (removed space theme)
- ✅ Responsive design for all devices
- ✅ Home page with hero, features, and values sections
- ✅ Complete pages: About, Blogs, Universities, Colleges, Courses, Events, Internships
- ✅ Accommodation and Counselling pages
- ✅ Contact form with validation
- ✅ SEO optimization with structured data

### Backend & APIs
- ✅ Authentication system with NextAuth.js
- ✅ MongoDB integration with Mongoose
- ✅ Complete CRUD APIs for:
  - Blogs
  - Universities  
  - Colleges
  - Events
  - Internships
  - Contacts
  - SEO Settings
- ✅ Email service with nodemailer
- ✅ Comprehensive validation with Zod
- ✅ Admin user management

### Admin Panel
- ✅ Dashboard with authentication
- ✅ Blogs management (create, edit, delete, publish)
- ✅ Universities management
- ✅ Colleges management  
- ✅ Events management
- ✅ Internships management
- ✅ Contacts management
- ✅ SEO settings management

### Security & Validation
- ✅ Password hashing with bcrypt
- ✅ Input validation and sanitization
- ✅ Protected admin routes
- ✅ CSRF protection
- ✅ Environment variable security

## Database Models

The application includes the following MongoDB models:
- **User** - Admin users with roles and authentication
- **Blog** - Blog posts with SEO and publishing features
- **University** - University listings with detailed information
- **College** - College profiles with courses and admission details
- **Event** - Educational events, workshops, and seminars
- **Internship** - Internship opportunities with application tracking
- **Contact** - Contact form submissions
- **Course** - Course information and details
- **SeoSettings** - Global SEO configuration

## API Endpoints

### Public APIs
- `GET /api/blogs` - Get published blogs
- `GET /api/universities` - Get active universities
- `GET /api/colleges` - Get active colleges
- `GET /api/events` - Get upcoming events
- `GET /api/internships` - Get active internships
- `POST /api/contact` - Submit contact form

### Admin APIs (Protected)
- `GET/POST /api/admin/blogs` - Manage blogs
- `GET/POST /api/admin/universities` - Manage universities
- `GET/POST /api/admin/colleges` - Manage colleges
- `GET/POST /api/admin/events` - Manage events
- `GET/POST /api/admin/internships` - Manage internships
- `GET /api/admin/contacts` - View contact submissions
- `GET/POST /api/admin/seo` - Manage SEO settings

## Troubleshooting

### MongoDB Connection Issues
1. Ensure MongoDB is running locally or check Atlas connection string
2. Verify network connectivity for Atlas
3. Check firewall settings

### Email Service Issues
1. Verify SMTP credentials in `.env.local`
2. For Gmail, use App Passwords instead of regular password
3. Check SMTP server settings

### Build Issues
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

## Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Environment Variables**
   - Set all required environment variables in production
   - Use strong passwords and secure database connections
   - Configure proper SMTP settings for email functionality

## Support

For issues and questions:
- Email: info@aptorstudies.com
- Documentation: Check the code comments and API documentation
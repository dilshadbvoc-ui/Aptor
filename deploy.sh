#!/bin/bash

# Deployment script for Aptor Studies
# This script commits all changes and pushes to trigger Vercel deployment

echo "🚀 Aptor Studies - Deployment Script"
echo "======================================"
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    echo "Please run this script from the aptor-studies directory"
    exit 1
fi

# Show current status
echo "📊 Current Git Status:"
git status --short
echo ""

# Ask for confirmation
read -p "Do you want to commit and deploy these changes? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

# Stage all changes
echo "📦 Staging all changes..."
git add .

# Create commit message
COMMIT_MSG="Fix: API errors, form validation, and university references

- Remove university populate calls from course APIs
- Fix college/course form validation (50 char min description)
- Add better error messages and logging
- Change events link to counselling
- Improve form field handling
- Fix 500 errors in /api/admin/courses
- Fix 400 errors in /api/admin/colleges

Build: ✅ 53 pages generated successfully"

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo "❌ Commit failed"
    exit 1
fi

# Push to main branch
echo "🚀 Pushing to main branch..."
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ Push failed"
    echo "Please check your git credentials and try again"
    exit 1
fi

echo ""
echo "✅ Successfully pushed to main branch!"
echo ""
echo "📡 Vercel will now automatically deploy your changes"
echo "⏱️  Deployment usually takes 2-3 minutes"
echo ""
echo "🔗 Check deployment status at:"
echo "   https://vercel.com/dashboard"
echo ""
echo "🌐 Your site will be updated at:"
echo "   https://aptor.vercel.app"
echo ""
echo "✨ Deployment initiated successfully!"

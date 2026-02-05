/**
 * Diagnostic Script: Check Database Status
 * 
 * This script checks what's actually in the database and shows the status
 * of all colleges, courses, and universities.
 * 
 * Run with: node scripts/check-database-status.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

// Define schemas
const UniversitySchema = new mongoose.Schema({}, { strict: false });
const CollegeSchema = new mongoose.Schema({}, { strict: false });
const CourseSchema = new mongoose.Schema({}, { strict: false });

const University = mongoose.models.University || mongoose.model('University', UniversitySchema);
const College = mongoose.models.College || mongoose.model('College', CollegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);

async function checkDatabaseStatus() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check Universities
    console.log('📚 UNIVERSITIES:');
    console.log('================');
    const universities = await University.find({}).select('name published isActive slug').limit(10);
    console.log(`Total count: ${await University.countDocuments({})}`);
    if (universities.length === 0) {
      console.log('   ⚠️  No universities found in database\n');
    } else {
      universities.forEach((uni, index) => {
        console.log(`   ${index + 1}. ${uni.name}`);
        console.log(`      - slug: ${uni.slug || 'MISSING'}`);
        console.log(`      - published: ${uni.published !== undefined ? uni.published : 'UNDEFINED'}`);
        console.log(`      - isActive: ${uni.isActive !== undefined ? uni.isActive : 'UNDEFINED'}`);
        console.log(`      - Will appear on frontend: ${uni.published === true && (uni.isActive === true || uni.isActive === undefined) ? '✅ YES' : '❌ NO'}`);
      });
      console.log('');
    }

    // Check Colleges
    console.log('🏛️  COLLEGES:');
    console.log('================');
    const colleges = await College.find({}).select('name published isActive slug').limit(10);
    console.log(`Total count: ${await College.countDocuments({})}`);
    if (colleges.length === 0) {
      console.log('   ⚠️  No colleges found in database\n');
    } else {
      colleges.forEach((college, index) => {
        console.log(`   ${index + 1}. ${college.name}`);
        console.log(`      - slug: ${college.slug || 'MISSING'}`);
        console.log(`      - published: ${college.published !== undefined ? college.published : 'UNDEFINED'}`);
        console.log(`      - isActive: ${college.isActive !== undefined ? college.isActive : 'UNDEFINED'}`);
        console.log(`      - Will appear on frontend: ${college.published === true && college.isActive === true ? '✅ YES' : '❌ NO'}`);
      });
      console.log('');
    }

    // Check Courses
    console.log('📖 COURSES:');
    console.log('================');
    const courses = await Course.find({}).select('title published isActive slug').limit(10);
    console.log(`Total count: ${await Course.countDocuments({})}`);
    if (courses.length === 0) {
      console.log('   ⚠️  No courses found in database\n');
    } else {
      courses.forEach((course, index) => {
        console.log(`   ${index + 1}. ${course.title}`);
        console.log(`      - slug: ${course.slug || 'MISSING'}`);
        console.log(`      - published: ${course.published !== undefined ? course.published : 'UNDEFINED'}`);
        console.log(`      - isActive: ${course.isActive !== undefined ? course.isActive : 'UNDEFINED'}`);
        console.log(`      - Will appear on frontend: ${course.published === true && course.isActive === true ? '✅ YES' : '❌ NO'}`);
      });
      console.log('');
    }

    // Summary
    console.log('📊 SUMMARY:');
    console.log('================');
    const publishedUniversities = await University.countDocuments({ published: true, $or: [{ isActive: true }, { isActive: { $exists: false } }] });
    const publishedColleges = await College.countDocuments({ published: true, isActive: true });
    const publishedCourses = await Course.countDocuments({ published: true, isActive: true });
    
    console.log(`Universities visible on frontend: ${publishedUniversities}`);
    console.log(`Colleges visible on frontend: ${publishedColleges}`);
    console.log(`Courses visible on frontend: ${publishedCourses}`);

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

// Run the diagnostic
checkDatabaseStatus();

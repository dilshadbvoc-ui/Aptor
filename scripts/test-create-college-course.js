/**
 * Test Script: Create Test College and Course
 * 
 * This script creates a test college and course directly in the database
 * to verify the entire flow works correctly.
 * 
 * Run with: node scripts/test-create-college-course.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

// Define schemas
const CollegeSchema = new mongoose.Schema({}, { strict: false });
const CourseSchema = new mongoose.Schema({}, { strict: false });

const College = mongoose.models.College || mongoose.model('College', CollegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);

async function testCreateCollegeAndCourse() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Create Test College
    console.log('🏛️  Creating Test College...');
    const testCollege = await College.create({
      name: 'Test Engineering College',
      slug: 'test-engineering-college',
      description: 'This is a test college created to verify the admin dashboard to frontend data flow works correctly. It should appear on the /colleges page immediately.',
      location: 'Bangalore',
      establishedYear: 2020,
      type: 'engineering',
      affiliation: 'Test University',
      website: 'https://example.com',
      published: true,
      isActive: true,
      featured: false
    });
    console.log('✅ Test College Created:');
    console.log(`   - ID: ${testCollege._id}`);
    console.log(`   - Name: ${testCollege.name}`);
    console.log(`   - Slug: ${testCollege.slug}`);
    console.log(`   - Published: ${testCollege.published}`);
    console.log(`   - IsActive: ${testCollege.isActive}`);
    console.log(`   - Will appear on frontend: ${testCollege.published && testCollege.isActive ? '✅ YES' : '❌ NO'}\n`);

    // Create Test Course
    console.log('📖 Creating Test Course...');
    const testCourse = await Course.create({
      title: 'Computer Science Engineering',
      slug: 'computer-science-engineering',
      description: 'This is a test course created to verify the admin dashboard to frontend data flow works correctly. It should appear on the /courses page immediately.',
      level: 'Undergraduate',
      mode: 'Offline',
      duration: '4 Years',
      published: true,
      isActive: true,
      featured: false
    });
    console.log('✅ Test Course Created:');
    console.log(`   - ID: ${testCourse._id}`);
    console.log(`   - Title: ${testCourse.title}`);
    console.log(`   - Slug: ${testCourse.slug}`);
    console.log(`   - Published: ${testCourse.published}`);
    console.log(`   - IsActive: ${testCourse.isActive}`);
    console.log(`   - Will appear on frontend: ${testCourse.published && testCourse.isActive ? '✅ YES' : '❌ NO'}\n`);

    // Verify they can be queried with the same filters as the public API
    console.log('🔍 Verifying Public API Filters...');
    
    const collegesFromAPI = await College.find({ 
      published: true,
      isActive: true
    });
    console.log(`   Colleges matching public API filter: ${collegesFromAPI.length}`);
    
    const coursesFromAPI = await Course.find({ 
      published: true,
      isActive: true 
    });
    console.log(`   Courses matching public API filter: ${coursesFromAPI.length}`);

    console.log('\n✅ Test completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('   1. Go to http://localhost:3000/colleges');
    console.log('   2. You should see "Test Engineering College"');
    console.log('   3. Go to http://localhost:3000/courses');
    console.log('   4. You should see "Computer Science Engineering"');
    console.log('\n   If you see them, the fix is working! 🎉');
    console.log('   If not, there may be a caching issue or the dev server needs restart.');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

// Run the test
testCreateCollegeAndCourse();

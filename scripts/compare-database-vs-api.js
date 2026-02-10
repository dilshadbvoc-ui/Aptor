/**
 * Compare Database vs API Script
 * 
 * This script compares what's in the database vs what the API returns
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define schemas
const collegeSchema = new mongoose.Schema({
  name: String,
  slug: String,
  published: Boolean,
  isActive: Boolean,
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  published: Boolean,
  isActive: Boolean,
}, { timestamps: true });

const College = mongoose.models.College || mongoose.model('College', collegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

async function compareData() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check ALL colleges in database
    console.log('📊 COLLEGES IN DATABASE');
    console.log('='.repeat(70));
    
    const allColleges = await College.find({}).sort({ name: 1 });
    console.log(`Total colleges in database: ${allColleges.length}\n`);
    
    const publishedActiveColleges = allColleges.filter(c => c.published === true && c.isActive === true);
    const notPublished = allColleges.filter(c => c.published !== true);
    const notActive = allColleges.filter(c => c.isActive !== true);
    const missingSlug = allColleges.filter(c => !c.slug || c.slug === '');
    
    console.log(`✅ Published AND Active: ${publishedActiveColleges.length}`);
    console.log(`❌ Not Published: ${notPublished.length}`);
    console.log(`❌ Not Active: ${notActive.length}`);
    console.log(`❌ Missing Slug: ${missingSlug.length}\n`);
    
    if (notPublished.length > 0) {
      console.log('Colleges NOT Published:');
      notPublished.forEach(c => {
        console.log(`  - ${c.name} (published: ${c.published}, active: ${c.isActive})`);
      });
      console.log('');
    }
    
    if (notActive.length > 0) {
      console.log('Colleges NOT Active:');
      notActive.forEach(c => {
        console.log(`  - ${c.name} (published: ${c.published}, active: ${c.isActive})`);
      });
      console.log('');
    }
    
    if (missingSlug.length > 0) {
      console.log('Colleges Missing Slug:');
      missingSlug.forEach(c => {
        console.log(`  - ${c.name} (slug: "${c.slug}")`);
      });
      console.log('');
    }

    // Simulate API query for colleges
    console.log('📊 COLLEGES API WOULD RETURN');
    console.log('='.repeat(70));
    console.log('Query: { published: true, isActive: true }');
    console.log('Limit: 200\n');
    
    const apiColleges = await College.find({ 
      published: true,
      isActive: true
    })
      .select('name slug')
      .sort({ name: 1 })
      .limit(200);
    
    console.log(`API returns: ${apiColleges.length} colleges\n`);
    
    if (apiColleges.length < publishedActiveColleges.length) {
      console.log(`⚠️  WARNING: API limit cutting off ${publishedActiveColleges.length - apiColleges.length} colleges!\n`);
    }

    // Check ALL courses in database
    console.log('📊 COURSES IN DATABASE');
    console.log('='.repeat(70));
    
    const allCourses = await Course.find({}).sort({ title: 1 });
    console.log(`Total courses in database: ${allCourses.length}\n`);
    
    const publishedActiveCourses = allCourses.filter(c => c.published === true && c.isActive === true);
    const coursesNotPublished = allCourses.filter(c => c.published !== true);
    const coursesNotActive = allCourses.filter(c => c.isActive !== true);
    const coursesMissingSlug = allCourses.filter(c => !c.slug || c.slug === '');
    
    console.log(`✅ Published AND Active: ${publishedActiveCourses.length}`);
    console.log(`❌ Not Published: ${coursesNotPublished.length}`);
    console.log(`❌ Not Active: ${coursesNotActive.length}`);
    console.log(`❌ Missing Slug: ${coursesMissingSlug.length}\n`);
    
    if (coursesNotPublished.length > 0) {
      console.log('Courses NOT Published:');
      coursesNotPublished.slice(0, 10).forEach(c => {
        console.log(`  - ${c.title} (published: ${c.published}, active: ${c.isActive})`);
      });
      if (coursesNotPublished.length > 10) {
        console.log(`  ... and ${coursesNotPublished.length - 10} more`);
      }
      console.log('');
    }
    
    if (coursesNotActive.length > 0) {
      console.log('Courses NOT Active:');
      coursesNotActive.slice(0, 10).forEach(c => {
        console.log(`  - ${c.title} (published: ${c.published}, active: ${c.isActive})`);
      });
      if (coursesNotActive.length > 10) {
        console.log(`  ... and ${coursesNotActive.length - 10} more`);
      }
      console.log('');
    }
    
    if (coursesMissingSlug.length > 0) {
      console.log('Courses Missing Slug:');
      coursesMissingSlug.slice(0, 10).forEach(c => {
        console.log(`  - ${c.title} (slug: "${c.slug}")`);
      });
      if (coursesMissingSlug.length > 10) {
        console.log(`  ... and ${coursesMissingSlug.length - 10} more`);
      }
      console.log('');
    }

    // Simulate API query for courses
    console.log('📊 COURSES API WOULD RETURN');
    console.log('='.repeat(70));
    console.log('Query: { published: true, isActive: true }');
    console.log('Limit: 200\n');
    
    const apiCourses = await Course.find({ 
      published: true,
      isActive: true 
    })
      .select('title slug')
      .sort({ createdAt: -1 })
      .limit(200);
    
    console.log(`API returns: ${apiCourses.length} courses\n`);
    
    if (apiCourses.length < publishedActiveCourses.length) {
      console.log(`⚠️  WARNING: API limit cutting off ${publishedActiveCourses.length - apiCourses.length} courses!\n`);
    }

    // SUMMARY
    console.log('📊 SUMMARY');
    console.log('='.repeat(70));
    console.log('COLLEGES:');
    console.log(`  Total in DB: ${allColleges.length}`);
    console.log(`  Should show on frontend: ${publishedActiveColleges.length}`);
    console.log(`  API will return: ${apiColleges.length}`);
    console.log(`  Hidden from frontend: ${allColleges.length - apiColleges.length}`);
    console.log('');
    console.log('COURSES:');
    console.log(`  Total in DB: ${allCourses.length}`);
    console.log(`  Should show on frontend: ${publishedActiveCourses.length}`);
    console.log(`  API will return: ${apiCourses.length}`);
    console.log(`  Hidden from frontend: ${allCourses.length - apiCourses.length}`);
    console.log('');
    
    // Recommendations
    console.log('💡 RECOMMENDATIONS');
    console.log('='.repeat(70));
    
    if (notPublished.length > 0 || coursesNotPublished.length > 0) {
      console.log('⚠️  Some items are not published. Run fix script to publish them.');
    }
    
    if (notActive.length > 0 || coursesNotActive.length > 0) {
      console.log('⚠️  Some items are not active. Run fix script to activate them.');
    }
    
    if (missingSlug.length > 0 || coursesMissingSlug.length > 0) {
      console.log('⚠️  Some items are missing slugs. They need slugs to work properly.');
    }
    
    if (publishedActiveColleges.length > apiColleges.length || publishedActiveCourses.length > apiCourses.length) {
      console.log('⚠️  API limit is cutting off items. Increase the limit in API routes.');
    }
    
    if (notPublished.length === 0 && notActive.length === 0 && 
        coursesNotPublished.length === 0 && coursesNotActive.length === 0 &&
        missingSlug.length === 0 && coursesMissingSlug.length === 0 &&
        publishedActiveColleges.length === apiColleges.length &&
        publishedActiveCourses.length === apiCourses.length) {
      console.log('✅ Everything looks good! All items should be visible on frontend.');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

compareData();

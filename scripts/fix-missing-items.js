/**
 * Fix Missing Items Script
 * 
 * This script checks for colleges and courses that are missing from the frontend
 * and fixes their published/isActive status
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define schemas
const collegeSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  establishedYear: Number,
  type: String,
  affiliation: String,
  website: String,
  images: [String],
  slug: String,
  published: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String,
  mode: String,
  duration: String,
  price: String,
  category: String,
  image: String,
  slug: String,
  published: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
}, { timestamps: true });

const College = mongoose.models.College || mongoose.model('College', collegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

async function fixMissingItems() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check colleges
    console.log('📊 CHECKING COLLEGES');
    console.log('='.repeat(50));
    
    const allColleges = await College.find({});
    console.log(`Total colleges in database: ${allColleges.length}`);
    
    const visibleColleges = await College.find({ published: true, isActive: true });
    console.log(`Visible on frontend: ${visibleColleges.length}`);
    
    const hiddenColleges = allColleges.filter(c => !c.published || !c.isActive);
    console.log(`Hidden from frontend: ${hiddenColleges.length}\n`);
    
    if (hiddenColleges.length > 0) {
      console.log('Hidden colleges:');
      hiddenColleges.forEach(college => {
        console.log(`  - ${college.name}`);
        console.log(`    Published: ${college.published}, Active: ${college.isActive}`);
      });
      
      console.log('\n🔧 Fixing hidden colleges...');
      const collegeResult = await College.updateMany(
        { $or: [{ published: { $ne: true } }, { isActive: { $ne: true } }] },
        { $set: { published: true, isActive: true } }
      );
      console.log(`✅ Updated ${collegeResult.modifiedCount} colleges\n`);
    } else {
      console.log('✅ All colleges are visible\n');
    }

    // Check courses
    console.log('📊 CHECKING COURSES');
    console.log('='.repeat(50));
    
    const allCourses = await Course.find({});
    console.log(`Total courses in database: ${allCourses.length}`);
    
    const visibleCourses = await Course.find({ published: true, isActive: true });
    console.log(`Visible on frontend: ${visibleCourses.length}`);
    
    const hiddenCourses = allCourses.filter(c => !c.published || !c.isActive);
    console.log(`Hidden from frontend: ${hiddenCourses.length}\n`);
    
    if (hiddenCourses.length > 0) {
      console.log('Hidden courses:');
      hiddenCourses.forEach(course => {
        console.log(`  - ${course.title}`);
        console.log(`    Published: ${course.published}, Active: ${course.isActive}`);
      });
      
      console.log('\n🔧 Fixing hidden courses...');
      const courseResult = await Course.updateMany(
        { $or: [{ published: { $ne: true } }, { isActive: { $ne: true } }] },
        { $set: { published: true, isActive: true } }
      );
      console.log(`✅ Updated ${courseResult.modifiedCount} courses\n`);
    } else {
      console.log('✅ All courses are visible\n');
    }

    // Final summary
    console.log('📊 FINAL STATUS');
    console.log('='.repeat(50));
    const finalColleges = await College.find({ published: true, isActive: true });
    const finalCourses = await Course.find({ published: true, isActive: true });
    console.log(`Colleges visible on frontend: ${finalColleges.length}`);
    console.log(`Courses visible on frontend: ${finalCourses.length}`);
    
    console.log('\n✅ All done! Check your frontend now.');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

fixMissingItems();

/**
 * Check Images Script
 * 
 * This script checks which colleges and courses have images in the database
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define schemas
const collegeSchema = new mongoose.Schema({
  name: String,
  images: [String],
  published: Boolean,
  isActive: Boolean,
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  title: String,
  image: String,
  published: Boolean,
  isActive: Boolean,
}, { timestamps: true });

const College = mongoose.models.College || mongoose.model('College', collegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

async function checkImages() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check colleges
    console.log('📊 CHECKING COLLEGE IMAGES');
    console.log('='.repeat(60));
    
    const allColleges = await College.find({ published: true, isActive: true });
    const collegesWithImages = allColleges.filter(c => c.images && c.images.length > 0 && c.images[0]);
    const collegesWithoutImages = allColleges.filter(c => !c.images || c.images.length === 0 || !c.images[0]);
    
    console.log(`Total colleges: ${allColleges.length}`);
    console.log(`With images: ${collegesWithImages.length}`);
    console.log(`Without images: ${collegesWithoutImages.length}\n`);
    
    if (collegesWithImages.length > 0) {
      console.log('Colleges WITH images:');
      collegesWithImages.forEach(c => {
        console.log(`  ✅ ${c.name}`);
        console.log(`     Image URL: ${c.images[0]}`);
      });
      console.log('');
    }
    
    if (collegesWithoutImages.length > 0) {
      console.log('Colleges WITHOUT images (showing emoji fallback):');
      collegesWithoutImages.slice(0, 10).forEach(c => {
        console.log(`  ❌ ${c.name}`);
      });
      if (collegesWithoutImages.length > 10) {
        console.log(`  ... and ${collegesWithoutImages.length - 10} more`);
      }
      console.log('');
    }

    // Check courses
    console.log('📊 CHECKING COURSE IMAGES');
    console.log('='.repeat(60));
    
    const allCourses = await Course.find({ published: true, isActive: true });
    const coursesWithImages = allCourses.filter(c => c.image && c.image.trim() !== '');
    const coursesWithoutImages = allCourses.filter(c => !c.image || c.image.trim() === '');
    
    console.log(`Total courses: ${allCourses.length}`);
    console.log(`With images: ${coursesWithImages.length}`);
    console.log(`Without images: ${coursesWithoutImages.length}\n`);
    
    if (coursesWithImages.length > 0) {
      console.log('Courses WITH images:');
      coursesWithImages.forEach(c => {
        console.log(`  ✅ ${c.title}`);
        console.log(`     Image URL: ${c.image}`);
      });
      console.log('');
    }
    
    if (coursesWithoutImages.length > 0) {
      console.log('Courses WITHOUT images (showing emoji fallback):');
      coursesWithoutImages.slice(0, 10).forEach(c => {
        console.log(`  ❌ ${c.title}`);
      });
      if (coursesWithoutImages.length > 10) {
        console.log(`  ... and ${coursesWithoutImages.length - 10} more`);
      }
      console.log('');
    }

    // Summary
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Colleges with images: ${collegesWithImages.length}/${allColleges.length}`);
    console.log(`Courses with images: ${coursesWithImages.length}/${allCourses.length}`);
    console.log('');
    
    if (collegesWithImages.length === 0 && coursesWithImages.length === 0) {
      console.log('⚠️  NO IMAGES FOUND IN DATABASE');
      console.log('');
      console.log('To add images:');
      console.log('1. Go to /admin/colleges or /admin/courses');
      console.log('2. Edit an item');
      console.log('3. Add an image URL in the "Image URL" field');
      console.log('4. Save the item');
      console.log('');
      console.log('Example image URLs you can use:');
      console.log('  - https://picsum.photos/400/300');
      console.log('  - https://source.unsplash.com/400x300/?college');
      console.log('  - https://source.unsplash.com/400x300/?education');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

checkImages();

/**
 * Add Sample Images Script
 * 
 * This script adds sample image URLs to the first 5 colleges and 5 courses
 * so you can test the image display functionality
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

// Sample image URLs from free services
const collegeImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&h=300&fit=crop',
];

const courseImages = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
];

async function addSampleImages() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Add images to first 5 colleges
    console.log('📸 ADDING SAMPLE IMAGES TO COLLEGES');
    console.log('='.repeat(60));
    
    const colleges = await College.find({ 
      published: true, 
      isActive: true,
      $or: [
        { images: { $exists: false } },
        { images: { $size: 0 } },
        { images: [null] },
        { images: [''] }
      ]
    }).limit(5);
    
    console.log(`Found ${colleges.length} colleges without images\n`);
    
    for (let i = 0; i < colleges.length; i++) {
      const college = colleges[i];
      const imageUrl = collegeImages[i % collegeImages.length];
      
      await College.updateOne(
        { _id: college._id },
        { $set: { images: [imageUrl] } }
      );
      
      console.log(`✅ ${college.name}`);
      console.log(`   Added: ${imageUrl}\n`);
    }

    // Add images to first 5 courses
    console.log('📸 ADDING SAMPLE IMAGES TO COURSES');
    console.log('='.repeat(60));
    
    const courses = await Course.find({ 
      published: true, 
      isActive: true,
      $or: [
        { image: { $exists: false } },
        { image: null },
        { image: '' }
      ]
    }).limit(5);
    
    console.log(`Found ${courses.length} courses without images\n`);
    
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const imageUrl = courseImages[i % courseImages.length];
      
      await Course.updateOne(
        { _id: course._id },
        { $set: { image: imageUrl } }
      );
      
      console.log(`✅ ${course.title}`);
      console.log(`   Added: ${imageUrl}\n`);
    }

    // Summary
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Added images to ${colleges.length} colleges`);
    console.log(`✅ Added images to ${courses.length} courses`);
    console.log('');
    console.log('🎉 Sample images added successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Visit /colleges or /courses on your frontend');
    console.log('2. You should now see images for the first few items');
    console.log('3. To add images to more items, use the admin dashboard');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

addSampleImages();

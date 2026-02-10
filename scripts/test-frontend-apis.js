/**
 * Test Frontend APIs
 * 
 * This script tests the public API endpoints to see what data they return
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
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  slug: String,
  published: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
}, { timestamps: true });

const College = mongoose.models.College || mongoose.model('College', collegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

async function testAPIs() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Test colleges API query
    console.log('📊 TESTING COLLEGES API QUERY');
    console.log('='.repeat(50));
    console.log('Query: { published: true, isActive: true }');
    console.log('Select: name description location establishedYear type affiliation website images slug\n');
    
    const colleges = await College.find({ 
      published: true,
      isActive: true
    })
      .select('name description location establishedYear type affiliation website images slug')
      .sort({ name: 1 })
      .limit(50);
    
    console.log(`Found ${colleges.length} colleges`);
    if (colleges.length > 0) {
      console.log('\nFirst 5 colleges:');
      colleges.slice(0, 5).forEach((college, i) => {
        console.log(`  ${i + 1}. ${college.name}`);
        console.log(`     Location: ${college.location}`);
        console.log(`     Images: ${college.images?.length || 0} image(s)`);
        console.log(`     Slug: ${college.slug}`);
      });
    }

    // Test courses API query
    console.log('\n📊 TESTING COURSES API QUERY');
    console.log('='.repeat(50));
    console.log('Query: { published: true, isActive: true }');
    console.log('Select: title description level duration fees image college slug\n');
    
    const courses = await Course.find({ 
      published: true,
      isActive: true 
    })
      .select('title description level duration fees image college slug')
      .populate('college', 'name location')
      .sort({ createdAt: -1 })
      .limit(50);
    
    console.log(`Found ${courses.length} courses`);
    if (courses.length > 0) {
      console.log('\nFirst 5 courses:');
      courses.slice(0, 5).forEach((course, i) => {
        console.log(`  ${i + 1}. ${course.title}`);
        console.log(`     Level: ${course.level}`);
        console.log(`     Duration: ${course.duration}`);
        console.log(`     Image: ${course.image ? 'Yes' : 'No'}`);
        console.log(`     College: ${course.college?.name || 'None'}`);
        console.log(`     Slug: ${course.slug}`);
      });
    }

    // Check for items without slugs
    console.log('\n📊 CHECKING FOR MISSING SLUGS');
    console.log('='.repeat(50));
    
    const collegesWithoutSlug = await College.find({ 
      published: true,
      isActive: true,
      $or: [{ slug: { $exists: false } }, { slug: null }, { slug: '' }]
    });
    console.log(`Colleges without slug: ${collegesWithoutSlug.length}`);
    if (collegesWithoutSlug.length > 0) {
      collegesWithoutSlug.forEach(c => console.log(`  - ${c.name}`));
    }
    
    const coursesWithoutSlug = await Course.find({ 
      published: true,
      isActive: true,
      $or: [{ slug: { $exists: false } }, { slug: null }, { slug: '' }]
    });
    console.log(`Courses without slug: ${coursesWithoutSlug.length}`);
    if (coursesWithoutSlug.length > 0) {
      coursesWithoutSlug.forEach(c => console.log(`  - ${c.title}`));
    }

    console.log('\n✅ API test complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

testAPIs();

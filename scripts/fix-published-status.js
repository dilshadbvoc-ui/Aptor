/**
 * Migration Script: Fix Published Status
 * 
 * This script updates all existing colleges, courses, universities, events, 
 * internships, and blogs to ensure they have the published field set to true
 * if they are currently active.
 * 
 * Run with: node scripts/fix-published-status.js
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
const EventSchema = new mongoose.Schema({}, { strict: false });
const InternshipSchema = new mongoose.Schema({}, { strict: false });
const BlogSchema = new mongoose.Schema({}, { strict: false });

const University = mongoose.models.University || mongoose.model('University', UniversitySchema);
const College = mongoose.models.College || mongoose.model('College', CollegeSchema);
const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
const Internship = mongoose.models.Internship || mongoose.model('Internship', InternshipSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

async function fixPublishedStatus() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Fix Universities
    console.log('📚 Fixing Universities...');
    const universitiesResult = await University.updateMany(
      { published: { $ne: true } },
      { $set: { published: true } }
    );
    console.log(`   Updated ${universitiesResult.modifiedCount} universities`);

    // Fix Colleges
    console.log('🏛️  Fixing Colleges...');
    const collegesResult = await College.updateMany(
      { published: { $ne: true } },
      { $set: { published: true } }
    );
    console.log(`   Updated ${collegesResult.modifiedCount} colleges`);

    // Fix Courses
    console.log('📖 Fixing Courses...');
    const coursesResult = await Course.updateMany(
      { published: { $ne: true } },
      { $set: { published: true } }
    );
    console.log(`   Updated ${coursesResult.modifiedCount} courses`);

    // Fix Events
    console.log('📅 Fixing Events...');
    const eventsResult = await Event.updateMany(
      { published: { $ne: true } },
      { $set: { published: true } }
    );
    console.log(`   Updated ${eventsResult.modifiedCount} events`);

    // Fix Internships
    console.log('💼 Fixing Internships...');
    const internshipsResult = await Internship.updateMany(
      { published: { $ne: true } },
      { $set: { published: true } }
    );
    console.log(`   Updated ${internshipsResult.modifiedCount} internships`);

    // Fix Blogs (already have published field, but ensure consistency)
    console.log('📝 Checking Blogs...');
    const blogsResult = await Blog.updateMany(
      { published: { $exists: false } },
      { $set: { published: false } }
    );
    console.log(`   Updated ${blogsResult.modifiedCount} blogs`);

    console.log('\n✅ Migration completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Universities: ${universitiesResult.modifiedCount} updated`);
    console.log(`   Colleges: ${collegesResult.modifiedCount} updated`);
    console.log(`   Courses: ${coursesResult.modifiedCount} updated`);
    console.log(`   Events: ${eventsResult.modifiedCount} updated`);
    console.log(`   Internships: ${internshipsResult.modifiedCount} updated`);
    console.log(`   Blogs: ${blogsResult.modifiedCount} updated`);

  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

// Run the migration
fixPublishedStatus();

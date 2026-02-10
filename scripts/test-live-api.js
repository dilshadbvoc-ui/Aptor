/**
 * Test Live API
 * 
 * This script tests what the actual API endpoints return
 * Run this to see if the API is working correctly
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import the actual models
const connectDB = require('../src/lib/db.ts');
const College = require('../src/models/College.ts');
const Course = require('../src/models/Course.ts');

async function testLiveAPI() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await connectDB.default();
    console.log('✅ Connected to MongoDB\n');

    // Test colleges API endpoint logic
    console.log('📊 TESTING /api/colleges ENDPOINT LOGIC');
    console.log('='.repeat(70));
    
    const colleges = await College.default.find({ 
      published: true,
      isActive: true
    })
      .select('name description location establishedYear type affiliation website images slug')
      .sort({ name: 1 })
      .limit(200);
    
    console.log(`Query returned: ${colleges.length} colleges`);
    console.log('\nFirst 10 colleges:');
    colleges.slice(0, 10).forEach((c, i) => {
      console.log(`  ${i + 1}. ${c.name}`);
    });
    if (colleges.length > 10) {
      console.log(`  ... and ${colleges.length - 10} more`);
    }
    console.log('');

    // Test courses API endpoint logic
    console.log('📊 TESTING /api/courses ENDPOINT LOGIC');
    console.log('='.repeat(70));
    
    const courses = await Course.default.find({ 
      published: true,
      isActive: true 
    })
      .select('title description level duration fees image college slug')
      .populate('college', 'name location')
      .sort({ createdAt: -1 })
      .limit(200);
    
    console.log(`Query returned: ${courses.length} courses`);
    console.log('\nFirst 10 courses:');
    courses.slice(0, 10).forEach((c, i) => {
      console.log(`  ${i + 1}. ${c.title}`);
    });
    if (courses.length > 10) {
      console.log(`  ... and ${courses.length - 10} more`);
    }
    console.log('');

    // Summary
    console.log('📊 SUMMARY');
    console.log('='.repeat(70));
    console.log(`✅ Colleges API should return: ${colleges.length} items`);
    console.log(`✅ Courses API should return: ${courses.length} items`);
    console.log('');
    console.log('If frontend shows fewer items:');
    console.log('  1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)');
    console.log('  2. Wait for Vercel deployment to complete');
    console.log('  3. Check browser console for API errors');
    console.log('  4. Try incognito/private browsing mode');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

testLiveAPI();

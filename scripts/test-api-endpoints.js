/**
 * Test Script: Test API Endpoints
 * 
 * This script tests the public API endpoints to verify they return the correct data.
 * 
 * Run with: node scripts/test-api-endpoints.js
 * Make sure your dev server is running on http://localhost:3000
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';

function testEndpoint(path) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${path}`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, data: json });
        } catch (error) {
          resolve({ status: res.statusCode, data: data, error: 'Failed to parse JSON' });
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function testAPIs() {
  console.log('🧪 Testing Public API Endpoints...\n');
  console.log('⚠️  Make sure your dev server is running on http://localhost:3000\n');

  try {
    // Test Colleges API
    console.log('🏛️  Testing /api/colleges...');
    const collegesResponse = await testEndpoint('/api/colleges');
    console.log(`   Status: ${collegesResponse.status}`);
    if (collegesResponse.data.colleges) {
      console.log(`   Colleges found: ${collegesResponse.data.colleges.length}`);
      collegesResponse.data.colleges.forEach((college, index) => {
        console.log(`   ${index + 1}. ${college.name} (published: ${college.published}, isActive: ${college.isActive})`);
      });
    } else {
      console.log(`   ❌ No colleges in response`);
      console.log(`   Response:`, collegesResponse.data);
    }
    console.log('');

    // Test Courses API
    console.log('📖 Testing /api/courses...');
    const coursesResponse = await testEndpoint('/api/courses');
    console.log(`   Status: ${coursesResponse.status}`);
    if (coursesResponse.data.courses) {
      console.log(`   Courses found: ${coursesResponse.data.courses.length}`);
      coursesResponse.data.courses.forEach((course, index) => {
        console.log(`   ${index + 1}. ${course.title} (published: ${course.published}, isActive: ${course.isActive})`);
      });
    } else {
      console.log(`   ❌ No courses in response`);
      console.log(`   Response:`, coursesResponse.data);
    }
    console.log('');

    // Test Universities API
    console.log('📚 Testing /api/universities...');
    const universitiesResponse = await testEndpoint('/api/universities');
    console.log(`   Status: ${universitiesResponse.status}`);
    if (universitiesResponse.data.universities) {
      console.log(`   Universities found: ${universitiesResponse.data.universities.length}`);
      universitiesResponse.data.universities.forEach((uni, index) => {
        console.log(`   ${index + 1}. ${uni.name} (published: ${uni.published}, isActive: ${uni.isActive})`);
      });
    } else {
      console.log(`   ❌ No universities in response`);
      console.log(`   Response:`, universitiesResponse.data);
    }
    console.log('');

    console.log('✅ API Testing Complete!');
    console.log('\n📋 Summary:');
    console.log(`   - Colleges API returned: ${collegesResponse.data.colleges?.length || 0} colleges`);
    console.log(`   - Courses API returned: ${coursesResponse.data.courses?.length || 0} courses`);
    console.log(`   - Universities API returned: ${universitiesResponse.data.universities?.length || 0} universities`);

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.error('\n❌ Error: Could not connect to http://localhost:3000');
      console.error('   Make sure your dev server is running with: npm run dev');
    } else {
      console.error('\n❌ Error:', error.message);
    }
  }
}

// Run the tests
testAPIs();

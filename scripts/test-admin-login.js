const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  isActive: Boolean,
  lastLogin: Date
}, { timestamps: true });

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function testAdminLogin() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check if admin user exists
    console.log('👤 Checking for admin user...');
    const adminUser = await User.findOne({ email: 'info@aptorstudies.com' });

    if (!adminUser) {
      console.log('❌ Admin user not found!');
      console.log('\n📝 Creating admin user...');
      
      const password = process.env.ADMIN_PASSWORD || 'SecureAdmin123!';
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const newAdmin = new User({
        name: 'Admin User',
        email: 'info@aptorstudies.com',
        password: hashedPassword,
        role: 'admin',
        isActive: true
      });
      
      await newAdmin.save();
      console.log('✅ Admin user created successfully!');
      console.log('\n📧 Email: info@aptorstudies.com');
      console.log('🔑 Password:', password);
    } else {
      console.log('✅ Admin user found!');
      console.log('\n📊 Admin User Details:');
      console.log('   Name:', adminUser.name);
      console.log('   Email:', adminUser.email);
      console.log('   Role:', adminUser.role);
      console.log('   Active:', adminUser.isActive);
      console.log('   Created:', adminUser.createdAt);
      console.log('   Last Login:', adminUser.lastLogin || 'Never');

      // Test password
      console.log('\n🔐 Testing password...');
      const testPassword = process.env.ADMIN_PASSWORD || 'SecureAdmin123!';
      const isValid = await adminUser.comparePassword(testPassword);
      
      if (isValid) {
        console.log('✅ Password is correct!');
        console.log('\n📧 Login Credentials:');
        console.log('   Email: info@aptorstudies.com');
        console.log('   Password:', testPassword);
      } else {
        console.log('❌ Password is incorrect!');
        console.log('\n🔧 Resetting password...');
        
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(testPassword, salt);
        
        await User.updateOne(
          { email: 'info@aptorstudies.com' },
          { password: hashedPassword }
        );
        
        console.log('✅ Password reset successfully!');
        console.log('\n📧 New Login Credentials:');
        console.log('   Email: info@aptorstudies.com');
        console.log('   Password:', testPassword);
      }
    }

    console.log('\n🔌 Disconnecting from MongoDB...');
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

testAdminLogin();

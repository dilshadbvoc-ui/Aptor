import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ["admin", "editor", "viewer"],
    default: "viewer"
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, {
  timestamps: true
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.resetPasswordToken;
  delete userObject.resetPasswordExpires;
  return userObject;
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
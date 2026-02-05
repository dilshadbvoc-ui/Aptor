import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'advertisement', 'other'],
    default: 'website'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new'
  },
  interest: {
    type: String,
    trim: true
  },
  currentEducation: {
    type: String,
    trim: true
  },
  preferredCountry: {
    type: String,
    trim: true
  },
  preferredCourse: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  notes: {
    type: String
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { 
  timestamps: true 
});

// Index for better query performance
ApplicationSchema.index({ email: 1 });
ApplicationSchema.index({ status: 1 });
ApplicationSchema.index({ createdAt: -1 });
ApplicationSchema.index({ source: 1 });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
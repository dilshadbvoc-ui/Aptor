import mongoose from 'mongoose';

const ScholarshipApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  fatherName: {
    type: String,
    required: true,
    trim: true
  },
  motherName: {
    type: String,
    required: true,
    trim: true
  },
  schoolName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  pin: {
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
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  landPhone: {
    type: String,
    trim: true
  },
  coursePreferred: {
    type: [String],
    required: true,
    enum: ['MBBS', 'BDS', 'ENGG', 'PharmD', 'Nursing', 'Paramedical', 'Others']
  },
  otherCourse: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'under_review', 'approved', 'rejected', 'contacted'],
    default: 'new'
  },
  notes: {
    type: String
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviewedAt: {
    type: Date
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { 
  timestamps: true 
});

// Index for better query performance
ScholarshipApplicationSchema.index({ email: 1 });
ScholarshipApplicationSchema.index({ status: 1 });
ScholarshipApplicationSchema.index({ createdAt: -1 });
ScholarshipApplicationSchema.index({ mobile: 1 });

export default mongoose.models.ScholarshipApplication || mongoose.model('ScholarshipApplication', ScholarshipApplicationSchema);
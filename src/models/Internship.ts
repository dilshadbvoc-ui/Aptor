import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["remote", "onsite", "hybrid"],
    required: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  stipend: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String,
    trim: true
  }],
  applicationDeadline: {
    type: Date,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  applicationUrl: {
    type: String,
    trim: true
  },
  contactEmail: {
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  slug: {
    type: String,
    unique: true,
    trim: true
  },
  seo: {
    title: String,
    description: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

export default mongoose.models.Internship || mongoose.model("Internship", InternshipSchema);
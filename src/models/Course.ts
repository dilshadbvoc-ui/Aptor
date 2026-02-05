import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ["Undergraduate", "Postgraduate", "Diploma", "Certificate"],
    required: true
  },
  mode: {
    type: String,
    enum: ["Offline", "Online", "Hybrid"],
    default: "Offline"
  },
  duration: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College'
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University'
  },
  price: {
    type: String,
    trim: true
  },
  fees: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  curriculum: [{
    type: String,
    trim: true
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
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
  seo: {
    title: String,
    description: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

// Index for better query performance (slug index is automatic from unique: true)
CourseSchema.index({ level: 1, isActive: 1, published: 1 });
CourseSchema.index({ featured: 1, isActive: 1, published: 1 });
CourseSchema.index({ college: 1 });
CourseSchema.index({ university: 1 });

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);

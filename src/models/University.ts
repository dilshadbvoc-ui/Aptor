import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  name: { 
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
  location: { 
    type: String, 
    required: true,
    trim: true
  },
  country: { 
    type: String, 
    required: true,
    trim: true
  },
  foundedYear: { 
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  establishedYear: { 
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  tuitionFee: {
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    enum: ["public", "private"],
    required: true
  },
  ranking: {
    type: Number,
    min: 1
  },
  website: { 
    type: String,
    trim: true
  },
  images: [{ 
    type: String,
    trim: true
  }],
  features: [{ 
    type: String,
    trim: true
  }],
  courses: [{ 
    type: String,
    trim: true
  }],
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
UniversitySchema.index({ country: 1, isActive: 1 });
UniversitySchema.index({ featured: 1, isActive: 1 });
UniversitySchema.index({ ranking: 1 });

export default mongoose.models.University || mongoose.model("University", UniversitySchema);

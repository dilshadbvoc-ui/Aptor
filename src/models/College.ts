import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
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
  establishedYear: { 
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  type: {
    type: String,
    enum: ["engineering", "medical", "arts", "science", "commerce", "law", "other"],
    required: true
  },
  affiliation: { 
    type: String,
    trim: true
  },
  website: { 
    type: String,
    trim: true
  },
  images: [{ 
    type: String,
    trim: true
  }],
  courses: [{ 
    type: String,
    trim: true
  }],
  facilities: [{ 
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
  ranking: {
    type: Number,
    default: 0
  },
  country: {
    type: String,
    trim: true,
    default: "India"
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

// Index for better query performance
CollegeSchema.index({ slug: 1 });
CollegeSchema.index({ type: 1, isActive: 1 });
CollegeSchema.index({ featured: 1, isActive: 1 });
CollegeSchema.index({ location: 1 });

export default mongoose.models.College || mongoose.model("College", CollegeSchema);

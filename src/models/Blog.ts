import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
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
  excerpt: { 
    type: String, 
    required: true,
    trim: true
  },
  content: { 
    type: String, 
    required: true 
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  authorName: {
    type: String,
    default: "Edubird Team"
  },
  tags: [{ 
    type: String,
    trim: true
  }],
  image: { 
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  publishedAt: { 
    type: Date,
    default: null
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
BlogSchema.index({ slug: 1 });
BlogSchema.index({ published: 1, publishedAt: -1 });
BlogSchema.index({ featured: 1, published: 1 });
BlogSchema.index({ tags: 1 });

// Auto-set publishedAt when published is set to true
BlogSchema.pre('save', function() {
  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

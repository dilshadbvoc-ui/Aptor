import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
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
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  },
  location: { 
    type: String, 
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["workshop", "seminar", "webinar", "conference", "fair", "other"],
    required: true
  },
  capacity: {
    type: Number,
    min: 1
  },
  registrationDeadline: {
    type: Date
  },
  fee: {
    type: String,
    trim: true
  },
  organizer: { 
    type: String,
    trim: true
  },
  image: { 
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
  date: { 
    type: Date, 
    required: true,
    default: function() { return this.startDate; }
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
EventSchema.index({ startDate: 1, isActive: 1 });
EventSchema.index({ slug: 1 });
EventSchema.index({ featured: 1, isActive: 1 });

export default mongoose.models.Event || mongoose.model("Event", EventSchema);

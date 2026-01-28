import mongoose from "mongoose";

const SeoSettingsSchema = new mongoose.Schema({
  // Global SEO Settings
  siteName: {
    type: String,
    default: "Aptor Studies"
  },
  siteDescription: {
    type: String,
    default: "Premier education portal providing university guidance, course information, and student services"
  },
  siteKeywords: {
    type: [String],
    default: ["education portal", "universities", "colleges", "courses", "student counseling"]
  },
  siteUrl: {
    type: String,
    default: "https://aptorstudies.com"
  },
  
  // Meta Tags
  defaultTitle: {
    type: String,
    default: "Aptor Studies - Premier Education Portal"
  },
  titleTemplate: {
    type: String,
    default: "%s | Aptor Studies"
  },
  
  // Open Graph Settings
  ogImage: {
    type: String,
    default: "/logo.png"
  },
  ogImageWidth: {
    type: Number,
    default: 1200
  },
  ogImageHeight: {
    type: Number,
    default: 630
  },
  
  // Twitter Settings
  twitterHandle: {
    type: String,
    default: "@aptorstudies"
  },
  twitterCard: {
    type: String,
    default: "summary_large_image"
  },
  
  // Contact Information
  contactEmail: {
    type: String,
    default: "info@aptorstudies.com"
  },
  contactPhone: {
    type: String,
    default: "+91-80-1234-5678"
  },
  address: {
    locality: { type: String, default: "Bengaluru" },
    region: { type: String, default: "Karnataka" },
    country: { type: String, default: "IN" }
  },
  
  // Social Media Links
  socialMedia: {
    facebook: { type: String, default: "https://facebook.com/aptorstudies" },
    twitter: { type: String, default: "https://twitter.com/aptorstudies" },
    linkedin: { type: String, default: "https://linkedin.com/company/aptorstudies" },
    instagram: { type: String, default: "https://instagram.com/aptorstudies" },
    youtube: { type: String, default: "https://youtube.com/@aptorstudies" }
  },
  
  // Analytics & Verification
  googleAnalyticsId: { type: String, default: "" },
  googleSiteVerification: { type: String, default: "" },
  facebookPixelId: { type: String, default: "" },
  yandexVerification: { type: String, default: "" },
  yahooVerification: { type: String, default: "" },
  
  // Robots & Crawling
  robotsSettings: {
    index: { type: Boolean, default: true },
    follow: { type: Boolean, default: true },
    maxImagePreview: { type: String, default: "large" },
    maxVideoPreview: { type: Number, default: -1 },
    maxSnippet: { type: Number, default: -1 }
  },
  
  // Custom Meta Tags
  customMetaTags: [{
    name: String,
    content: String,
    property: String // for og: tags
  }],
  
  // Schema.org Settings
  organizationSchema: {
    enabled: { type: Boolean, default: true },
    name: { type: String, default: "Aptor Studies" },
    description: { type: String, default: "Premier education portal providing university guidance" },
    logo: { type: String, default: "/logo.png" }
  },
  
  // Sitemap Settings
  sitemapSettings: {
    enabled: { type: Boolean, default: true },
    changeFreq: {
      homepage: { type: String, default: "daily" },
      universities: { type: String, default: "weekly" },
      blogs: { type: String, default: "daily" },
      static: { type: String, default: "monthly" }
    },
    priority: {
      homepage: { type: Number, default: 1.0 },
      universities: { type: Number, default: 0.9 },
      blogs: { type: Number, default: 0.8 },
      static: { type: Number, default: 0.5 }
    }
  },
  
  // Page-specific SEO overrides
  pageOverrides: [{
    path: String,
    title: String,
    description: String,
    keywords: [String],
    ogImage: String,
    noIndex: { type: Boolean, default: false },
    noFollow: { type: Boolean, default: false }
  }],
  
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // This automatically handles createdAt and updatedAt
});

export default mongoose.models.SeoSettings || mongoose.model("SeoSettings", SeoSettingsSchema);
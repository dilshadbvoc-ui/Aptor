import connectDB from "@/lib/db";
import SeoSettings from "@/models/SeoSettings";

let cachedSettings: any = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getSeoSettings() {
  // Return cached settings if still valid
  if (cachedSettings && Date.now() - cacheTime < CACHE_DURATION) {
    return cachedSettings;
  }

  try {
    await connectDB();
    
    let settings = await SeoSettings.findOne().lean();
    
    // Create default settings if none exist
    if (!settings) {
      const defaultSettings = new SeoSettings();
      await defaultSettings.save();
      settings = defaultSettings.toObject();
    }

    // Cache the settings
    cachedSettings = settings;
    cacheTime = Date.now();
    
    return settings;
  } catch (error) {
    console.error("Error fetching SEO settings:", error);
    
    // Return default settings if database fails
    const defaultSettings = {
      siteName: "Aptor Studies",
      siteDescription: "Premier education portal providing university guidance, course information, and student services",
      siteKeywords: ["education portal", "universities", "colleges", "courses", "student counseling"],
      siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://aptorstudies.com",
      defaultTitle: "Aptor Studies - Premier Education Portal",
      titleTemplate: "%s | Aptor Studies",
      ogImage: "/logo.png",
      twitterHandle: "@aptorstudies",
      contactEmail: "info@aptorstudies.com",
      contactPhone: "+91 95267 97987",
      address: {
        locality: "Calicut",
        region: "Kerala",
        country: "IN"
      },
      socialMedia: {
        facebook: "https://facebook.com/aptorstudies",
        twitter: "https://twitter.com/aptorstudies",
        linkedin: "https://linkedin.com/company/aptorstudies"
      },
      robotsSettings: {
        index: true,
        follow: true,
        maxImagePreview: "large",
        maxVideoPreview: -1,
        maxSnippet: -1
      },
      organizationSchema: {
        enabled: true,
        name: "Aptor Studies",
        description: "Premier education portal providing university guidance",
        logo: "/logo.png"
      },
      pageOverrides: [],
      customMetaTags: []
    };
    
    // Cache the default settings
    cachedSettings = defaultSettings;
    cacheTime = Date.now();
    
    return defaultSettings;
  }
}

export function clearSeoCache() {
  cachedSettings = null;
  cacheTime = 0;
}

export function generatePageMetadata(pageData: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}, seoSettings: any) {
  // Ensure seoSettings has default values
  const settings = {
    siteName: "Aptor Studies",
    siteDescription: "Premier education portal providing university guidance",
    siteKeywords: ["education portal", "universities", "colleges"],
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://aptorstudies.com",
    defaultTitle: "Aptor Studies - Premier Education Portal",
    titleTemplate: "%s | Aptor Studies",
    ogImage: "/logo.png",
    twitterHandle: "@aptorstudies",
    robotsSettings: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxVideoPreview: -1,
      maxSnippet: -1
    },
    pageOverrides: [],
    customMetaTags: [],
    ...seoSettings
  };

  // Check for page-specific overrides
  const override = settings.pageOverrides?.find((p: any) => p.path === pageData.path);
  
  const title = override?.title || pageData.title || settings.defaultTitle;
  const description = override?.description || pageData.description || settings.siteDescription;
  const keywords = override?.keywords || pageData.keywords || settings.siteKeywords;
  const ogImage = override?.ogImage || pageData.ogImage || settings.ogImage;
  
  const metadata: any = {
    title: pageData.title ? settings.titleTemplate.replace('%s', pageData.title) : settings.defaultTitle,
    description,
    keywords: Array.isArray(keywords) ? keywords : [keywords].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "website",
      url: `${settings.siteUrl}${pageData.path || ''}`,
      siteName: settings.siteName,
      images: [
        {
          url: ogImage && ogImage.startsWith('http') ? ogImage : `${settings.siteUrl}${ogImage || '/logo.png'}`,
          width: settings.ogImageWidth || 1200,
          height: settings.ogImageHeight || 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: settings.twitterCard || "summary_large_image",
      title,
      description,
      images: [ogImage && ogImage.startsWith('http') ? ogImage : `${settings.siteUrl}${ogImage || '/logo.png'}`],
      creator: settings.twitterHandle,
    },
    robots: {
      index: override?.noIndex ? false : settings.robotsSettings?.index !== false,
      follow: override?.noFollow ? false : settings.robotsSettings?.follow !== false,
      googleBot: {
        index: override?.noIndex ? false : settings.robotsSettings?.index !== false,
        follow: override?.noFollow ? false : settings.robotsSettings?.follow !== false,
        'max-video-preview': settings.robotsSettings?.maxVideoPreview || -1,
        'max-image-preview': settings.robotsSettings?.maxImagePreview || 'large',
        'max-snippet': settings.robotsSettings?.maxSnippet || -1,
      },
    },
    alternates: {
      canonical: `${settings.siteUrl}${pageData.path || ''}`,
    },
  };

  // Add verification codes if available
  if (settings.googleSiteVerification || settings.yandexVerification || settings.yahooVerification) {
    metadata.verification = {};
    if (settings.googleSiteVerification) metadata.verification.google = settings.googleSiteVerification;
    if (settings.yandexVerification) metadata.verification.yandex = settings.yandexVerification;
    if (settings.yahooVerification) metadata.verification.yahoo = settings.yahooVerification;
  }

  // Add custom meta tags
  if (settings.customMetaTags?.length > 0) {
    metadata.other = {};
    settings.customMetaTags.forEach((tag: any) => {
      if (tag.name && tag.content) {
        metadata.other[tag.name] = tag.content;
      }
    });
  }

  return metadata;
}
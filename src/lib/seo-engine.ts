/**
 * Search Engine Optimization (SEO) Engine for Aptor Studies
 * Provides canonical URL generation, route metadata dictionaries, and Schema.org
 * search rich snippet graphs for traditional search engines (Google, Bing, Yahoo, Yandex, DuckDuckGo).
 */

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';

export interface RouteSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogType?: string;
  ogImage?: string;
}

export const SITE_ROUTES_SEO: Record<string, RouteSeoConfig> = {
  home: {
    title: "Aptor Studies - Premier Education Portal & University Guidance",
    description: "Experience premier education services with Aptor Studies. Get expert career guidance, explore top colleges, universities, and courses in Bengaluru, Kerala, and worldwide.",
    keywords: ["education portal", "universities", "colleges", "courses", "student counseling", "education consultancy", "bengaluru colleges", "kerala education"],
    canonicalPath: "/",
    ogType: "website"
  },
  about: {
    title: "About Aptor Studies - Premier Education Consultancy & Leadership",
    description: "Learn about Aptor Studies (Connected Management Solution). 25+ years of excellence, 50k+ students guided, led by Managing Director Jamsheer Backer and Chairman Adv. Arif Wafy.",
    keywords: ["about aptor studies", "education consultancy kerala", "jamsheer backer", "arif wafy", "connected management solution", "vadakara education"],
    canonicalPath: "/about",
    ogType: "article"
  },
  colleges: {
    title: "Top Colleges in Bengaluru & Kerala - Admissions Guidance | Aptor Studies",
    description: "Explore accredited engineering, medical, management, arts, science, commerce, and law colleges in Bengaluru and Kerala. Start your admission application with Aptor Studies.",
    keywords: ["colleges in bengaluru", "kerala colleges", "engineering admissions", "medical colleges bengaluru", "bba colleges", "bca colleges"],
    canonicalPath: "/colleges",
    ogType: "website"
  },
  courses: {
    title: "Academic Courses Directory - B.Tech, MBBS, MBA, BCA, M.Tech | Aptor Studies",
    description: "Browse comprehensive undergraduate, postgraduate, diploma, and certificate courses. View eligibility, course duration, fees, and top partner colleges.",
    keywords: ["undergraduate courses", "postgraduate degrees", "btech courses", "mbbs admission", "mba programs", "bca courses"],
    canonicalPath: "/courses",
    ogType: "website"
  },
  counselling: {
    title: "1-on-1 Executive Career Counselling & University Selection | Aptor Studies",
    description: "Book a personalized 1-on-1 career guidance session with expert education consultants. Career mapping, university matching, and end-to-end admission support.",
    keywords: ["career counselling", "education guidance", "university admission counselling", "student guidance consultant"],
    canonicalPath: "/counselling",
    ogType: "website"
  },
  scholarships: {
    title: "Merit Scholarships & Financial Grants up to ₹5 Lakhs | Aptor Studies",
    description: "Apply for the Aptor Studies Merit Scholarship Program offering financial assistance up to ₹5,00,000 for deserving students pursuing higher education.",
    keywords: ["education scholarships", "merit scholarship india", "college financial aid", "aptor studies scholarship"],
    canonicalPath: "/scholarships",
    ogType: "website"
  },
  accommodation: {
    title: "Verified Student Housing, Hostels & PG Suites | Aptor Studies",
    description: "Find safe, luxury, and affordable student accommodations, hostels, and paying guest (PG) suites near top colleges in Bengaluru, Kerala, and major Indian academic hubs.",
    keywords: ["student accommodation", "college hostels bengaluru", "pg suites for students", "student housing kerala"],
    canonicalPath: "/accommodation",
    ogType: "website"
  },
  academy: {
    title: "Aptor Academy - Vocational Training & Skill Development Programs",
    description: "Enhance your career readiness with Aptor Academy skill development modules, professional diplomas, and competitive exam coaching.",
    keywords: ["aptor academy", "skill development", "vocational training", "career readiness"],
    canonicalPath: "/academy",
    ogType: "website"
  },
  blogs: {
    title: "Education Blog & Career Guides - Aptor Studies Insights",
    description: "Read the latest educational news, admission tips, career roadmaps, college reviews, and entrance examination updates.",
    keywords: ["education blog", "career guidance articles", "college admission tips", "entrance exam news"],
    canonicalPath: "/blogs",
    ogType: "website"
  },
  contact: {
    title: "Contact Aptor Studies - Branch Network in Kerala & UAE",
    description: "Get in touch with Aptor Studies. Call +91 95267 97987 or visit our branches in Vadakara, Calicut, Tirur, Nadhapuram, Kalpetta, Kochi, and UAE.",
    keywords: ["contact aptor studies", "aptor studies office calicut", "vadakara education office", "aptor helpline"],
    canonicalPath: "/contact",
    ogType: "website"
  },
  privacyPolicy: {
    title: "Privacy Policy - Aptor Studies Data Protection",
    description: "Privacy Policy for Aptor Studies portal and counselling services. Learn how we handle student data with complete confidentiality.",
    keywords: ["privacy policy", "data protection", "aptor studies terms"],
    canonicalPath: "/privacy-policy",
    ogType: "website"
  },
  terms: {
    title: "Terms & Conditions - Aptor Studies Advisory",
    description: "Terms of service and student advisory conditions for using Aptor Studies portal and educational consultancy.",
    keywords: ["terms of service", "user agreement", "aptor studies terms"],
    canonicalPath: "/terms",
    ogType: "website"
  }
};

/**
 * Returns absolute canonical URL for any route path
 */
export function getCanonicalUrl(path: string = "/", baseUrl: string = DEFAULT_BASE_URL): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Generates Search Engine Rich Snippet Schema.org graphs (WebPage, CollectionPage, etc.)
 */
export function getSearchRichSnippetSchema(routeKey: string, baseUrl: string = DEFAULT_BASE_URL) {
  const config = SITE_ROUTES_SEO[routeKey] || SITE_ROUTES_SEO.home;
  const canonicalUrl = getCanonicalUrl(config.canonicalPath, baseUrl);

  let schemaType = "WebPage";
  if (routeKey === 'colleges' || routeKey === 'courses' || routeKey === 'blogs') {
    schemaType = "CollectionPage";
  } else if (routeKey === 'about') {
    schemaType = "AboutPage";
  } else if (routeKey === 'contact') {
    schemaType = "ContactPage";
  } else if (routeKey === 'scholarships') {
    schemaType = "SearchResultsPage";
  }

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": config.title,
    "description": config.description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": "Aptor Studies",
      "url": baseUrl
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      "name": "Aptor Studies"
    },
    "inLanguage": "en-US"
  };
}

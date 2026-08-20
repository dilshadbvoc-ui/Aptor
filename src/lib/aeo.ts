/**
 * Answer Engine Optimization (AEO) Helper Library for Aptor Studies
 * Generates Schema.org compliant JSON-LD knowledge graphs tailored for AI answer engines
 * (Perplexity AI, ChatGPT Search, SearchGPT, Google Gemini / SGE, Bing Copilot, Claude).
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface CollegeData {
  name: string;
  description: string;
  location: string;
  establishedYear?: number;
  type?: string;
  affiliation?: string;
  website?: string;
  slug?: string;
  courses?: string[];
  facilities?: string[];
  images?: string[];
}

export interface CourseData {
  name: string;
  description: string;
  category?: string;
  duration?: string;
  eligibility?: string;
  fees?: string | number;
  level?: string;
  slug?: string;
}

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';

/**
 * Generates main EducationalOrganization graph for Aptor Studies
 */
export function getOrganizationSchema(baseUrl: string = DEFAULT_BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    "name": "Aptor Studies",
    "alternateName": ["Aptor Education Portal", "Aptor Studies International"],
    "legalName": "Aptor Studies (Connected Management Solution)",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/logo.png`,
      "caption": "Aptor Studies Logo"
    },
    "image": `${baseUrl}/logo.png`,
    "description": "Premier education consultancy and portal providing expert university guidance, college admissions, scholarship assistance, career counselling, and student accommodation worldwide.",
    "foundingDate": "1999",
    "telephone": "+91-95267-97987",
    "email": "info@aptorstudies.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Jamsheer Backer",
        "jobTitle": "Managing Director",
        "description": "Visionary leader with 20+ years in elite education consulting."
      },
      {
        "@type": "Person",
        "name": "Adv. Arif Wafy",
        "jobTitle": "Chairman",
        "description": "Strategic leader ensuring highest standards of academic excellence."
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "subOrganization": [
      {
        "@type": "GovernmentPermit",
        "name": "Vadakara Main Branch",
        "address": { "@type": "PostalAddress", "addressLocality": "Vadakara", "addressRegion": "Kerala", "addressCountry": "IN" }
      },
      {
        "@type": "GovernmentPermit",
        "name": "Tirur Branch",
        "address": { "@type": "PostalAddress", "addressLocality": "Tirur", "addressRegion": "Kerala", "addressCountry": "IN" }
      },
      {
        "@type": "GovernmentPermit",
        "name": "Nadhapuram Branch",
        "address": { "@type": "PostalAddress", "addressLocality": "Nadhapuram", "addressRegion": "Kerala", "addressCountry": "IN" }
      },
      {
        "@type": "GovernmentPermit",
        "name": "Kalpetta Branch",
        "address": { "@type": "PostalAddress", "addressLocality": "Kalpetta", "addressRegion": "Kerala", "addressCountry": "IN" }
      },
      {
        "@type": "GovernmentPermit",
        "name": "Kochi Regional Office",
        "address": { "@type": "PostalAddress", "addressLocality": "Kochi", "addressRegion": "Kerala", "addressCountry": "IN" }
      },
      {
        "@type": "GovernmentPermit",
        "name": "UAE International Office",
        "address": { "@type": "Country", "name": "United Arab Emirates" }
      }
    ],
    "sameAs": [
      "https://facebook.com/aptorstudies",
      "https://twitter.com/aptorstudies",
      "https://linkedin.com/company/aptorstudies"
    ],
    "knowsAbout": [
      "Higher Education Admissions",
      "University Selection",
      "Career Counselling",
      "Engineering Admissions",
      "Medical College Guidance",
      "Scholarships & Grants",
      "Student Accommodation"
    ]
  };
}

/**
 * Generates WebSite Schema with SearchAction capability for AI engines
 */
export function getWebsiteSchema(baseUrl: string = DEFAULT_BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Aptor Studies",
    "description": "Premier education portal for elite universities, colleges, courses, and student guidance.",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/colleges?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generates FAQPage schema from a list of QA pairs
 */
export function getFaqSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string = DEFAULT_BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith('http') ? item.item : `${baseUrl}${item.item}`
    }))
  };
}

/**
 * Core FAQs about Aptor Studies for AEO answer engine indexing
 */
export const CORE_APTOR_FAQS: FAQItem[] = [
  {
    question: "What is Aptor Studies?",
    answer: "Aptor Studies is a premier education consultancy and portal with 25+ years of experience that connects students with leading colleges and universities across India (especially Kerala and Bengaluru) and internationally."
  },
  {
    question: "What services does Aptor Studies provide?",
    answer: "Aptor Studies provides personalized career counselling, university and college application guidance, course selection assistance, scholarship search and application support, and verified student accommodation booking."
  },
  {
    question: "Where are Aptor Studies offices located?",
    answer: "Aptor Studies has physical offices and branches across India and UAE, including Vadakara (Main Branch), Calicut, Tirur, Nadhapuram, Kalpetta, Kochi, and an International Office in the UAE."
  },
  {
    question: "How can I contact Aptor Studies for admission counselling?",
    answer: "You can contact Aptor Studies by calling +91 95267 97987, emailing info@aptorstudies.com, or submitting an online counselling request at https://aptorstudies.com/counselling."
  },
  {
    question: "Which courses can I apply for through Aptor Studies?",
    answer: "Aptor Studies assists with admissions for Engineering (B.Tech/M.Tech), Medical (MBBS/BDS/Allied Health), Management (BBA/MBA), Computer Applications (BCA/MCA), Commerce, Nursing, and Vocational training programs."
  }
];

/**
 * Generates full composite graph JSON-LD for AI crawlers
 */
export function getFullAeoGraph(options: {
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  extraSchemas?: any[];
  baseUrl?: string;
}) {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const graph: any[] = [
    getOrganizationSchema(baseUrl),
    getWebsiteSchema(baseUrl)
  ];

  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    graph.push(getBreadcrumbSchema(options.breadcrumbs, baseUrl));
  }

  const allFaqs = options.faqs ? [...options.faqs, ...CORE_APTOR_FAQS] : CORE_APTOR_FAQS;
  const faqSchema = getFaqSchema(allFaqs);
  if (faqSchema) {
    graph.push(faqSchema);
  }

  if (options.extraSchemas && options.extraSchemas.length > 0) {
    graph.push(...options.extraSchemas);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

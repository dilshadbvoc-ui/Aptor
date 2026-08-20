/**
 * Generative Engine Optimization (GEO) Helper Library for Aptor Studies
 * Provides metadata, Dublin Core, citation tags, speakable schemas, geo-coordinates,
 * and generative entity catalogs for generative AI search engines
 * (Google Gemini / SGE, SearchGPT, Perplexity AI, Bing Copilot, Claude).
 */

export interface GeoLocation {
  name: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  latitude?: number;
  longitude?: number;
}

export const APTOR_BRANCHES_GEO: GeoLocation[] = [
  { name: "Vadakara Main Branch", addressLocality: "Vadakara", addressRegion: "Kerala", addressCountry: "IN", latitude: 11.6089, longitude: 75.5917 },
  { name: "Calicut Regional Office", addressLocality: "Calicut", addressRegion: "Kerala", addressCountry: "IN", latitude: 11.2588, longitude: 75.7804 },
  { name: "Tirur Branch Office", addressLocality: "Tirur", addressRegion: "Kerala", addressCountry: "IN", latitude: 10.9167, longitude: 75.9167 },
  { name: "Nadhapuram Branch Office", addressLocality: "Nadhapuram", addressRegion: "Kerala", addressCountry: "IN", latitude: 11.6888, longitude: 75.6417 },
  { name: "Kalpetta Branch Office", addressLocality: "Kalpetta", addressRegion: "Kerala", addressCountry: "IN", latitude: 11.6103, longitude: 76.0827 },
  { name: "Kochi Regional Office", addressLocality: "Kochi", addressRegion: "Kerala", addressCountry: "IN", latitude: 9.9312, longitude: 76.2673 },
  { name: "UAE International Office", addressLocality: "Dubai", addressRegion: "Dubai", addressCountry: "AE", latitude: 25.2048, longitude: 55.2708 }
];

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';

/**
 * Generates Dublin Core Metadata tags for Generative AI search crawlers
 */
export function getDublinCoreMetadata(pageTitle?: string, pageDescription?: string, pageUrl?: string) {
  const url = pageUrl ? (pageUrl.startsWith('http') ? pageUrl : `${DEFAULT_BASE_URL}${pageUrl}`) : DEFAULT_BASE_URL;
  return {
    'DC.title': pageTitle || "Aptor Studies - Premier Education Portal & University Guidance",
    'DC.creator': "Aptor Studies Educational Advisory Board",
    'DC.subject': "Higher Education, College Admissions, University Guidance, Career Counselling, Scholarships, Student Hostels",
    'DC.description': pageDescription || "Premier education portal providing university guidance, college admissions, course selection, and student services worldwide.",
    'DC.publisher': "Aptor Studies (Connected Management Solution)",
    'DC.contributor': "Jamsheer Backer, Adv. Arif Wafy",
    'DC.type': "InteractiveResource",
    'DC.format': "text/html",
    'DC.identifier': url,
    'DC.language': "en"
  };
}

/**
 * Generates Google & AI Citation Meta Tags for Generative Citation Extraction
 */
export function getCitationMetaTags(title?: string, author?: string, path?: string) {
  const url = path ? (path.startsWith('http') ? path : `${DEFAULT_BASE_URL}${path}`) : DEFAULT_BASE_URL;
  return {
    'citation_title': title || "Aptor Studies Premier Education Guidance & College Admissions",
    'citation_author': author || "Aptor Studies Advisory Board",
    'citation_publisher': "Aptor Studies (Connected Management Solution)",
    'citation_fulltext_html_url': url,
    'citation_language': "en",
    'citation_keywords': "education consultancy, college admissions, bengaluru colleges, kerala education, career counselling, MBBS, BTech, MBA"
  };
}

/**
 * Generates Schema.org Speakable Specification for Generative Voice & AI Text Synthesis
 */
export function getSpeakableSchema(cssSelectors: string[] = ['h1', 'h2', 'p']) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelectors
  };
}

/**
 * Generates GeoCoordinates & LocalBusiness schemas for AI location searches
 */
export function getLocalGeoSchemas(baseUrl: string = DEFAULT_BASE_URL) {
  return APTOR_BRANCHES_GEO.map(branch => ({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#branch-${branch.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `Aptor Studies - ${branch.name}`,
    "url": baseUrl,
    "telephone": "+91-95267-97987",
    "email": "info@aptorstudies.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": branch.addressLocality,
      "addressRegion": branch.addressRegion,
      "addressCountry": branch.addressCountry
    },
    ...(branch.latitude && branch.longitude ? {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": branch.latitude,
        "longitude": branch.longitude
      }
    } : {})
  }));
}

/**
 * Generates OfferCatalog Schema for Generative AI Offerings Synthesis
 */
export function getOfferCatalogSchema(baseUrl: string = DEFAULT_BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Aptor Studies Educational Services & Programs",
    "url": baseUrl,
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "College & University Admissions Guidance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engineering College Admissions (B.Tech/M.Tech)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical & Healthcare Admissions (MBBS/BDS/Nursing)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Management & Business Admissions (BBA/MBA)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Applications Admissions (BCA/MCA)" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Student Advisory & Support",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1-on-1 Executive Career Counselling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Merit Scholarship & Grant Guidance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Verified Student Housing & Accommodation Booking" } }
        ]
      }
    ]
  };
}

/**
 * Composite GEO JSON-LD graph builder
 */
export function getFullGeoGraph(baseUrl: string = DEFAULT_BASE_URL) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getSpeakableSchema(),
      getOfferCatalogSchema(baseUrl),
      ...getLocalGeoSchemas(baseUrl)
    ]
  };
}

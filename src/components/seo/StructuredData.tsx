import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'course' | 'university' | 'jobPosting';
  data: any;
  seoSettings?: any;
}

export function StructuredData({ type, data, seoSettings }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = seoSettings?.siteUrl || process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": seoSettings?.organizationSchema?.name || seoSettings?.siteName || "Aptor Studies",
          "description": seoSettings?.organizationSchema?.description || seoSettings?.siteDescription || "Premium education portal providing elite university guidance, luxury course information, and exclusive student services",
          "url": baseUrl,
          "logo": seoSettings?.organizationSchema?.logo || seoSettings?.ogImage || `${baseUrl}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": seoSettings?.contactPhone || "+91-80-1234-5678",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"],
            "email": seoSettings?.contactEmail || "info@aptorstudies.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": seoSettings?.address?.locality || "Bengaluru",
            "addressRegion": seoSettings?.address?.region || "Karnataka",
            "addressCountry": seoSettings?.address?.country || "IN"
          },
          "sameAs": seoSettings?.socialMedia ? Object.values(seoSettings.socialMedia).filter(Boolean) : [
            "https://facebook.com/aptorstudies",
            "https://twitter.com/aptorstudies",
            "https://linkedin.com/company/aptorstudies"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": seoSettings?.siteName || "Aptor Studies",
          "url": baseUrl,
          "description": seoSettings?.siteDescription || "Premium education portal for elite universities, colleges, and luxury courses",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": seoSettings?.siteName || "Aptor Studies"
          },
          "courseCode": data.code,
          "educationalLevel": data.level,
          "timeRequired": data.duration,
          "offers": {
            "@type": "Offer",
            "price": data.fees,
            "priceCurrency": "INR"
          }
        };

      case 'university':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": data.name,
          "description": data.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": data.location,
            "addressCountry": "IN"
          },
          "url": data.website,
          "telephone": data.phone,
          "email": data.email
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": seoSettings?.siteName || "Aptor Studies"
          },
          "publisher": {
            "@type": "Organization",
            "name": seoSettings?.siteName || "Aptor Studies",
            "logo": {
              "@type": "ImageObject",
              "url": seoSettings?.ogImage || `${baseUrl}/logo.png`
            }
          },
          "datePublished": data.publishedAt,
          "dateModified": data.updatedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };

      case 'jobPosting':
        return {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": data.title,
          "description": data.description,
          "hiringOrganization": {
            "@type": "Organization",
            "name": data.company || "Company"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.location || "Bengaluru",
              "addressCountry": "IN"
            }
          },
          "datePosted": data.publishedAt,
          "validThrough": data.deadline,
          "employmentType": data.type || "INTERNSHIP",
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
              "@type": "QuantitativeValue",
              "value": data.stipend || 0
            }
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
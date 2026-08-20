import React from 'react';
import { SITE_ROUTES_SEO, getCanonicalUrl, getSearchRichSnippetSchema } from '@/lib/seo-engine';

interface SeoSchemaProps {
  routeKey?: string;
  customTitle?: string;
  customDescription?: string;
  customPath?: string;
  baseUrl?: string;
}

export function SeoSchema({ routeKey = 'home', customTitle, customDescription, customPath, baseUrl }: SeoSchemaProps) {
  const config = SITE_ROUTES_SEO[routeKey] || SITE_ROUTES_SEO.home;
  const title = customTitle || config.title;
  const description = customDescription || config.description;
  const path = customPath || config.canonicalPath;
  const canonicalUrl = getCanonicalUrl(path, baseUrl);
  const snippetSchema = getSearchRichSnippetSchema(routeKey, baseUrl);

  return (
    <>
      {/* Self-referencing Canonical URL for Traditional Search Engine Indexing */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Primary Search Engine Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={config.keywords.join(', ')} />

      {/* OpenGraph & Twitter Social Search Cards */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={config.ogType || 'website'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org Search Engine Rich Snippet Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(snippetSchema)
        }}
      />
    </>
  );
}

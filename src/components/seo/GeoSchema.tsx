import React from 'react';
import { getFullGeoGraph, getDublinCoreMetadata, getCitationMetaTags } from '@/lib/geo';

interface GeoSchemaProps {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  author?: string;
  baseUrl?: string;
}

export function GeoSchema({ pageTitle, pageDescription, pagePath, author, baseUrl }: GeoSchemaProps) {
  const dcMeta = getDublinCoreMetadata(pageTitle, pageDescription, pagePath);
  const citationMeta = getCitationMetaTags(pageTitle, author, pagePath);
  const geoGraph = getFullGeoGraph(baseUrl);

  return (
    <>
      {/* Dublin Core Citation Metadata for Generative Search Indexers */}
      {Object.entries(dcMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Google & AI Search Citation Metadata */}
      {Object.entries(citationMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* GEO Speakable & Local GeoCoordinates Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(geoGraph)
        }}
      />
    </>
  );
}

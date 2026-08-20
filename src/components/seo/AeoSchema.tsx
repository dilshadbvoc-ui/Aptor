import React from 'react';
import { getFullAeoGraph, FAQItem, BreadcrumbItem } from '@/lib/aeo';

interface AeoSchemaProps {
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  extraSchemas?: any[];
  baseUrl?: string;
  customGraph?: any;
}

export function AeoSchema({ faqs, breadcrumbs, extraSchemas, baseUrl, customGraph }: AeoSchemaProps) {
  const jsonLdData = customGraph || getFullAeoGraph({ faqs, breadcrumbs, extraSchemas, baseUrl });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData)
      }}
    />
  );
}

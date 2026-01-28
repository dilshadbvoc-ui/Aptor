import { NextResponse } from 'next/server';
import { getSeoSettings } from '@/lib/seo';

export async function GET() {
  const seoSettings = await getSeoSettings();
  const baseUrl = seoSettings.siteUrl || process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.homepage || 'daily'}</changefreq>
    <priority>${seoSettings.sitemapSettings?.priority?.homepage || 1.0}</priority>
  </url>
  <url>
    <loc>${baseUrl}/universities</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.universities || 'weekly'}</changefreq>
    <priority>${seoSettings.sitemapSettings?.priority?.universities || 0.9}</priority>
  </url>
  <url>
    <loc>${baseUrl}/colleges</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.universities || 'weekly'}</changefreq>
    <priority>${seoSettings.sitemapSettings?.priority?.universities || 0.9}</priority>
  </url>
  <url>
    <loc>${baseUrl}/courses</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.blogs || 'daily'}</changefreq>
    <priority>${seoSettings.sitemapSettings?.priority?.blogs || 0.8}</priority>
  </url>
  <url>
    <loc>${baseUrl}/events</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/internships</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/accommodation</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/counselling</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.static || 'monthly'}</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.static || 'monthly'}</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${seoSettings.sitemapSettings?.changeFreq?.static || 'monthly'}</changefreq>
    <priority>${seoSettings.sitemapSettings?.priority?.static || 0.5}</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
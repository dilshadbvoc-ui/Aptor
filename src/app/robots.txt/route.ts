import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';
  
  const robots = `User-agent: *
Allow: /

# Disallow administrative and non-public endpoints
Disallow: /admin/
Disallow: /api/

# Allow important contact endpoints
Allow: /api/contact

# Explicit Permissions for AI Search Engines & LLM Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: diffbot
Allow: /

User-agent: YouBot
Allow: /

# Machine-Readable Context for LLMs (AEO & GEO Standard)
# LLMs-Text: ${baseUrl}/llms.txt
# LLMs-Full-Text: ${baseUrl}/llms-full.txt
# GEO-Manifest: ${baseUrl}/geo.json

# XML Sitemap
Sitemap: ${baseUrl}/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
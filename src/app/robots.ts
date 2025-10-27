import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.snow-peak.ca';
  
  // Get the current host from the request if available
  // This will help us serve different robots.txt for www vs non-www
  const isNonWWW = typeof window === 'undefined' && 
    process.env.VERCEL_URL && 
    !process.env.VERCEL_URL.includes('www');
  
  // If accessed via non-www, disallow all crawling
  if (isNonWWW) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        }
      ],
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    };
  }
  
  // For www version, allow normal crawling
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

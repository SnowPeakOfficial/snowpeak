import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://snow-peak.ca';
  const now = new Date();
  const routes = ['/', '/services', '/portfolio', '/about', '/contact', '/privacy', '/terms'];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: now }));
}



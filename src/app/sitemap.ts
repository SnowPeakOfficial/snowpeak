import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.snow-peak.ca';
  const now = new Date();
  
  // Main pages
  const mainRoutes = ['/', '/services', '/portfolio', '/about', '/contact', '/privacy', '/terms'];
  
  // Service detail pages
  const serviceRoutes = [
    '/services/web-development',
    '/services/web-applications',
    '/services/mobile-applications',
    '/services/browser-extensions',
    '/services/maintenance-support'
  ];
  
  // Combine all routes
  const allRoutes = [...mainRoutes, ...serviceRoutes];
  
  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.7,
  }));
}

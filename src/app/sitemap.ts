import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/env';
import { attractions } from '@/data/attractions';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const locales = ['zh', 'en', 'es'];
  const staticRoutes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
    '/attractions',
  ];
  const attractionRoutes = attractions
    .filter((a) => !a.hub)
    .map((a) => `/attractions/${a.slug}`);
  const routes = [...staticRoutes, ...attractionRoutes];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
      });
    }
  }

  return sitemap;
}

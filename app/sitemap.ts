import type { MetadataRoute } from 'next';
import { allAreas, areaHref, SITE_URL } from '@/lib/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/plans`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/broadband-bangalore`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...allAreas.map((a) => ({
      url: `${SITE_URL}${areaHref(a)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}

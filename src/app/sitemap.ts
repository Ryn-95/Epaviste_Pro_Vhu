import { MetadataRoute } from 'next';
import { deptMap } from '@/lib/idf-data';
import { slugifyCity } from '@/lib/utils';

const BASE_URL = 'https://www.epavisteprovhu.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/contact',
    '/services-epaviste',
    '/centre-vhu-agree',
    '/documents-obligatoires',
    '/rachat-vehicule',
    '/zones-intervention',
    '/guide/documents-destruction-voiture',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }));

  const cityRoutes = Object.entries(deptMap).flatMap(([deptCode, info]) => {
    return info.topCities.map((city) => ({
      url: `${BASE_URL}/epaviste/${deptCode}/${slugifyCity(city)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  });

  return [...routes, ...cityRoutes];
}

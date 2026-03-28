import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

  return [
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/rooms/single`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rooms/twin`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/diy-room-decor-budget-pg`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/make-pg-feel-like-home`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
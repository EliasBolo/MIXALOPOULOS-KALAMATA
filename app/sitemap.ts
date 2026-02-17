import type { MetadataRoute } from 'next'

const baseUrl = 'https://michalopoulos.gr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/politiki-aporritou', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/politiki-prosvasimotitas', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}

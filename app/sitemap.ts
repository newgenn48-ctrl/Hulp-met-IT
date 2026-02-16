import { MetadataRoute } from 'next'
import cities from '@/lib/data/cities.json'
import services from '@/lib/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hulpmetit.nl'
  const lastUpdate = new Date('2026-02-15')

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/computerhulp-aan-huis`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/student-aan-huis`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/regios`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/afspraak`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // SEA landing pages - hoge prioriteit voor zoekwoord targeting
    {
      url: `${baseUrl}/computerproblemen`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pc-laten-maken`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/student-computerhulp`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tv-installatie-aan-huis`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pc-hulp-aan-huis`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hulp-bij-laptop-problemen`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
  ]

  // Service pages
  const servicePages = services.map(service => ({
    url: `${baseUrl}/diensten/${service.slug}`,
    lastModified: lastUpdate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // High priority cities (grote steden + SEA target steden)
  const highPriorityCities = [
    'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'groningen', 'tilburg',
    'zoetermeer', 'dordrecht', 'delft'
  ]

  // City pages (regios)
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/regios/${city.slug}`,
    lastModified: lastUpdate,
    changeFrequency: 'weekly' as const,
    priority: highPriorityCities.includes(city.slug) ? 0.8 : 0.6,
  }))

  // Student Aan Huis city pages
  const studentAanHuisCities = [
    'alphen-aan-den-rijn', 'amersfoort', 'amsterdam', 'arnhem', 'baarn', 'bergen-op-zoom', 'blaricum', 'breda',
    'bussum', 'capelle-aan-den-ijssel', 'delft', 'den-bosch', 'den-haag', 'dordrecht',
    'eindhoven', 'enschede', 'goes', 'gouda', 'groningen', 'haarlem', 'helmond', 'hilversum', 'huizen', 'katwijk',
    'laren', 'leiden', 'leidschendam-voorburg', 'middelburg', 'naarden', 'nijmegen', 'oosterhout', 'oss',
    'roosendaal', 'rotterdam', 'schiedam', 'soest', 'terneuzen', 'tilburg', 'uden', 'utrecht',
    'vlaardingen', 'vlissingen', 'waalwijk', 'weesp', 'zoetermeer', 'zwolle'
  ]

  const studentAanHuisPages = studentAanHuisCities.map(slug => ({
    url: `${baseUrl}/student-aan-huis-${slug}`,
    lastModified: lastUpdate,
    changeFrequency: 'weekly' as const,
    priority: highPriorityCities.includes(slug) ? 0.9 : 0.8,
  }))

  // Computerhulp Aan Huis city pages
  const computerhulpAanHuisCities = [
    'almere', 'alphen-aan-den-rijn', 'amersfoort', 'amsterdam', 'arnhem', 'baarn', 'bergen-op-zoom', 'blaricum',
    'breda', 'bussum', 'capelle-aan-den-ijssel', 'delft', 'den-bosch', 'den-haag',
    'dordrecht', 'eindhoven', 'enschede', 'goes', 'gouda', 'groningen', 'haarlem', 'helmond',
    'hilversum', 'huizen', 'katwijk', 'laren', 'leiden', 'leidschendam-voorburg', 'middelburg', 'naarden', 'nijmegen',
    'oosterhout', 'oss', 'roosendaal', 'rotterdam', 'schiedam', 'soest', 'terneuzen', 'tilburg', 'uden',
    'utrecht', 'vlaardingen', 'vlissingen', 'waalwijk', 'weesp', 'zoetermeer', 'zwolle'
  ]

  const computerhulpAanHuisPages = computerhulpAanHuisCities.map(slug => ({
    url: `${baseUrl}/computerhulp-aan-huis-${slug}`,
    lastModified: lastUpdate,
    changeFrequency: 'weekly' as const,
    priority: highPriorityCities.includes(slug) ? 0.95 : 0.85,
  }))

  return [...staticPages, ...servicePages, ...cityPages, ...studentAanHuisPages, ...computerhulpAanHuisPages]
}

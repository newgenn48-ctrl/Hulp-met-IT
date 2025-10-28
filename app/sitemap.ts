import { MetadataRoute } from 'next'
import cities from '@/lib/data/cities.json'
import services from '@/lib/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hulpmetit.nl'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/afspraak`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regios`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/student-aan-huis`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/computerhulp-aan-huis`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Service pages
  const servicePages = services.map(service => ({
    url: `${baseUrl}/diensten/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // City pages
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/regios/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Student Aan Huis city pages - Only include cities that have actual pages
  const studentAanHuisCities = [
    'alphen-aan-den-rijn', 'amersfoort', 'amsterdam', 'arnhem', 'baarn', 'blaricum', 'breda',
    'bussum', 'capelle-aan-den-ijssel', 'delft', 'den-bosch', 'den-haag', 'dordrecht',
    'eindhoven', 'enschede', 'gouda', 'groningen', 'haarlem', 'hilversum', 'huizen', 'katwijk',
    'laren', 'leiden', 'leidschendam-voorburg', 'middelburg', 'naarden', 'nijmegen', 'rotterdam',
    'schiedam', 'soest', 'tilburg', 'utrecht', 'vlaardingen', 'weesp', 'zoetermeer', 'zwolle'
  ]

  // High priority cities (grote steden)
  const highPriorityCities = ['amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'groningen', 'tilburg']

  const studentAanHuisPages = studentAanHuisCities.map(slug => ({
    url: `${baseUrl}/student-aan-huis-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: highPriorityCities.includes(slug) ? 0.95 : 0.9,
  }))

  // Computerhulp Aan Huis city pages - Only include cities that have actual pages
  const computerhulpAanHuisCities = [
    'almere', 'alphen-aan-den-rijn', 'amersfoort', 'amsterdam', 'arnhem', 'baarn', 'blaricum',
    'breda', 'bussum', 'capelle-aan-den-ijssel', 'delft', 'den-bosch', 'den-haag',
    'dordrecht', 'eindhoven', 'enschede', 'gouda', 'groningen', 'haarlem',
    'hilversum', 'huizen', 'katwijk', 'laren', 'leiden', 'leidschendam-voorburg', 'middelburg', 'naarden', 'nijmegen',
    'rotterdam', 'schiedam', 'soest', 'tilburg', 'utrecht', 'vlaardingen', 'weesp', 'zoetermeer', 'zwolle'
  ]

  const computerhulpAanHuisPages = computerhulpAanHuisCities.map(slug => ({
    url: `${baseUrl}/computerhulp-aan-huis-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: highPriorityCities.includes(slug) ? 0.95 : 0.9,
  }))

  return [...staticPages, ...servicePages, ...cityPages, ...studentAanHuisPages, ...computerhulpAanHuisPages]
}
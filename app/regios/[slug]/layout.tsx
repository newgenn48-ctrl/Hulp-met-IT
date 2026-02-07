import { Metadata } from 'next'
import cities from '@/lib/data/cities.json'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const params = cities.map((city) => ({
    slug: city.slug,
  }))

  // Also generate params for computerhulp- prefixed URLs
  const computerhulpParams = cities.map((city) => ({
    slug: `computerhulp-${city.slug}`,
  }))

  return [...params, ...computerhulpParams]
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params
  // Handle both formats: direct city slug and computerhulp-city
  const citySlug = resolvedParams.slug.startsWith('computerhulp-')
    ? resolvedParams.slug.replace('computerhulp-', '')
    : resolvedParams.slug

  const city = cities.find(c => c.slug === citySlug)

  if (!city) {
    return {
      title: 'Stad niet gevonden | Hulp met IT'
    }
  }

  const title = `Computerhulp ${city.name} | IT Service €14,50 per kwartier | Hulp met IT`
  const description = `Computerhulp in ${city.name} en omgeving. Ervaren IT-specialisten voor al uw computerproblemen. €14,50 per kwartier. Ook in ${city.serviceAreas.slice(0, 4).join(', ')}. Bel nu!`

  return {
    title,
    description,
    keywords: [
      `computerhulp ${city.name}`,
      `IT hulp ${city.name}`,
      `computer reparatie ${city.name}`,
      `laptop hulp ${city.name}`,
      `IT service ${city.name}`,
      `computer problemen ${city.name}`,
      `IT specialist ${city.name}`,
      `${city.name.toLowerCase()} computerhulp`,
      `${city.name.toLowerCase()} IT hulp`,
      `${city.name.toLowerCase()} computer service`,
      ...city.serviceAreas.slice(0, 3).map(area => `computerhulp ${area}`),
    ],
    openGraph: {
      title: `Computerhulp ${city.name} | IT Service`,
      description: `Professionele computerhulp in ${city.name}. Ervaren IT-specialisten, flexibele tijden. €14,50 per kwartier.`,
      images: ['/og-image.webp'],
      type: 'website',
      locale: 'nl_NL',
      siteName: 'Hulp met IT',
      url: `https://hulpmetit.nl/regios/${city.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Computerhulp ${city.name} | IT Service`,
      description: `Professionele computerhulp in ${city.name}. €14,50 per kwartier.`,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/regios/${city.slug}`,
    },
  }
}

export default function RegioLayout({ children }: LayoutProps) {
  return children
}

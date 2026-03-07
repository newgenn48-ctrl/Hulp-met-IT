import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hillegom | Hulp met IT',
  description: 'Computerhulp aan huis in Hillegom door HBO-opgeleide ICT-studenten. Hulp in Hillegom Centrum, Elsbroek, Hillegom-Noord en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hillegom',
    'computer reparatie hillegom',
    'laptop reparatie hillegom',
    'ICT student hillegom',
    'pc hulp hillegom',
    'computer student hillegom',
    'hillegom computerhulp avond',
    'hillegom IT hulp weekend',
    'computerhulp hillegom spoed',
    'betaalbare IT hulp hillegom',
    'wifi problemen hillegom',
    'internet hulp hillegom',
    'printer installatie hillegom',
    'virus verwijderen hillegom',
    'computerhulp hillegom centrum',
    'ict hulp elsbroek',
    'computer reparatie hillegom-noord',
    'laptop hulp hillegom-zuid',
    'pc hulp pastoorslaan-gebied',
    'it hulp ringvaart-omgeving',
    'computerhulp hillegom',
    'it service hillegom',
    'computer problemen hillegom'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hillegom | Hulp met IT',
    description: 'Computerhulp aan huis in Hillegom door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hillegom',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hillegom - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hillegom | Hulp met IT',
    description: 'Computerhulp aan huis in Hillegom. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hillegom'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  }
}

export default function ComputerhulpAanHuisHillegomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

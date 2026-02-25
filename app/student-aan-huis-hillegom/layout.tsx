import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hillegom | Hulp met IT',
  description: 'ICT Student aan huis in Hillegom voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hillegom Centrum, Elsbroek, Hillegom-Noord en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hillegom',
    'computerhulp hillegom',
    'ict hulp hillegom',
    'computer reparatie hillegom',
    'laptop hulp hillegom',
    'it student hillegom',
    'betaalbare computerhulp hillegom',
    'computer problemen hillegom',
    'wifi problemen hillegom',
    'internet hulp hillegom',
    'computerhulp hillegom centrum',
    'ict hulp elsbroek',
    'computer reparatie hillegom-noord',
    'laptop hulp hillegom-zuid',
    'student computerhulp pastoorslaan-gebied',
    'it hulp ringvaart-omgeving',
    'it service hillegom',
    'laptop reparatie hillegom',
    'it hulp aan huis hillegom'
  ],
  openGraph: {
    title: 'Student aan huis Hillegom | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hillegom. Wij komen bij u thuis in Hillegom en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hillegom',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hillegom - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hillegom | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hillegom. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hillegom'
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

export default function StudentAanHuisHillegomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

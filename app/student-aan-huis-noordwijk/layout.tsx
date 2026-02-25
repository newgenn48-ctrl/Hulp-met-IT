import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Noordwijk | Hulp met IT',
  description: 'ICT Student aan huis in Noordwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Noordwijk aan Zee, Noordwijk-Binnen, Noordwijkerhout en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis noordwijk',
    'computerhulp noordwijk',
    'ict hulp noordwijk',
    'computer reparatie noordwijk',
    'laptop hulp noordwijk',
    'it student noordwijk',
    'betaalbare computerhulp noordwijk',
    'computer problemen noordwijk',
    'wifi problemen noordwijk',
    'internet hulp noordwijk',
    'computerhulp noordwijk aan zee',
    'ict hulp noordwijk-binnen',
    'computer reparatie noordwijkerhout',
    'laptop hulp de zilk',
    'student computerhulp langeveld',
    'it hulp offem',
    'it service noordwijk',
    'laptop reparatie noordwijk',
    'it hulp aan huis noordwijk'
  ],
  openGraph: {
    title: 'Student aan huis Noordwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Noordwijk. Wij komen bij u thuis in Noordwijk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-noordwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Noordwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Noordwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Noordwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-noordwijk'
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

export default function StudentAanHuisNoordwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

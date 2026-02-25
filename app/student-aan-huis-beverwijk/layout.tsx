import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Beverwijk | Hulp met IT',
  description: 'ICT Student aan huis in Beverwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Beverwijk, Wijk aan Zee, Westerhout en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis beverwijk',
    'computerhulp beverwijk',
    'ict hulp beverwijk',
    'computer reparatie beverwijk',
    'laptop hulp beverwijk',
    'it student beverwijk',
    'betaalbare computerhulp beverwijk',
    'computer problemen beverwijk',
    'wifi problemen beverwijk',
    'internet hulp beverwijk',
    'computerhulp beverwijk',
    'ict hulp wijk aan zee',
    'computer reparatie westerhout',
    'laptop hulp beverwijk-zuid',
    'student computerhulp beverwijk-oost',
    'it hulp meerestein',
    'it service beverwijk',
    'laptop reparatie beverwijk',
    'it hulp aan huis beverwijk'
  ],
  openGraph: {
    title: 'Student aan huis Beverwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Beverwijk. Wij komen bij u thuis in Beverwijk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-beverwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Beverwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Beverwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Beverwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-beverwijk'
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

export default function StudentAanHuisBeverwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

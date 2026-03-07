import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Cuijk | Hulp met IT',
  description: 'ICT Student aan huis in Cuijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Cuijk Centrum, Cuijk Noord, Cuijk Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis cuijk',
    'computerhulp cuijk',
    'ict hulp cuijk',
    'computer reparatie cuijk',
    'laptop hulp cuijk',
    'it student cuijk',
    'betaalbare computerhulp cuijk',
    'computer problemen cuijk',
    'wifi problemen cuijk',
    'internet hulp cuijk',
    'computerhulp cuijk centrum',
    'ict hulp cuijk noord',
    'computer reparatie cuijk zuid',
    'laptop hulp beers',
    'student computerhulp vianen',
    'it hulp haps',
    'it service cuijk',
    'laptop reparatie cuijk',
    'it hulp aan huis cuijk'
  ],
  openGraph: {
    title: 'Student aan huis Cuijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Cuijk. Wij komen bij u thuis in Cuijk en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-cuijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Cuijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Cuijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Cuijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-cuijk'
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

export default function StudentAanHuisCuijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

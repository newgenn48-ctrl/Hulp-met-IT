import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Tilburg | Hulp met IT',
  description: 'ICT Student aan huis in Tilburg voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Tilburg Centrum, Tilburg Noord, Tilburg Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis tilburg',
    'computerhulp tilburg',
    'ict hulp tilburg',
    'computer reparatie tilburg',
    'laptop hulp tilburg',
    'it student tilburg',
    'betaalbare computerhulp tilburg',
    'computer problemen tilburg',
    'wifi problemen tilburg',
    'internet hulp tilburg',
    'computerhulp tilburg centrum',
    'ict hulp tilburg noord',
    'computer reparatie tilburg oost',
    'laptop hulp tilburg west',
    'student computerhulp tilburg zuid',
    'it hulp reeshof',
    'it service tilburg',
    'laptop reparatie tilburg',
    'it hulp aan huis tilburg'
  ],
  openGraph: {
    title: 'Student aan huis Tilburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Tilburg. Wij komen bij u thuis in Tilburg en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-tilburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Tilburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Tilburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Tilburg. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-tilburg'
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

export default function StudentAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

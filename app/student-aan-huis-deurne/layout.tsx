import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Deurne | Hulp met IT',
  description: 'ICT Student aan huis in Deurne voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Deurne Centrum, Liessel, Vlierden en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis deurne',
    'computerhulp deurne',
    'ict hulp deurne',
    'computer reparatie deurne',
    'laptop hulp deurne',
    'it student deurne',
    'betaalbare computerhulp deurne',
    'computer problemen deurne',
    'wifi problemen deurne',
    'internet hulp deurne',
    'computerhulp deurne centrum',
    'ict hulp liessel',
    'computer reparatie vlierden',
    'laptop hulp neerkant',
    'student computerhulp walsberg',
    'it hulp zeilberg',
    'it service deurne',
    'laptop reparatie deurne',
    'it hulp aan huis deurne'
  ],
  openGraph: {
    title: 'Student aan huis Deurne | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Deurne. Wij komen bij u thuis in Deurne en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-deurne',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Deurne - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Deurne | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Deurne. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-deurne'
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

export default function StudentAanHuisDeurneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

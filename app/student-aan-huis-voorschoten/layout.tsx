import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Voorschoten | Hulp met IT',
  description: 'ICT Student aan huis in Voorschoten voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Voorschoten Centrum, Voorschoten Noord, Voorschoten Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis voorschoten',
    'computerhulp voorschoten',
    'ict hulp voorschoten',
    'computer reparatie voorschoten',
    'laptop hulp voorschoten',
    'it student voorschoten',
    'betaalbare computerhulp voorschoten',
    'computer problemen voorschoten',
    'wifi problemen voorschoten',
    'internet hulp voorschoten',
    'computerhulp voorschoten centrum',
    'ict hulp voorschoten noord',
    'computer reparatie voorschoten zuid',
    'laptop hulp componistenbuurt',
    'student computerhulp krimwijk',
    'it hulp vlietwijk',
    'it service voorschoten',
    'laptop reparatie voorschoten',
    'it hulp aan huis voorschoten'
  ],
  openGraph: {
    title: 'Student aan huis Voorschoten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Voorschoten. Wij komen bij u thuis in Voorschoten en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-voorschoten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Voorschoten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Voorschoten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Voorschoten. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-voorschoten'
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

export default function StudentAanHuisVoorschotenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

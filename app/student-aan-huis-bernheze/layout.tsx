import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bernheze | Hulp met IT',
  description: 'ICT Student aan huis in Bernheze voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Heesch, Nistelrode, Loosbroek en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bernheze',
    'computerhulp bernheze',
    'ict hulp bernheze',
    'computer reparatie bernheze',
    'laptop hulp bernheze',
    'it student bernheze',
    'betaalbare computerhulp bernheze',
    'computer problemen bernheze',
    'wifi problemen bernheze',
    'internet hulp bernheze',
    'computerhulp heesch',
    'ict hulp nistelrode',
    'computer reparatie loosbroek',
    'laptop hulp vorstenbosch',
    'student computerhulp heeswijk-dinther',
    'it hulp middelrode',
    'it service bernheze',
    'laptop reparatie bernheze',
    'it hulp aan huis bernheze'
  ],
  openGraph: {
    title: 'Student aan huis Bernheze | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bernheze. Wij komen bij u thuis in Bernheze en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bernheze',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bernheze - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bernheze | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bernheze. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bernheze'
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

export default function StudentAanHuisBernhezeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

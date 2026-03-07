import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Loon op Zand | Hulp met IT',
  description: 'ICT Student aan huis in Loon op Zand voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Kaatsheuvel, Loon op Zand dorp, De Moer en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis loon op zand',
    'computerhulp loon op zand',
    'ict hulp loon op zand',
    'computer reparatie loon op zand',
    'laptop hulp loon op zand',
    'it student loon op zand',
    'betaalbare computerhulp loon op zand',
    'computer problemen loon op zand',
    'wifi problemen loon op zand',
    'internet hulp loon op zand',
    'computerhulp kaatsheuvel',
    'ict hulp loon op zand dorp',
    'computer reparatie de moer',
    'laptop hulp kaatsheuvel centrum',
    'student computerhulp kaatsheuvel zuid',
    'it hulp kaatsheuvel noord',
    'it service loon op zand',
    'laptop reparatie loon op zand',
    'it hulp aan huis loon op zand'
  ],
  openGraph: {
    title: 'Student aan huis Loon op Zand | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Loon op Zand. Wij komen bij u thuis in Loon op Zand en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-loon-op-zand',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Loon op Zand - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Loon op Zand | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Loon op Zand. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-loon-op-zand'
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

export default function StudentAanHuisLoonOpZandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

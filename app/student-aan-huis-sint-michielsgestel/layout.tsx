import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Sint-Michielsgestel | Hulp met IT',
  description: 'ICT Student aan huis in Sint-Michielsgestel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Sint-Michielsgestel, Berlicum, Den Dungen en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis sint-michielsgestel',
    'computerhulp sint-michielsgestel',
    'ict hulp sint-michielsgestel',
    'computer reparatie sint-michielsgestel',
    'laptop hulp sint-michielsgestel',
    'it student sint-michielsgestel',
    'betaalbare computerhulp sint-michielsgestel',
    'computer problemen sint-michielsgestel',
    'wifi problemen sint-michielsgestel',
    'internet hulp sint-michielsgestel',
    'computerhulp sint-michielsgestel',
    'ict hulp berlicum',
    'computer reparatie den dungen',
    'laptop hulp gemonde',
    'student computerhulp middelrode',
    'it hulp sint-michielsgestel centrum',
    'it service sint-michielsgestel',
    'laptop reparatie sint-michielsgestel',
    'it hulp aan huis sint-michielsgestel'
  ],
  openGraph: {
    title: 'Student aan huis Sint-Michielsgestel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Sint-Michielsgestel. Wij komen bij u thuis in Sint-Michielsgestel en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-sint-michielsgestel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Sint-Michielsgestel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Sint-Michielsgestel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Sint-Michielsgestel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-sint-michielsgestel'
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

export default function StudentAanHuisSintMichielsgestelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

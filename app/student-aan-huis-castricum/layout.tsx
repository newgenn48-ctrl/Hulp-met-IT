import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Castricum | Hulp met IT',
  description: 'ICT Student aan huis in Castricum voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Castricum, Limmen, Akersloot en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis castricum',
    'computerhulp castricum',
    'ict hulp castricum',
    'computer reparatie castricum',
    'laptop hulp castricum',
    'it student castricum',
    'betaalbare computerhulp castricum',
    'computer problemen castricum',
    'wifi problemen castricum',
    'internet hulp castricum',
    'computerhulp castricum',
    'ict hulp limmen',
    'computer reparatie akersloot',
    'laptop hulp bakkum',
    'student computerhulp de woude',
    'it hulp castricum-oost',
    'it service castricum',
    'laptop reparatie castricum',
    'it hulp aan huis castricum'
  ],
  openGraph: {
    title: 'Student aan huis Castricum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Castricum. Wij komen bij u thuis in Castricum en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-castricum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Castricum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Castricum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Castricum. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-castricum'
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

export default function StudentAanHuisCastricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

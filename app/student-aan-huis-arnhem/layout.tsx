import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Arnhem | Hulp met IT',
  description: 'ICT Student aan huis in Arnhem voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Arnhem Centrum, Arnhem Noord, Arnhem Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis arnhem',
    'computerhulp arnhem',
    'ict hulp arnhem',
    'computer reparatie arnhem',
    'laptop hulp arnhem',
    'it student arnhem',
    'betaalbare computerhulp arnhem',
    'computer problemen arnhem',
    'wifi problemen arnhem',
    'internet hulp arnhem',
    'computerhulp arnhem centrum',
    'ict hulp arnhem noord',
    'computer reparatie arnhem oost',
    'laptop hulp arnhem west',
    'student computerhulp arnhem zuid',
    'it hulp presikhaaf',
    'it service arnhem',
    'laptop reparatie arnhem',
    'it hulp aan huis arnhem'
  ],
  openGraph: {
    title: 'Student aan huis Arnhem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Arnhem. Wij komen bij u thuis in Arnhem en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-arnhem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Arnhem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Arnhem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Arnhem. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-arnhem'
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

export default function StudentAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Delft | Hulp met IT',
  description: 'ICT Student aan huis in Delft voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Delft Centrum, Delft Noord, Delft Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis delft',
    'computerhulp delft',
    'ict hulp delft',
    'computer reparatie delft',
    'laptop hulp delft',
    'it student delft',
    'betaalbare computerhulp delft',
    'computer problemen delft',
    'wifi problemen delft',
    'internet hulp delft',
    'computerhulp delft centrum',
    'ict hulp delft noord',
    'computer reparatie delft oost',
    'laptop hulp delft west',
    'student computerhulp delft zuid',
    'it hulp tanthof',
    'it service delft',
    'laptop reparatie delft',
    'it hulp aan huis delft'
  ],
  openGraph: {
    title: 'Student aan huis Delft | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Delft. Wij komen bij u thuis in Delft en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-delft',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Delft - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Delft | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Delft. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-delft'
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

export default function StudentAanHuisDelftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

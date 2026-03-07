import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hoofddorp | Hulp met IT',
  description: 'ICT Student aan huis in Hoofddorp voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hoofddorp Centrum, Floriande, Toolenburg en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hoofddorp',
    'computerhulp hoofddorp',
    'ict hulp hoofddorp',
    'computer reparatie hoofddorp',
    'laptop hulp hoofddorp',
    'it student hoofddorp',
    'betaalbare computerhulp hoofddorp',
    'computer problemen hoofddorp',
    'wifi problemen hoofddorp',
    'internet hulp hoofddorp',
    'computerhulp hoofddorp centrum',
    'ict hulp floriande',
    'computer reparatie toolenburg',
    'laptop hulp bornholm',
    'student computerhulp pax',
    'it hulp nieuw-vennep',
    'it service hoofddorp',
    'laptop reparatie hoofddorp',
    'it hulp aan huis hoofddorp'
  ],
  openGraph: {
    title: 'Student aan huis Hoofddorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoofddorp. Wij komen bij u thuis in Hoofddorp en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hoofddorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hoofddorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hoofddorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoofddorp. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hoofddorp'
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

export default function StudentAanHuisHoofddorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Oosterhout | Hulp met IT',
  description: 'ICT Student aan huis in Oosterhout voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Oosterhout Centrum, Oosterhout Noord, Oosterhout Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis oosterhout',
    'computerhulp oosterhout',
    'ict hulp oosterhout',
    'computer reparatie oosterhout',
    'laptop hulp oosterhout',
    'it student oosterhout',
    'betaalbare computerhulp oosterhout',
    'computer problemen oosterhout',
    'wifi problemen oosterhout',
    'internet hulp oosterhout',
    'computerhulp oosterhout centrum',
    'ict hulp oosterhout noord',
    'computer reparatie oosterhout oost',
    'laptop hulp slotjes',
    'student computerhulp vrachelen',
    'it hulp dommelbergen',
    'it service oosterhout',
    'laptop reparatie oosterhout',
    'it hulp aan huis oosterhout'
  ],
  openGraph: {
    title: 'Student aan huis Oosterhout | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oosterhout. Wij komen bij u thuis in Oosterhout en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-oosterhout',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Oosterhout - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Oosterhout | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oosterhout. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-oosterhout'
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

export default function StudentAanHuisOosterhoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

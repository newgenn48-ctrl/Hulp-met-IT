import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Haarlem | Hulp met IT',
  description: 'ICT Student aan huis in Haarlem voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Haarlem Centrum, Haarlem Noord, Haarlem Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis haarlem',
    'computerhulp haarlem',
    'ict hulp haarlem',
    'computer reparatie haarlem',
    'laptop hulp haarlem',
    'it student haarlem',
    'betaalbare computerhulp haarlem',
    'computer problemen haarlem',
    'wifi problemen haarlem',
    'internet hulp haarlem',
    'computerhulp haarlem centrum',
    'ict hulp haarlem noord',
    'computer reparatie haarlem oost',
    'laptop hulp haarlem zuid',
    'student computerhulp schalkwijk',
    'it hulp botermarkt',
    'it service haarlem',
    'laptop reparatie haarlem',
    'it hulp aan huis haarlem'
  ],
  openGraph: {
    title: 'Student aan huis Haarlem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Haarlem. Wij komen bij u thuis in Haarlem en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-haarlem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Haarlem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Haarlem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Haarlem. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-haarlem'
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

export default function StudentAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

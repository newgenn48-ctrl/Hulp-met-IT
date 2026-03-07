import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Uden | Hulp met IT',
  description: 'ICT Student aan huis in Uden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Uden Centrum, Uden Noord, Uden Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis uden',
    'computerhulp uden',
    'ict hulp uden',
    'computer reparatie uden',
    'laptop hulp uden',
    'it student uden',
    'betaalbare computerhulp uden',
    'computer problemen uden',
    'wifi problemen uden',
    'internet hulp uden',
    'computerhulp uden centrum',
    'ict hulp uden noord',
    'computer reparatie uden zuid',
    'laptop hulp uden oost',
    'student computerhulp volkel',
    'it hulp odiliapeel',
    'it service uden',
    'laptop reparatie uden',
    'it hulp aan huis uden'
  ],
  openGraph: {
    title: 'Student aan huis Uden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Uden. Wij komen bij u thuis in Uden en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-uden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Uden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Uden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Uden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-uden'
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

export default function StudentAanHuisUdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

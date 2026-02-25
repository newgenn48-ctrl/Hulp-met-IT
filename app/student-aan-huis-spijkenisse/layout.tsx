import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Spijkenisse | Hulp met IT',
  description: 'ICT Student aan huis in Spijkenisse voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Spijkenisse Centrum, De Akkers, Waterland en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis spijkenisse',
    'computerhulp spijkenisse',
    'ict hulp spijkenisse',
    'computer reparatie spijkenisse',
    'laptop hulp spijkenisse',
    'it student spijkenisse',
    'betaalbare computerhulp spijkenisse',
    'computer problemen spijkenisse',
    'wifi problemen spijkenisse',
    'internet hulp spijkenisse',
    'computerhulp spijkenisse centrum',
    'ict hulp de akkers',
    'computer reparatie waterland',
    'laptop hulp groenewoud',
    'student computerhulp maaswijk',
    'it hulp vogelenzang',
    'it service spijkenisse',
    'laptop reparatie spijkenisse',
    'it hulp aan huis spijkenisse'
  ],
  openGraph: {
    title: 'Student aan huis Spijkenisse | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Spijkenisse. Wij komen bij u thuis in Spijkenisse en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-spijkenisse',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Spijkenisse - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Spijkenisse | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Spijkenisse. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-spijkenisse'
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

export default function StudentAanHuisSpijkenisseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Westland | Hulp met IT',
  description: 'ICT Student aan huis in Westland voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Naaldwijk, Monster, \'s-Gravenzande en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis westland',
    'computerhulp westland',
    'ict hulp westland',
    'computer reparatie westland',
    'laptop hulp westland',
    'it student westland',
    'betaalbare computerhulp westland',
    'computer problemen westland',
    'wifi problemen westland',
    'internet hulp westland',
    'computerhulp naaldwijk',
    'ict hulp monster',
    'computer reparatie \'s-gravenzande',
    'laptop hulp wateringen',
    'student computerhulp de lier',
    'it hulp honselersdijk',
    'it service westland',
    'laptop reparatie westland',
    'it hulp aan huis westland'
  ],
  openGraph: {
    title: 'Student aan huis Westland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Westland. Wij komen bij u thuis in Westland en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-westland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Westland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Westland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Westland. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-westland'
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

export default function StudentAanHuisWestlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Geertruidenberg | Hulp met IT',
  description: 'ICT Student aan huis in Geertruidenberg voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Geertruidenberg Centrum, Raamsdonksveer, Raamsdonk en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis geertruidenberg',
    'computerhulp geertruidenberg',
    'ict hulp geertruidenberg',
    'computer reparatie geertruidenberg',
    'laptop hulp geertruidenberg',
    'it student geertruidenberg',
    'betaalbare computerhulp geertruidenberg',
    'computer problemen geertruidenberg',
    'wifi problemen geertruidenberg',
    'internet hulp geertruidenberg',
    'computerhulp geertruidenberg centrum',
    'ict hulp raamsdonksveer',
    'computer reparatie raamsdonk',
    'laptop hulp raamsdonksveer centrum',
    'student computerhulp geertruidenberg zuid',
    'it hulp raamsdonksveer noord',
    'it service geertruidenberg',
    'laptop reparatie geertruidenberg',
    'it hulp aan huis geertruidenberg'
  ],
  openGraph: {
    title: 'Student aan huis Geertruidenberg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Geertruidenberg. Wij komen bij u thuis in Geertruidenberg en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-geertruidenberg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Geertruidenberg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Geertruidenberg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Geertruidenberg. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-geertruidenberg'
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

export default function StudentAanHuisGeertruidenbergLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

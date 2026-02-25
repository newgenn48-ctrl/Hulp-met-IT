import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Someren | Hulp met IT',
  description: 'ICT Student aan huis in Someren voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Someren Centrum, Someren-Eind, Someren-Heide en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis someren',
    'computerhulp someren',
    'ict hulp someren',
    'computer reparatie someren',
    'laptop hulp someren',
    'it student someren',
    'betaalbare computerhulp someren',
    'computer problemen someren',
    'wifi problemen someren',
    'internet hulp someren',
    'computerhulp someren centrum',
    'ict hulp someren-eind',
    'computer reparatie someren-heide',
    'laptop hulp lierop',
    'student computerhulp someren noord',
    'it hulp someren zuid',
    'it service someren',
    'laptop reparatie someren',
    'it hulp aan huis someren'
  ],
  openGraph: {
    title: 'Student aan huis Someren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Someren. Wij komen bij u thuis in Someren en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-someren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Someren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Someren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Someren. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-someren'
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

export default function StudentAanHuisSomerenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

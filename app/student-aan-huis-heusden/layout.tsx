import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Heusden | Hulp met IT',
  description: 'ICT Student aan huis in Heusden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vlijmen, Drunen, Heusden Vesting en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis heusden',
    'computerhulp heusden',
    'ict hulp heusden',
    'computer reparatie heusden',
    'laptop hulp heusden',
    'it student heusden',
    'betaalbare computerhulp heusden',
    'computer problemen heusden',
    'wifi problemen heusden',
    'internet hulp heusden',
    'computerhulp vlijmen',
    'ict hulp drunen',
    'computer reparatie heusden vesting',
    'laptop hulp elshout',
    'student computerhulp haarsteeg',
    'it hulp nieuwkuijk',
    'it service heusden',
    'laptop reparatie heusden',
    'it hulp aan huis heusden'
  ],
  openGraph: {
    title: 'Student aan huis Heusden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heusden. Wij komen bij u thuis in Heusden en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-heusden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Heusden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Heusden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heusden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-heusden'
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

export default function StudentAanHuisHeusdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

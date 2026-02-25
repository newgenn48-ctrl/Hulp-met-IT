import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Koggenland | Hulp met IT',
  description: 'ICT Student aan huis in Koggenland voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Obdam, De Goorn, Berkhout en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis koggenland',
    'computerhulp koggenland',
    'ict hulp koggenland',
    'computer reparatie koggenland',
    'laptop hulp koggenland',
    'it student koggenland',
    'betaalbare computerhulp koggenland',
    'computer problemen koggenland',
    'wifi problemen koggenland',
    'internet hulp koggenland',
    'computerhulp obdam',
    'ict hulp de goorn',
    'computer reparatie berkhout',
    'laptop hulp ursem',
    'student computerhulp spierdijk',
    'it hulp hensbroek',
    'it service koggenland',
    'laptop reparatie koggenland',
    'it hulp aan huis koggenland'
  ],
  openGraph: {
    title: 'Student aan huis Koggenland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Koggenland. Wij komen bij u thuis in Koggenland en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-koggenland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Koggenland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Koggenland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Koggenland. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-koggenland'
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

export default function StudentAanHuisKoggenlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

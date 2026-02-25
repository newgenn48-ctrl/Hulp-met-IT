import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Heemskerk | Hulp met IT',
  description: 'ICT Student aan huis in Heemskerk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Heemskerk, Assumburg, De Maer en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis heemskerk',
    'computerhulp heemskerk',
    'ict hulp heemskerk',
    'computer reparatie heemskerk',
    'laptop hulp heemskerk',
    'it student heemskerk',
    'betaalbare computerhulp heemskerk',
    'computer problemen heemskerk',
    'wifi problemen heemskerk',
    'internet hulp heemskerk',
    'computerhulp heemskerk',
    'ict hulp assumburg',
    'computer reparatie de maer',
    'laptop hulp waterakkers',
    'student computerhulp heemskerk-west',
    'it hulp heemskerk-oost',
    'it service heemskerk',
    'laptop reparatie heemskerk',
    'it hulp aan huis heemskerk'
  ],
  openGraph: {
    title: 'Student aan huis Heemskerk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heemskerk. Wij komen bij u thuis in Heemskerk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-heemskerk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Heemskerk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Heemskerk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heemskerk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-heemskerk'
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

export default function StudentAanHuisHeemskerkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

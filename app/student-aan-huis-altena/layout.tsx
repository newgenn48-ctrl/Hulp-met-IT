import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Altena | Hulp met IT',
  description: 'ICT Student aan huis in Altena voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Woudrichem, Werkendam, Almkerk en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis altena',
    'computerhulp altena',
    'ict hulp altena',
    'computer reparatie altena',
    'laptop hulp altena',
    'it student altena',
    'betaalbare computerhulp altena',
    'computer problemen altena',
    'wifi problemen altena',
    'internet hulp altena',
    'computerhulp woudrichem',
    'ict hulp werkendam',
    'computer reparatie almkerk',
    'laptop hulp sleeuwijk',
    'student computerhulp dussen',
    'it hulp hank',
    'it service altena',
    'laptop reparatie altena',
    'it hulp aan huis altena'
  ],
  openGraph: {
    title: 'Student aan huis Altena | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Altena. Wij komen bij u thuis in Altena en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-altena',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Altena - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Altena | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Altena. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-altena'
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

export default function StudentAanHuisAltenaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

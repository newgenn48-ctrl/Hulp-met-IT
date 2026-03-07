import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Dijk en Waard | Hulp met IT',
  description: 'ICT Student aan huis in Dijk en Waard voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Heerhugowaard, Langedijk, Sint Pancras en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis dijk en waard',
    'computerhulp dijk en waard',
    'ict hulp dijk en waard',
    'computer reparatie dijk en waard',
    'laptop hulp dijk en waard',
    'it student dijk en waard',
    'betaalbare computerhulp dijk en waard',
    'computer problemen dijk en waard',
    'wifi problemen dijk en waard',
    'internet hulp dijk en waard',
    'computerhulp heerhugowaard',
    'ict hulp langedijk',
    'computer reparatie sint pancras',
    'laptop hulp noord-scharwoude',
    'student computerhulp zuid-scharwoude',
    'it hulp broek op langedijk',
    'it service dijk en waard',
    'laptop reparatie dijk en waard',
    'it hulp aan huis dijk en waard'
  ],
  openGraph: {
    title: 'Student aan huis Dijk en Waard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dijk en Waard. Wij komen bij u thuis in Dijk en Waard en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-dijk-en-waard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Dijk en Waard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Dijk en Waard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dijk en Waard. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-dijk-en-waard'
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

export default function StudentAanHuisDijkEnWaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

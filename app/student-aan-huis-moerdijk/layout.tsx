import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Moerdijk | Hulp met IT',
  description: 'ICT Student aan huis in Moerdijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zevenbergen, Klundert, Fijnaart en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis moerdijk',
    'computerhulp moerdijk',
    'ict hulp moerdijk',
    'computer reparatie moerdijk',
    'laptop hulp moerdijk',
    'it student moerdijk',
    'betaalbare computerhulp moerdijk',
    'computer problemen moerdijk',
    'wifi problemen moerdijk',
    'internet hulp moerdijk',
    'computerhulp zevenbergen',
    'ict hulp klundert',
    'computer reparatie fijnaart',
    'laptop hulp willemstad',
    'student computerhulp standdaarbuiten',
    'it hulp moerdijk dorp',
    'it service moerdijk',
    'laptop reparatie moerdijk',
    'it hulp aan huis moerdijk'
  ],
  openGraph: {
    title: 'Student aan huis Moerdijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Moerdijk. Wij komen bij u thuis in Moerdijk en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-moerdijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Moerdijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Moerdijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Moerdijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-moerdijk'
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

export default function StudentAanHuisMoerdijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Oisterwijk | Hulp met IT',
  description: 'ICT Student aan huis in Oisterwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Oisterwijk Centrum, Moergestel, Heukelom en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis oisterwijk',
    'computerhulp oisterwijk',
    'ict hulp oisterwijk',
    'computer reparatie oisterwijk',
    'laptop hulp oisterwijk',
    'it student oisterwijk',
    'betaalbare computerhulp oisterwijk',
    'computer problemen oisterwijk',
    'wifi problemen oisterwijk',
    'internet hulp oisterwijk',
    'computerhulp oisterwijk centrum',
    'ict hulp moergestel',
    'computer reparatie heukelom',
    'laptop hulp oisterwijk noord',
    'student computerhulp oisterwijk zuid',
    'it hulp kerkhoven',
    'it service oisterwijk',
    'laptop reparatie oisterwijk',
    'it hulp aan huis oisterwijk'
  ],
  openGraph: {
    title: 'Student aan huis Oisterwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oisterwijk. Wij komen bij u thuis in Oisterwijk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-oisterwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Oisterwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Oisterwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oisterwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-oisterwijk'
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

export default function StudentAanHuisOisterwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

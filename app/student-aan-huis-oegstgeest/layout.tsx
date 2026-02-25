import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Oegstgeest | Hulp met IT',
  description: 'ICT Student aan huis in Oegstgeest voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Oegstgeest Centrum, Haaswijk, Poelgeest en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis oegstgeest',
    'computerhulp oegstgeest',
    'ict hulp oegstgeest',
    'computer reparatie oegstgeest',
    'laptop hulp oegstgeest',
    'it student oegstgeest',
    'betaalbare computerhulp oegstgeest',
    'computer problemen oegstgeest',
    'wifi problemen oegstgeest',
    'internet hulp oegstgeest',
    'computerhulp oegstgeest centrum',
    'ict hulp haaswijk',
    'computer reparatie poelgeest',
    'laptop hulp wilhelminapark',
    'student computerhulp nieuw-rhijngeest',
    'it hulp morsebel',
    'it service oegstgeest',
    'laptop reparatie oegstgeest',
    'it hulp aan huis oegstgeest'
  ],
  openGraph: {
    title: 'Student aan huis Oegstgeest | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oegstgeest. Wij komen bij u thuis in Oegstgeest en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-oegstgeest',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Oegstgeest - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Oegstgeest | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Oegstgeest. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-oegstgeest'
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

export default function StudentAanHuisOegstgeestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

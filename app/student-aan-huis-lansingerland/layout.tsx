import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Lansingerland | Hulp met IT',
  description: 'ICT Student aan huis in Lansingerland voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Berkel en Rodenrijs, Bergschenhoek, Bleiswijk en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis lansingerland',
    'computerhulp lansingerland',
    'ict hulp lansingerland',
    'computer reparatie lansingerland',
    'laptop hulp lansingerland',
    'it student lansingerland',
    'betaalbare computerhulp lansingerland',
    'computer problemen lansingerland',
    'wifi problemen lansingerland',
    'internet hulp lansingerland',
    'computerhulp berkel en rodenrijs',
    'ict hulp bergschenhoek',
    'computer reparatie bleiswijk',
    'laptop hulp noordeinde',
    'student computerhulp kruisweg',
    'it hulp rotte',
    'it service lansingerland',
    'laptop reparatie lansingerland',
    'it hulp aan huis lansingerland'
  ],
  openGraph: {
    title: 'Student aan huis Lansingerland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Lansingerland. Wij komen bij u thuis in Lansingerland en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-lansingerland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Lansingerland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Lansingerland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Lansingerland. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-lansingerland'
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

export default function StudentAanHuisLansingerlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

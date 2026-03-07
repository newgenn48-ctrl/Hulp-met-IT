import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Rijswijk | Hulp met IT',
  description: 'ICT Student aan huis in Rijswijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rijswijk Centrum, Rijswijk-Zuid, Ypenburg en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis rijswijk',
    'computerhulp rijswijk',
    'ict hulp rijswijk',
    'computer reparatie rijswijk',
    'laptop hulp rijswijk',
    'it student rijswijk',
    'betaalbare computerhulp rijswijk',
    'computer problemen rijswijk',
    'wifi problemen rijswijk',
    'internet hulp rijswijk',
    'computerhulp rijswijk centrum',
    'ict hulp rijswijk-zuid',
    'computer reparatie ypenburg',
    'laptop hulp plaspoelpolder',
    'student computerhulp bomenbuurt',
    'it hulp stervoorde',
    'it service rijswijk',
    'laptop reparatie rijswijk',
    'it hulp aan huis rijswijk'
  ],
  openGraph: {
    title: 'Student aan huis Rijswijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rijswijk. Wij komen bij u thuis in Rijswijk en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-rijswijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Rijswijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Rijswijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rijswijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-rijswijk'
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

export default function StudentAanHuisRijswijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

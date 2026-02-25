import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Alblasserdam | Hulp met IT',
  description: 'ICT Student aan huis in Alblasserdam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Alblasserdam Centrum, Souburgh, Babylonienburg en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis alblasserdam',
    'computerhulp alblasserdam',
    'ict hulp alblasserdam',
    'computer reparatie alblasserdam',
    'laptop hulp alblasserdam',
    'it student alblasserdam',
    'betaalbare computerhulp alblasserdam',
    'computer problemen alblasserdam',
    'wifi problemen alblasserdam',
    'internet hulp alblasserdam',
    'computerhulp alblasserdam centrum',
    'ict hulp souburgh',
    'computer reparatie babylonienburg',
    'laptop hulp kinderdijk-omgeving',
    'student computerhulp blokweer',
    'it hulp alblasserdam-west',
    'it service alblasserdam',
    'laptop reparatie alblasserdam',
    'it hulp aan huis alblasserdam'
  ],
  openGraph: {
    title: 'Student aan huis Alblasserdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alblasserdam. Wij komen bij u thuis in Alblasserdam en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-alblasserdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Alblasserdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Alblasserdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alblasserdam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-alblasserdam'
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

export default function StudentAanHuisAlblasserdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

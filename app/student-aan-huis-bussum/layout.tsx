import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bussum | Hulp met IT',
  description: 'ICT Student aan huis in Bussum voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bussum Centrum, Bussum Noord, Bussum Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bussum',
    'computerhulp bussum',
    'ict hulp bussum',
    'computer reparatie bussum',
    'laptop hulp bussum',
    'it student bussum',
    'betaalbare computerhulp bussum',
    'computer problemen bussum',
    'wifi problemen bussum',
    'internet hulp bussum',
    'computerhulp bussum centrum',
    'ict hulp bussum noord',
    'computer reparatie bussum oost',
    'laptop hulp bussum west',
    'student computerhulp bussum zuid',
    'it hulp brink',
    'it service bussum',
    'laptop reparatie bussum',
    'it hulp aan huis bussum'
  ],
  openGraph: {
    title: 'Student aan huis Bussum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bussum. Wij komen bij u thuis in Bussum en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bussum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bussum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bussum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bussum. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bussum'
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

export default function StudentAanHuisBussumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hilversum | Hulp met IT',
  description: 'ICT Student aan huis in Hilversum voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hilversum Centrum, Hilversum Noord, Hilversum Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hilversum',
    'computerhulp hilversum',
    'ict hulp hilversum',
    'computer reparatie hilversum',
    'laptop hulp hilversum',
    'it student hilversum',
    'betaalbare computerhulp hilversum',
    'computer problemen hilversum',
    'wifi problemen hilversum',
    'internet hulp hilversum',
    'computerhulp hilversum centrum',
    'ict hulp hilversum noord',
    'computer reparatie hilversum oost',
    'laptop hulp hilversum west',
    'student computerhulp hilversum zuid',
    'it hulp kerkelanden',
    'it service hilversum',
    'laptop reparatie hilversum',
    'it hulp aan huis hilversum'
  ],
  openGraph: {
    title: 'Student aan huis Hilversum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hilversum. Wij komen bij u thuis in Hilversum en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hilversum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hilversum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hilversum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hilversum. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hilversum'
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

export default function StudentAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

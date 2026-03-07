import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zaandam | Hulp met IT',
  description: 'ICT Student aan huis in Zaandam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zaandam Centrum, Zaandam Zuid, Zaandam Noord en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zaandam',
    'computerhulp zaandam',
    'ict hulp zaandam',
    'computer reparatie zaandam',
    'laptop hulp zaandam',
    'it student zaandam',
    'betaalbare computerhulp zaandam',
    'computer problemen zaandam',
    'wifi problemen zaandam',
    'internet hulp zaandam',
    'computerhulp zaandam centrum',
    'ict hulp zaandam zuid',
    'computer reparatie zaandam noord',
    'laptop hulp wormerveer',
    'student computerhulp krommenie',
    'it hulp assendelft',
    'it service zaandam',
    'laptop reparatie zaandam',
    'it hulp aan huis zaandam'
  ],
  openGraph: {
    title: 'Student aan huis Zaandam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zaandam. Wij komen bij u thuis in Zaandam en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zaandam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zaandam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zaandam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zaandam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zaandam'
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

export default function StudentAanHuisZaandamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

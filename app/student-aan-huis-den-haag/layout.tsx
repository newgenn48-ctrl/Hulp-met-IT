import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Haag | Hulp met IT',
  description: 'ICT Student aan huis in Den Haag voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Den Haag Centrum, Scheveningen, Benoordenhout en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis den haag',
    'computerhulp den haag',
    'ict hulp den haag',
    'computer reparatie den haag',
    'laptop hulp den haag',
    'it student den haag',
    'betaalbare computerhulp den haag',
    'computer problemen den haag',
    'wifi problemen den haag',
    'internet hulp den haag',
    'computerhulp den haag centrum',
    'ict hulp scheveningen',
    'computer reparatie benoordenhout',
    'laptop hulp haagse bos',
    'student computerhulp laak',
    'it hulp escamp',
    'it service den haag',
    'laptop reparatie den haag',
    'it hulp aan huis den haag'
  ],
  openGraph: {
    title: 'Student aan huis Den Haag | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Haag. Wij komen bij u thuis in Den Haag en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-den-haag',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Den Haag - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Den Haag | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Haag. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-den-haag'
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

export default function StudentAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

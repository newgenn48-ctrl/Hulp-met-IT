import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Rucphen | Hulp met IT',
  description: 'ICT Student aan huis in Rucphen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rucphen, Sprundel, Sint Willebrord en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis rucphen',
    'computerhulp rucphen',
    'ict hulp rucphen',
    'computer reparatie rucphen',
    'laptop hulp rucphen',
    'it student rucphen',
    'betaalbare computerhulp rucphen',
    'computer problemen rucphen',
    'wifi problemen rucphen',
    'internet hulp rucphen',
    'computerhulp rucphen',
    'ict hulp sprundel',
    'computer reparatie sint willebrord',
    'laptop hulp schijf',
    'student computerhulp rucphen centrum',
    'it hulp vorenseinde',
    'it service rucphen',
    'laptop reparatie rucphen',
    'it hulp aan huis rucphen'
  ],
  openGraph: {
    title: 'Student aan huis Rucphen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rucphen. Wij komen bij u thuis in Rucphen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-rucphen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Rucphen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Rucphen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rucphen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-rucphen'
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

export default function StudentAanHuisRucphenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

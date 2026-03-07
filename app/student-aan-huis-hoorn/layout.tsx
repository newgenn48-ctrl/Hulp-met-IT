import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hoorn | Hulp met IT',
  description: 'ICT Student aan huis in Hoorn voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hoorn Centrum, Hoorn Noord, Kersenboogerd en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hoorn',
    'computerhulp hoorn',
    'ict hulp hoorn',
    'computer reparatie hoorn',
    'laptop hulp hoorn',
    'it student hoorn',
    'betaalbare computerhulp hoorn',
    'computer problemen hoorn',
    'wifi problemen hoorn',
    'internet hulp hoorn',
    'computerhulp hoorn centrum',
    'ict hulp hoorn noord',
    'computer reparatie kersenboogerd',
    'laptop hulp risdam',
    'student computerhulp grote waal',
    'it hulp blokker',
    'it service hoorn',
    'laptop reparatie hoorn',
    'it hulp aan huis hoorn'
  ],
  openGraph: {
    title: 'Student aan huis Hoorn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoorn. Wij komen bij u thuis in Hoorn en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hoorn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hoorn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hoorn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoorn. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hoorn'
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

export default function StudentAanHuisHoornLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

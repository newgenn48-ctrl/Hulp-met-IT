import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Amstelveen | Hulp met IT',
  description: 'ICT Student aan huis in Amstelveen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Amstelveen Centrum, Amstelveen Noord, Amstelveen Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis amstelveen',
    'computerhulp amstelveen',
    'ict hulp amstelveen',
    'computer reparatie amstelveen',
    'laptop hulp amstelveen',
    'it student amstelveen',
    'betaalbare computerhulp amstelveen',
    'computer problemen amstelveen',
    'wifi problemen amstelveen',
    'internet hulp amstelveen',
    'computerhulp amstelveen centrum',
    'ict hulp amstelveen noord',
    'computer reparatie amstelveen zuid',
    'laptop hulp westwijk',
    'student computerhulp bovenkerk',
    'it hulp nes aan de amstel',
    'it service amstelveen',
    'laptop reparatie amstelveen',
    'it hulp aan huis amstelveen'
  ],
  openGraph: {
    title: 'Student aan huis Amstelveen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amstelveen. Wij komen bij u thuis in Amstelveen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-amstelveen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Amstelveen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Amstelveen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amstelveen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-amstelveen'
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

export default function StudentAanHuisAmstelveenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

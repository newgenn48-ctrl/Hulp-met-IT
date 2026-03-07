import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis IJsselstein | Hulp met IT',
  description: 'ICT Student aan huis in IJsselstein voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in IJsselstein Centrum, IJsselstein Noord, IJsselstein Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis ijsselstein',
    'computerhulp ijsselstein',
    'ict hulp ijsselstein',
    'computer reparatie ijsselstein',
    'laptop hulp ijsselstein',
    'it student ijsselstein',
    'betaalbare computerhulp ijsselstein',
    'computer problemen ijsselstein',
    'wifi problemen ijsselstein',
    'internet hulp ijsselstein',
    'computerhulp ijsselstein centrum',
    'ict hulp ijsselstein noord',
    'computer reparatie ijsselstein zuid',
    'laptop hulp zenderpark',
    'student computerhulp achterveld',
    'it hulp groenvliet',
    'it service ijsselstein',
    'laptop reparatie ijsselstein',
    'it hulp aan huis ijsselstein'
  ],
  openGraph: {
    title: 'Student aan huis IJsselstein | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in IJsselstein. Wij komen bij u thuis in IJsselstein en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-ijsselstein',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis IJsselstein - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis IJsselstein | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in IJsselstein. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-ijsselstein'
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

export default function StudentAanHuisIjsselsteinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

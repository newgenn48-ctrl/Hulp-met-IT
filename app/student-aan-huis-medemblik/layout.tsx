import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Medemblik | Hulp met IT',
  description: 'ICT Student aan huis in Medemblik voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Medemblik, Wognum, Nibbixwoud en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis medemblik',
    'computerhulp medemblik',
    'ict hulp medemblik',
    'computer reparatie medemblik',
    'laptop hulp medemblik',
    'it student medemblik',
    'betaalbare computerhulp medemblik',
    'computer problemen medemblik',
    'wifi problemen medemblik',
    'internet hulp medemblik',
    'computerhulp medemblik',
    'ict hulp wognum',
    'computer reparatie nibbixwoud',
    'laptop hulp opperdoes',
    'student computerhulp abbekerk',
    'it hulp benningbroek',
    'it service medemblik',
    'laptop reparatie medemblik',
    'it hulp aan huis medemblik'
  ],
  openGraph: {
    title: 'Student aan huis Medemblik | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Medemblik. Wij komen bij u thuis in Medemblik en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-medemblik',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Medemblik - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Medemblik | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Medemblik. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-medemblik'
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

export default function StudentAanHuisMedemblikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

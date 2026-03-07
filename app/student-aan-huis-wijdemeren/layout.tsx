import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Wijdemeren | Hulp met IT',
  description: 'ICT Student aan huis in Wijdemeren voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Loosdrecht, Nederhorst den Berg, Kortenhoef en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis wijdemeren',
    'computerhulp wijdemeren',
    'ict hulp wijdemeren',
    'computer reparatie wijdemeren',
    'laptop hulp wijdemeren',
    'it student wijdemeren',
    'betaalbare computerhulp wijdemeren',
    'computer problemen wijdemeren',
    'wifi problemen wijdemeren',
    'internet hulp wijdemeren',
    'computerhulp loosdrecht',
    'ict hulp nederhorst den berg',
    'computer reparatie kortenhoef',
    'laptop hulp ankeveen',
    'student computerhulp breukeleveen',
    'it hulp nieuw-loosdrecht',
    'it service wijdemeren',
    'laptop reparatie wijdemeren',
    'it hulp aan huis wijdemeren'
  ],
  openGraph: {
    title: 'Student aan huis Wijdemeren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wijdemeren. Wij komen bij u thuis in Wijdemeren en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-wijdemeren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Wijdemeren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Wijdemeren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wijdemeren. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-wijdemeren'
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

export default function StudentAanHuisWijdemerenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis De Bilt | Hulp met IT',
  description: 'ICT Student aan huis in De Bilt voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in De Bilt Centrum, Bilthoven, Groenekan en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis de bilt',
    'computerhulp de bilt',
    'ict hulp de bilt',
    'computer reparatie de bilt',
    'laptop hulp de bilt',
    'it student de bilt',
    'betaalbare computerhulp de bilt',
    'computer problemen de bilt',
    'wifi problemen de bilt',
    'internet hulp de bilt',
    'computerhulp de bilt centrum',
    'ict hulp bilthoven',
    'computer reparatie groenekan',
    'laptop hulp westbroek',
    'student computerhulp hollandsche rading',
    'it hulp maartensdijk',
    'it service de bilt',
    'laptop reparatie de bilt',
    'it hulp aan huis de bilt'
  ],
  openGraph: {
    title: 'Student aan huis De Bilt | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in De Bilt. Wij komen bij u thuis in De Bilt en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-de-bilt',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis De Bilt - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis De Bilt | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in De Bilt. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-de-bilt'
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

export default function StudentAanHuisDeBiltLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Boxtel | Hulp met IT',
  description: 'ICT Student aan huis in Boxtel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Boxtel Centrum, Boxtel Noord, Boxtel Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis boxtel',
    'computerhulp boxtel',
    'ict hulp boxtel',
    'computer reparatie boxtel',
    'laptop hulp boxtel',
    'it student boxtel',
    'betaalbare computerhulp boxtel',
    'computer problemen boxtel',
    'wifi problemen boxtel',
    'internet hulp boxtel',
    'computerhulp boxtel centrum',
    'ict hulp boxtel noord',
    'computer reparatie boxtel zuid',
    'laptop hulp liempde',
    'student computerhulp lennisheuvel',
    'it hulp esch',
    'it service boxtel',
    'laptop reparatie boxtel',
    'it hulp aan huis boxtel'
  ],
  openGraph: {
    title: 'Student aan huis Boxtel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Boxtel. Wij komen bij u thuis in Boxtel en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-boxtel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Boxtel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Boxtel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Boxtel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-boxtel'
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

export default function StudentAanHuisBoxtelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

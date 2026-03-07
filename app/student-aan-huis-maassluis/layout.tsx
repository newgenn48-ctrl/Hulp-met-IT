import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Maassluis | Hulp met IT',
  description: 'ICT Student aan huis in Maassluis voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Maassluis Centrum, Koningshoek, Sluispolder en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis maassluis',
    'computerhulp maassluis',
    'ict hulp maassluis',
    'computer reparatie maassluis',
    'laptop hulp maassluis',
    'it student maassluis',
    'betaalbare computerhulp maassluis',
    'computer problemen maassluis',
    'wifi problemen maassluis',
    'internet hulp maassluis',
    'computerhulp maassluis centrum',
    'ict hulp koningshoek',
    'computer reparatie sluispolder',
    'laptop hulp het balkon',
    'student computerhulp wipperspark',
    'it hulp kapelpolder',
    'it service maassluis',
    'laptop reparatie maassluis',
    'it hulp aan huis maassluis'
  ],
  openGraph: {
    title: 'Student aan huis Maassluis | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Maassluis. Wij komen bij u thuis in Maassluis en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-maassluis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Maassluis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Maassluis | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Maassluis. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-maassluis'
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

export default function StudentAanHuisMaassluisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Utrechtse Heuvelrug | Hulp met IT',
  description: 'ICT Student aan huis in Utrechtse Heuvelrug voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Doorn, Driebergen-Rijsenburg, Amerongen en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis utrechtse heuvelrug',
    'computerhulp utrechtse heuvelrug',
    'ict hulp utrechtse heuvelrug',
    'computer reparatie utrechtse heuvelrug',
    'laptop hulp utrechtse heuvelrug',
    'it student utrechtse heuvelrug',
    'betaalbare computerhulp utrechtse heuvelrug',
    'computer problemen utrechtse heuvelrug',
    'wifi problemen utrechtse heuvelrug',
    'internet hulp utrechtse heuvelrug',
    'computerhulp doorn',
    'ict hulp driebergen-rijsenburg',
    'computer reparatie amerongen',
    'laptop hulp maarn',
    'student computerhulp leersum',
    'it hulp overberg',
    'it service utrechtse heuvelrug',
    'laptop reparatie utrechtse heuvelrug',
    'it hulp aan huis utrechtse heuvelrug'
  ],
  openGraph: {
    title: 'Student aan huis Utrechtse Heuvelrug | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Utrechtse Heuvelrug. Wij komen bij u thuis in Utrechtse Heuvelrug en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-utrechtse-heuvelrug',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Utrechtse Heuvelrug - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Utrechtse Heuvelrug | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Utrechtse Heuvelrug. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-utrechtse-heuvelrug'
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

export default function StudentAanHuisUtrechtseHeuvelrugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

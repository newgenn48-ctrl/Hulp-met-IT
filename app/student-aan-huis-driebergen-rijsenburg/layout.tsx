import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Driebergen-Rijsenburg | Hulp met IT',
  description: 'ICT Student aan huis in Driebergen-Rijsenburg voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Driebergen Centrum, Rijsenburg, Driebergen-Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis driebergen-rijsenburg',
    'computerhulp driebergen-rijsenburg',
    'ict hulp driebergen-rijsenburg',
    'computer reparatie driebergen-rijsenburg',
    'laptop hulp driebergen-rijsenburg',
    'it student driebergen-rijsenburg',
    'betaalbare computerhulp driebergen-rijsenburg',
    'computer problemen driebergen-rijsenburg',
    'wifi problemen driebergen-rijsenburg',
    'internet hulp driebergen-rijsenburg',
    'computerhulp driebergen centrum',
    'ict hulp rijsenburg',
    'computer reparatie driebergen-zuid',
    'laptop hulp driebergen-noord',
    'student computerhulp doorn',
    'it hulp austerlitz',
    'it service driebergen-rijsenburg',
    'laptop reparatie driebergen-rijsenburg',
    'it hulp aan huis driebergen-rijsenburg'
  ],
  openGraph: {
    title: 'Student aan huis Driebergen-Rijsenburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Driebergen-Rijsenburg. Wij komen bij u thuis in Driebergen-Rijsenburg en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-driebergen-rijsenburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Driebergen-Rijsenburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Driebergen-Rijsenburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Driebergen-Rijsenburg. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-driebergen-rijsenburg'
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

export default function StudentAanHuisDriebergenRijsenburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Diemen | Hulp met IT',
  description: 'ICT Student aan huis in Diemen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Diemen-Noord, Diemen-Zuid, Diemen-Centrum en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis diemen',
    'computerhulp diemen',
    'ict hulp diemen',
    'computer reparatie diemen',
    'laptop hulp diemen',
    'it student diemen',
    'betaalbare computerhulp diemen',
    'computer problemen diemen',
    'wifi problemen diemen',
    'internet hulp diemen',
    'computerhulp diemen-noord',
    'ict hulp diemen-zuid',
    'computer reparatie diemen-centrum',
    'laptop hulp holland park',
    'student computerhulp plantage de sniep',
    'it hulp buitenlust',
    'it service diemen',
    'laptop reparatie diemen',
    'it hulp aan huis diemen'
  ],
  openGraph: {
    title: 'Student aan huis Diemen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Diemen. Wij komen bij u thuis in Diemen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-diemen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Diemen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Diemen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Diemen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-diemen'
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

export default function StudentAanHuisDiemenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

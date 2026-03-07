import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bergen op Zoom | Hulp met IT',
  description: 'ICT Student aan huis in Bergen op Zoom voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bergen op Zoom Centrum, Bergen op Zoom Noord, Bergen op Zoom Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bergen op zoom',
    'computerhulp bergen op zoom',
    'ict hulp bergen op zoom',
    'computer reparatie bergen op zoom',
    'laptop hulp bergen op zoom',
    'it student bergen op zoom',
    'betaalbare computerhulp bergen op zoom',
    'computer problemen bergen op zoom',
    'wifi problemen bergen op zoom',
    'internet hulp bergen op zoom',
    'computerhulp bergen op zoom centrum',
    'ict hulp bergen op zoom noord',
    'computer reparatie bergen op zoom oost',
    'laptop hulp bergse plaat',
    'student computerhulp gageldonk',
    'it hulp halsteren',
    'it service bergen op zoom',
    'laptop reparatie bergen op zoom',
    'it hulp aan huis bergen op zoom'
  ],
  openGraph: {
    title: 'Student aan huis Bergen op Zoom | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bergen op Zoom. Wij komen bij u thuis in Bergen op Zoom en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bergen-op-zoom',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bergen op Zoom - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bergen op Zoom | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bergen op Zoom. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bergen-op-zoom'
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

export default function StudentAanHuisBergenOpZoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

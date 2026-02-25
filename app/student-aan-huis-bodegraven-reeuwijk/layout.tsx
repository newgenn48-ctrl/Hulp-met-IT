import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bodegraven-Reeuwijk | Hulp met IT',
  description: 'ICT Student aan huis in Bodegraven-Reeuwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bodegraven, Reeuwijk-Dorp, Reeuwijk-Brug en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bodegraven-reeuwijk',
    'computerhulp bodegraven-reeuwijk',
    'ict hulp bodegraven-reeuwijk',
    'computer reparatie bodegraven-reeuwijk',
    'laptop hulp bodegraven-reeuwijk',
    'it student bodegraven-reeuwijk',
    'betaalbare computerhulp bodegraven-reeuwijk',
    'computer problemen bodegraven-reeuwijk',
    'wifi problemen bodegraven-reeuwijk',
    'internet hulp bodegraven-reeuwijk',
    'computerhulp bodegraven',
    'ict hulp reeuwijk-dorp',
    'computer reparatie reeuwijk-brug',
    'laptop hulp nieuwerbrug',
    'student computerhulp driebruggen',
    'it hulp waarder',
    'it service bodegraven-reeuwijk',
    'laptop reparatie bodegraven-reeuwijk',
    'it hulp aan huis bodegraven-reeuwijk'
  ],
  openGraph: {
    title: 'Student aan huis Bodegraven-Reeuwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bodegraven-Reeuwijk. Wij komen bij u thuis in Bodegraven-Reeuwijk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bodegraven-reeuwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bodegraven-Reeuwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bodegraven-Reeuwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bodegraven-Reeuwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bodegraven-reeuwijk'
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

export default function StudentAanHuisBodegravenReeuwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Reparatie aan Huis - Snel & Betaalbaar | Hulp met IT',
  description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. PC kapot, traag of vastgelopen? Wij komen langs en repareren het. Vanaf €15,50 per kwartier.',
  keywords: [
    'computer reparatie',
    'computer reparatie aan huis',
    'computer laten repareren',
    'pc reparatie',
    'pc reparatie aan huis',
    'computer kapot',
    'computer reparateur',
    'desktop reparatie',
    'pc laten maken',
    'computer herstellen',
    'pc problemen oplossen',
    'computer reparatie service',
    'pc reparatie thuis',
    'computer reparatie kosten',
    'snelle computer reparatie',
    'betaalbare pc reparatie',
    'computer reparatie aan huis kosten',
    'pc reparateur aan huis'
  ],
  openGraph: {
    title: 'Computer Reparatie aan Huis | Hulp met IT',
    description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €15,50 per kwartier + €10 voorrijkosten.',
    url: 'https://hulpmetit.nl/computer-reparatie',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computer reparatie aan huis - Hulp met IT'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Reparatie aan Huis | Hulp met IT',
    description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €15,50 per kwartier.',
    images: ['/og-image.webp']
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
  },
  alternates: {
    canonical: '/computer-reparatie',
  },
}

export default function ComputerReparatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

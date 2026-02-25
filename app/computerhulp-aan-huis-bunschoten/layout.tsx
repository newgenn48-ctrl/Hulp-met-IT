import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bunschoten | Hulp met IT',
  description: 'Computerhulp aan huis in Bunschoten door HBO-opgeleide ICT-studenten. Hulp in Bunschoten, Spakenburg, Eemdijk en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bunschoten',
    'computer reparatie bunschoten',
    'laptop reparatie bunschoten',
    'ICT student bunschoten',
    'pc hulp bunschoten',
    'computer student bunschoten',
    'bunschoten computerhulp avond',
    'bunschoten IT hulp weekend',
    'computerhulp bunschoten spoed',
    'betaalbare IT hulp bunschoten',
    'wifi problemen bunschoten',
    'internet hulp bunschoten',
    'printer installatie bunschoten',
    'virus verwijderen bunschoten',
    'computerhulp bunschoten',
    'ict hulp spakenburg',
    'computer reparatie eemdijk',
    'laptop hulp zevenhuizen',
    'pc hulp hoogland',
    'it hulp vathorst',
    'it service bunschoten',
    'computer problemen bunschoten',
    'it hulp aan huis bunschoten'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bunschoten | Hulp met IT',
    description: 'Computerhulp aan huis in Bunschoten door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bunschoten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bunschoten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bunschoten | Hulp met IT',
    description: 'Computerhulp aan huis in Bunschoten. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bunschoten'
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

export default function ComputerhulpAanHuisBunschotenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

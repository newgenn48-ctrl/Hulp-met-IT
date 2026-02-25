import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Voorschoten | Hulp met IT',
  description: 'Computerhulp aan huis in Voorschoten door HBO-opgeleide ICT-studenten. Hulp in Voorschoten Centrum, Voorschoten Noord, Voorschoten Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis voorschoten',
    'computer reparatie voorschoten',
    'laptop reparatie voorschoten',
    'ICT student voorschoten',
    'pc hulp voorschoten',
    'computer student voorschoten',
    'voorschoten computerhulp avond',
    'voorschoten IT hulp weekend',
    'computerhulp voorschoten spoed',
    'betaalbare IT hulp voorschoten',
    'wifi problemen voorschoten',
    'internet hulp voorschoten',
    'printer installatie voorschoten',
    'virus verwijderen voorschoten',
    'computerhulp voorschoten centrum',
    'ict hulp voorschoten noord',
    'computer reparatie voorschoten zuid',
    'laptop hulp componistenbuurt',
    'pc hulp krimwijk',
    'it hulp vlietwijk',
    'computerhulp voorschoten',
    'it service voorschoten',
    'computer problemen voorschoten'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Voorschoten | Hulp met IT',
    description: 'Computerhulp aan huis in Voorschoten door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-voorschoten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Voorschoten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Voorschoten | Hulp met IT',
    description: 'Computerhulp aan huis in Voorschoten. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-voorschoten'
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

export default function ComputerhulpAanHuisVoorschotenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

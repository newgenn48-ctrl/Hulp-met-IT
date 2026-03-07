import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Spijkenisse | Hulp met IT',
  description: 'Computerhulp aan huis in Spijkenisse door HBO-opgeleide ICT-studenten. Hulp in Spijkenisse Centrum, De Akkers, Waterland en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis spijkenisse',
    'computer reparatie spijkenisse',
    'laptop reparatie spijkenisse',
    'ICT student spijkenisse',
    'pc hulp spijkenisse',
    'computer student spijkenisse',
    'spijkenisse computerhulp avond',
    'spijkenisse IT hulp weekend',
    'computerhulp spijkenisse spoed',
    'betaalbare IT hulp spijkenisse',
    'wifi problemen spijkenisse',
    'internet hulp spijkenisse',
    'printer installatie spijkenisse',
    'virus verwijderen spijkenisse',
    'computerhulp spijkenisse centrum',
    'ict hulp de akkers',
    'computer reparatie waterland',
    'laptop hulp groenewoud',
    'pc hulp maaswijk',
    'it hulp vogelenzang',
    'computerhulp spijkenisse',
    'it service spijkenisse',
    'computer problemen spijkenisse'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Spijkenisse | Hulp met IT',
    description: 'Computerhulp aan huis in Spijkenisse door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-spijkenisse',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Spijkenisse - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Spijkenisse | Hulp met IT',
    description: 'Computerhulp aan huis in Spijkenisse. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-spijkenisse'
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

export default function ComputerhulpAanHuisSpijkenisseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

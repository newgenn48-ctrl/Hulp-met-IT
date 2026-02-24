import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Uden | Hulp met IT',
  description: 'Computerhulp aan huis in Uden door HBO-opgeleide ICT-studenten. Hulp in Uden Centrum, Uden Noord, Uden Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis uden',
    'computer reparatie uden',
    'laptop reparatie uden',
    'ICT student uden',
    'pc hulp uden',
    'computer student uden',
    'uden computerhulp avond',
    'uden IT hulp weekend',
    'computerhulp uden spoed',
    'betaalbare IT hulp uden',
    'wifi problemen uden',
    'internet hulp uden',
    'printer installatie uden',
    'virus verwijderen uden',
    'computerhulp uden centrum',
    'ict hulp uden noord',
    'computer reparatie uden zuid',
    'laptop hulp uden oost',
    'pc hulp volkel',
    'it hulp odiliapeel',
    'computerhulp uden',
    'it service uden',
    'computer problemen uden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Uden | Hulp met IT',
    description: 'Computerhulp aan huis in Uden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-uden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Uden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Uden | Hulp met IT',
    description: 'Computerhulp aan huis in Uden. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-uden'
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

export default function ComputerhulpAanHuisUdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

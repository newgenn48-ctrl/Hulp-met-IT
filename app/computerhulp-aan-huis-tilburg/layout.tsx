import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Tilburg | Hulp met IT',
  description: 'Computerhulp aan huis in Tilburg door HBO-opgeleide ICT-studenten. Hulp in Tilburg Centrum, Tilburg Noord, Tilburg Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis tilburg',
    'computer reparatie tilburg',
    'laptop reparatie tilburg',
    'ICT student tilburg',
    'pc hulp tilburg',
    'computer student tilburg',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp tilburg spoed',
    'betaalbare IT hulp tilburg',
    'wifi problemen tilburg',
    'internet hulp tilburg',
    'printer installatie tilburg',
    'virus verwijderen tilburg',
    'computerhulp tilburg centrum',
    'ict hulp tilburg noord',
    'computer reparatie tilburg oost',
    'laptop hulp tilburg west',
    'pc hulp tilburg zuid',
    'it hulp reeshof',
    'computerhulp tilburg',
    'it service tilburg',
    'computer problemen tilburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Tilburg | Hulp met IT',
    description: 'Computerhulp aan huis in Tilburg door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-tilburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Tilburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Tilburg | Hulp met IT',
    description: 'Computerhulp aan huis in Tilburg. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-tilburg'
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

export default function ComputerhulpAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

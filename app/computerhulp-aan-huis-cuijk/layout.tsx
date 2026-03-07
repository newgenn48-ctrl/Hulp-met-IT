import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Cuijk | Hulp met IT',
  description: 'Computerhulp aan huis in Cuijk door HBO-opgeleide ICT-studenten. Hulp in Cuijk Centrum, Cuijk Noord, Cuijk Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis cuijk',
    'computer reparatie cuijk',
    'laptop reparatie cuijk',
    'ICT student cuijk',
    'pc hulp cuijk',
    'computer student cuijk',
    'cuijk computerhulp avond',
    'cuijk IT hulp weekend',
    'computerhulp cuijk spoed',
    'betaalbare IT hulp cuijk',
    'wifi problemen cuijk',
    'internet hulp cuijk',
    'printer installatie cuijk',
    'virus verwijderen cuijk',
    'computerhulp cuijk centrum',
    'ict hulp cuijk noord',
    'computer reparatie cuijk zuid',
    'laptop hulp beers',
    'pc hulp vianen',
    'it hulp haps',
    'computerhulp cuijk',
    'it service cuijk',
    'computer problemen cuijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Cuijk | Hulp met IT',
    description: 'Computerhulp aan huis in Cuijk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-cuijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Cuijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Cuijk | Hulp met IT',
    description: 'Computerhulp aan huis in Cuijk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-cuijk'
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

export default function ComputerhulpAanHuisCuijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

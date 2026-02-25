import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Purmerend | Hulp met IT',
  description: 'Computerhulp aan huis in Purmerend door HBO-opgeleide ICT-studenten. Hulp in Purmerend Centrum, Purmerend Noord, Purmerend Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis purmerend',
    'computer reparatie purmerend',
    'laptop reparatie purmerend',
    'ICT student purmerend',
    'pc hulp purmerend',
    'computer student purmerend',
    'purmerend computerhulp avond',
    'purmerend IT hulp weekend',
    'computerhulp purmerend spoed',
    'betaalbare IT hulp purmerend',
    'wifi problemen purmerend',
    'internet hulp purmerend',
    'printer installatie purmerend',
    'virus verwijderen purmerend',
    'computerhulp purmerend centrum',
    'ict hulp purmerend noord',
    'computer reparatie purmerend zuid',
    'laptop hulp weidevenne',
    'pc hulp overwhere',
    'it hulp wheermolen',
    'computerhulp purmerend',
    'it service purmerend',
    'computer problemen purmerend'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Purmerend | Hulp met IT',
    description: 'Computerhulp aan huis in Purmerend door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-purmerend',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Purmerend - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Purmerend | Hulp met IT',
    description: 'Computerhulp aan huis in Purmerend. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-purmerend'
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

export default function ComputerhulpAanHuisPurmerendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

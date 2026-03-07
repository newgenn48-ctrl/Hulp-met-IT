import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Soest | Hulp met IT',
  description: 'Computerhulp aan huis in Soest door HBO-opgeleide ICT-studenten. Hulp in Soest Centrum, Soest Noord, Soest Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis soest',
    'computer reparatie soest',
    'laptop reparatie soest',
    'ICT student soest',
    'pc hulp soest',
    'computer student soest',
    'soest computerhulp avond',
    'soest IT hulp weekend',
    'computerhulp soest spoed',
    'betaalbare IT hulp soest',
    'wifi problemen soest',
    'internet hulp soest',
    'printer installatie soest',
    'virus verwijderen soest',
    'computerhulp soest centrum',
    'ict hulp soest noord',
    'computer reparatie soest oost',
    'laptop hulp soest west',
    'pc hulp soest zuid',
    'it hulp soesterberg',
    'computerhulp soest',
    'it service soest',
    'computer problemen soest'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Soest | Hulp met IT',
    description: 'Computerhulp aan huis in Soest door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-soest',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Soest - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Soest | Hulp met IT',
    description: 'Computerhulp aan huis in Soest. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-soest'
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

export default function ComputerhulpAanHuisSoestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

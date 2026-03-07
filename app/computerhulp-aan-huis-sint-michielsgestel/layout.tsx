import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Sint-Michielsgestel | Hulp met IT',
  description: 'Computerhulp aan huis in Sint-Michielsgestel door HBO-opgeleide ICT-studenten. Hulp in Sint-Michielsgestel, Berlicum, Den Dungen en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis sint-michielsgestel',
    'computer reparatie sint-michielsgestel',
    'laptop reparatie sint-michielsgestel',
    'ICT student sint-michielsgestel',
    'pc hulp sint-michielsgestel',
    'computer student sint-michielsgestel',
    'sint-michielsgestel computerhulp avond',
    'sint-michielsgestel IT hulp weekend',
    'computerhulp sint-michielsgestel spoed',
    'betaalbare IT hulp sint-michielsgestel',
    'wifi problemen sint-michielsgestel',
    'internet hulp sint-michielsgestel',
    'printer installatie sint-michielsgestel',
    'virus verwijderen sint-michielsgestel',
    'computerhulp sint-michielsgestel',
    'ict hulp berlicum',
    'computer reparatie den dungen',
    'laptop hulp gemonde',
    'pc hulp middelrode',
    'it hulp sint-michielsgestel centrum',
    'it service sint-michielsgestel',
    'computer problemen sint-michielsgestel',
    'it hulp aan huis sint-michielsgestel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Sint-Michielsgestel | Hulp met IT',
    description: 'Computerhulp aan huis in Sint-Michielsgestel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-sint-michielsgestel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Sint-Michielsgestel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Sint-Michielsgestel | Hulp met IT',
    description: 'Computerhulp aan huis in Sint-Michielsgestel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-sint-michielsgestel'
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

export default function ComputerhulpAanHuisSintMichielsgestelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

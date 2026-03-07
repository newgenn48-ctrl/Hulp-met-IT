import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Loon op Zand | Hulp met IT',
  description: 'Computerhulp aan huis in Loon op Zand door HBO-opgeleide ICT-studenten. Hulp in Kaatsheuvel, Loon op Zand dorp, De Moer en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis loon op zand',
    'computer reparatie loon op zand',
    'laptop reparatie loon op zand',
    'ICT student loon op zand',
    'pc hulp loon op zand',
    'computer student loon op zand',
    'loon op zand computerhulp avond',
    'loon op zand IT hulp weekend',
    'computerhulp loon op zand spoed',
    'betaalbare IT hulp loon op zand',
    'wifi problemen loon op zand',
    'internet hulp loon op zand',
    'printer installatie loon op zand',
    'virus verwijderen loon op zand',
    'computerhulp kaatsheuvel',
    'ict hulp loon op zand dorp',
    'computer reparatie de moer',
    'laptop hulp kaatsheuvel centrum',
    'pc hulp kaatsheuvel zuid',
    'it hulp kaatsheuvel noord',
    'computerhulp loon op zand',
    'it service loon op zand',
    'computer problemen loon op zand'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Loon op Zand | Hulp met IT',
    description: 'Computerhulp aan huis in Loon op Zand door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-loon-op-zand',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Loon op Zand - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Loon op Zand | Hulp met IT',
    description: 'Computerhulp aan huis in Loon op Zand. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-loon-op-zand'
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

export default function ComputerhulpAanHuisLoonOpZandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

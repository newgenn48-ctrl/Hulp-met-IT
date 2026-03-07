import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Wassenaar | Hulp met IT',
  description: 'Computerhulp aan huis in Wassenaar door HBO-opgeleide ICT-studenten. Hulp in Wassenaar Centrum, Wassenaar Dorp, Duindigt en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis wassenaar',
    'computer reparatie wassenaar',
    'laptop reparatie wassenaar',
    'ICT student wassenaar',
    'pc hulp wassenaar',
    'computer student wassenaar',
    'wassenaar computerhulp avond',
    'wassenaar IT hulp weekend',
    'computerhulp wassenaar spoed',
    'betaalbare IT hulp wassenaar',
    'wifi problemen wassenaar',
    'internet hulp wassenaar',
    'printer installatie wassenaar',
    'virus verwijderen wassenaar',
    'computerhulp wassenaar centrum',
    'ict hulp wassenaar dorp',
    'computer reparatie duindigt',
    'laptop hulp de kieviet',
    'pc hulp oud-wassenaar',
    'it hulp kasteel de wittenburg',
    'computerhulp wassenaar',
    'it service wassenaar',
    'computer problemen wassenaar'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Wassenaar | Hulp met IT',
    description: 'Computerhulp aan huis in Wassenaar door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-wassenaar',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Wassenaar - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Wassenaar | Hulp met IT',
    description: 'Computerhulp aan huis in Wassenaar. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-wassenaar'
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

export default function ComputerhulpAanHuisWassenaarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

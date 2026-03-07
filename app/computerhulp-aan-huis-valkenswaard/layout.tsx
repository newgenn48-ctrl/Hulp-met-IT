import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Valkenswaard | Hulp met IT',
  description: 'Computerhulp aan huis in Valkenswaard door HBO-opgeleide ICT-studenten. Hulp in Valkenswaard Centrum, Dommelen, Borkel en Schaft en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis valkenswaard',
    'computer reparatie valkenswaard',
    'laptop reparatie valkenswaard',
    'ICT student valkenswaard',
    'pc hulp valkenswaard',
    'computer student valkenswaard',
    'valkenswaard computerhulp avond',
    'valkenswaard IT hulp weekend',
    'computerhulp valkenswaard spoed',
    'betaalbare IT hulp valkenswaard',
    'wifi problemen valkenswaard',
    'internet hulp valkenswaard',
    'printer installatie valkenswaard',
    'virus verwijderen valkenswaard',
    'computerhulp valkenswaard centrum',
    'ict hulp dommelen',
    'computer reparatie borkel en schaft',
    'laptop hulp geenhoven',
    'pc hulp lage heide',
    'it hulp de belleman',
    'computerhulp valkenswaard',
    'it service valkenswaard',
    'computer problemen valkenswaard'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Valkenswaard | Hulp met IT',
    description: 'Computerhulp aan huis in Valkenswaard door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-valkenswaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Valkenswaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Valkenswaard | Hulp met IT',
    description: 'Computerhulp aan huis in Valkenswaard. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-valkenswaard'
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

export default function ComputerhulpAanHuisValkenswaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

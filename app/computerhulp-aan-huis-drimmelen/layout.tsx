import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Drimmelen | Hulp met IT',
  description: 'Computerhulp aan huis in Drimmelen door HBO-opgeleide ICT-studenten. Hulp in Made, Terheijden, Lage Zwaluwe en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis drimmelen',
    'computer reparatie drimmelen',
    'laptop reparatie drimmelen',
    'ICT student drimmelen',
    'pc hulp drimmelen',
    'computer student drimmelen',
    'drimmelen computerhulp avond',
    'drimmelen IT hulp weekend',
    'computerhulp drimmelen spoed',
    'betaalbare IT hulp drimmelen',
    'wifi problemen drimmelen',
    'internet hulp drimmelen',
    'printer installatie drimmelen',
    'virus verwijderen drimmelen',
    'computerhulp made',
    'ict hulp terheijden',
    'computer reparatie lage zwaluwe',
    'laptop hulp hooge zwaluwe',
    'pc hulp wagenberg',
    'it hulp drimmelen dorp',
    'computerhulp drimmelen',
    'it service drimmelen',
    'computer problemen drimmelen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Drimmelen | Hulp met IT',
    description: 'Computerhulp aan huis in Drimmelen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-drimmelen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Drimmelen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Drimmelen | Hulp met IT',
    description: 'Computerhulp aan huis in Drimmelen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-drimmelen'
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

export default function ComputerhulpAanHuisDrimmelenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

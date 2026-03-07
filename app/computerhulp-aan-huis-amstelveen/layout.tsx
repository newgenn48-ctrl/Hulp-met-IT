import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amstelveen | Hulp met IT',
  description: 'Computerhulp aan huis in Amstelveen door HBO-opgeleide ICT-studenten. Hulp in Amstelveen Centrum, Amstelveen Noord, Amstelveen Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis amstelveen',
    'computer reparatie amstelveen',
    'laptop reparatie amstelveen',
    'ICT student amstelveen',
    'pc hulp amstelveen',
    'computer student amstelveen',
    'amstelveen computerhulp avond',
    'amstelveen IT hulp weekend',
    'computerhulp amstelveen spoed',
    'betaalbare IT hulp amstelveen',
    'wifi problemen amstelveen',
    'internet hulp amstelveen',
    'printer installatie amstelveen',
    'virus verwijderen amstelveen',
    'computerhulp amstelveen centrum',
    'ict hulp amstelveen noord',
    'computer reparatie amstelveen zuid',
    'laptop hulp westwijk',
    'pc hulp bovenkerk',
    'it hulp nes aan de amstel',
    'computerhulp amstelveen',
    'it service amstelveen',
    'computer problemen amstelveen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amstelveen | Hulp met IT',
    description: 'Computerhulp aan huis in Amstelveen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-amstelveen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Amstelveen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amstelveen | Hulp met IT',
    description: 'Computerhulp aan huis in Amstelveen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amstelveen'
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

export default function ComputerhulpAanHuisAmstelveenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

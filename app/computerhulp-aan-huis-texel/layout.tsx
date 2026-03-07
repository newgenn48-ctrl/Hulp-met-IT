import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Texel | Hulp met IT',
  description: 'Computerhulp aan huis in Texel door HBO-opgeleide ICT-studenten. Hulp in Den Burg, De Koog, Oudeschild en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis texel',
    'computer reparatie texel',
    'laptop reparatie texel',
    'ICT student texel',
    'pc hulp texel',
    'computer student texel',
    'texel computerhulp avond',
    'texel IT hulp weekend',
    'computerhulp texel spoed',
    'betaalbare IT hulp texel',
    'wifi problemen texel',
    'internet hulp texel',
    'printer installatie texel',
    'virus verwijderen texel',
    'computerhulp den burg',
    'ict hulp de koog',
    'computer reparatie oudeschild',
    'laptop hulp den hoorn',
    'pc hulp de cocksdorp',
    'it hulp oosterend',
    'computerhulp texel',
    'it service texel',
    'computer problemen texel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Texel | Hulp met IT',
    description: 'Computerhulp aan huis in Texel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-texel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Texel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Texel | Hulp met IT',
    description: 'Computerhulp aan huis in Texel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-texel'
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

export default function ComputerhulpAanHuisTexelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

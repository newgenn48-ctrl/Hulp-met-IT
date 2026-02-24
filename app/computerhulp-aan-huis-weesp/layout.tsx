import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Weesp | Hulp met IT',
  description: 'Computerhulp aan huis in Weesp door HBO-opgeleide ICT-studenten. Hulp in Weesp Centrum, Weesp Noord, Weesp Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis weesp',
    'computer reparatie weesp',
    'laptop reparatie weesp',
    'ICT student weesp',
    'pc hulp weesp',
    'computer student weesp',
    'weesp computerhulp avond',
    'weesp IT hulp weekend',
    'computerhulp weesp spoed',
    'betaalbare IT hulp weesp',
    'wifi problemen weesp',
    'internet hulp weesp',
    'printer installatie weesp',
    'virus verwijderen weesp',
    'computerhulp weesp centrum',
    'ict hulp weesp noord',
    'computer reparatie weesp oost',
    'laptop hulp weesp west',
    'pc hulp weesp zuid',
    'it hulp naarden',
    'computerhulp weesp',
    'it service weesp',
    'computer problemen weesp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Weesp | Hulp met IT',
    description: 'Computerhulp aan huis in Weesp door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-weesp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Weesp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Weesp | Hulp met IT',
    description: 'Computerhulp aan huis in Weesp. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-weesp'
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

export default function ComputerhulpAanHuisWeespLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

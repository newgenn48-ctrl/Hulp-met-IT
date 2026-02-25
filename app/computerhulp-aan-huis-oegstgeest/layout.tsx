import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Oegstgeest | Hulp met IT',
  description: 'Computerhulp aan huis in Oegstgeest door HBO-opgeleide ICT-studenten. Hulp in Oegstgeest Centrum, Haaswijk, Poelgeest en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis oegstgeest',
    'computer reparatie oegstgeest',
    'laptop reparatie oegstgeest',
    'ICT student oegstgeest',
    'pc hulp oegstgeest',
    'computer student oegstgeest',
    'oegstgeest computerhulp avond',
    'oegstgeest IT hulp weekend',
    'computerhulp oegstgeest spoed',
    'betaalbare IT hulp oegstgeest',
    'wifi problemen oegstgeest',
    'internet hulp oegstgeest',
    'printer installatie oegstgeest',
    'virus verwijderen oegstgeest',
    'computerhulp oegstgeest centrum',
    'ict hulp haaswijk',
    'computer reparatie poelgeest',
    'laptop hulp wilhelminapark',
    'pc hulp nieuw-rhijngeest',
    'it hulp morsebel',
    'computerhulp oegstgeest',
    'it service oegstgeest',
    'computer problemen oegstgeest'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Oegstgeest | Hulp met IT',
    description: 'Computerhulp aan huis in Oegstgeest door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-oegstgeest',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Oegstgeest - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Oegstgeest | Hulp met IT',
    description: 'Computerhulp aan huis in Oegstgeest. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-oegstgeest'
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

export default function ComputerhulpAanHuisOegstgeestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

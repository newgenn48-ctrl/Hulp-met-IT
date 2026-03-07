import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Waalwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Waalwijk door HBO-opgeleide ICT-studenten. Hulp in Waalwijk Centrum, Waalwijk Noord, Waalwijk Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis waalwijk',
    'computer reparatie waalwijk',
    'laptop reparatie waalwijk',
    'ICT student waalwijk',
    'pc hulp waalwijk',
    'computer student waalwijk',
    'waalwijk computerhulp avond',
    'waalwijk IT hulp weekend',
    'computerhulp waalwijk spoed',
    'betaalbare IT hulp waalwijk',
    'wifi problemen waalwijk',
    'internet hulp waalwijk',
    'printer installatie waalwijk',
    'virus verwijderen waalwijk',
    'computerhulp waalwijk centrum',
    'ict hulp waalwijk noord',
    'computer reparatie waalwijk zuid',
    'laptop hulp baardwijk',
    'pc hulp waspik',
    'it hulp sprang-capelle',
    'computerhulp waalwijk',
    'it service waalwijk',
    'computer problemen waalwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Waalwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Waalwijk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-waalwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Waalwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Waalwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Waalwijk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-waalwijk'
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

export default function ComputerhulpAanHuisWaalwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

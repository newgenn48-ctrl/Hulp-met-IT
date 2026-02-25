import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Waddinxveen | Hulp met IT',
  description: 'Computerhulp aan huis in Waddinxveen door HBO-opgeleide ICT-studenten. Hulp in Waddinxveen Centrum, Vondelwijk, Zuidpunt en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis waddinxveen',
    'computer reparatie waddinxveen',
    'laptop reparatie waddinxveen',
    'ICT student waddinxveen',
    'pc hulp waddinxveen',
    'computer student waddinxveen',
    'waddinxveen computerhulp avond',
    'waddinxveen IT hulp weekend',
    'computerhulp waddinxveen spoed',
    'betaalbare IT hulp waddinxveen',
    'wifi problemen waddinxveen',
    'internet hulp waddinxveen',
    'printer installatie waddinxveen',
    'virus verwijderen waddinxveen',
    'computerhulp waddinxveen centrum',
    'ict hulp vondelwijk',
    'computer reparatie zuidpunt',
    'laptop hulp groenswaard',
    'pc hulp triangel',
    'it hulp bomenwijk',
    'computerhulp waddinxveen',
    'it service waddinxveen',
    'computer problemen waddinxveen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Waddinxveen | Hulp met IT',
    description: 'Computerhulp aan huis in Waddinxveen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-waddinxveen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Waddinxveen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Waddinxveen | Hulp met IT',
    description: 'Computerhulp aan huis in Waddinxveen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-waddinxveen'
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

export default function ComputerhulpAanHuisWaddinxveenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

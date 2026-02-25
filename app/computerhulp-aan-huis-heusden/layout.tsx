import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Heusden | Hulp met IT',
  description: 'Computerhulp aan huis in Heusden door HBO-opgeleide ICT-studenten. Hulp in Vlijmen, Drunen, Heusden Vesting en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis heusden',
    'computer reparatie heusden',
    'laptop reparatie heusden',
    'ICT student heusden',
    'pc hulp heusden',
    'computer student heusden',
    'heusden computerhulp avond',
    'heusden IT hulp weekend',
    'computerhulp heusden spoed',
    'betaalbare IT hulp heusden',
    'wifi problemen heusden',
    'internet hulp heusden',
    'printer installatie heusden',
    'virus verwijderen heusden',
    'computerhulp vlijmen',
    'ict hulp drunen',
    'computer reparatie heusden vesting',
    'laptop hulp elshout',
    'pc hulp haarsteeg',
    'it hulp nieuwkuijk',
    'computerhulp heusden',
    'it service heusden',
    'computer problemen heusden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Heusden | Hulp met IT',
    description: 'Computerhulp aan huis in Heusden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-heusden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Heusden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Heusden | Hulp met IT',
    description: 'Computerhulp aan huis in Heusden. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-heusden'
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

export default function ComputerhulpAanHuisHeusdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

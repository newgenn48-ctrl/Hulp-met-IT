import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Naarden | Hulp met IT',
  description: 'Computerhulp aan huis in Naarden door HBO-opgeleide ICT-studenten. Hulp in Naarden Centrum, Naarden Noord, Naarden Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis naarden',
    'computer reparatie naarden',
    'laptop reparatie naarden',
    'ICT student naarden',
    'pc hulp naarden',
    'computer student naarden',
    'naarden computerhulp avond',
    'naarden IT hulp weekend',
    'computerhulp naarden spoed',
    'betaalbare IT hulp naarden',
    'wifi problemen naarden',
    'internet hulp naarden',
    'printer installatie naarden',
    'virus verwijderen naarden',
    'computerhulp naarden centrum',
    'ict hulp naarden noord',
    'computer reparatie naarden oost',
    'laptop hulp naarden west',
    'pc hulp naarden zuid',
    'it hulp naarden vesting',
    'computerhulp naarden',
    'it service naarden',
    'computer problemen naarden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Naarden | Hulp met IT',
    description: 'Computerhulp aan huis in Naarden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-naarden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Naarden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Naarden | Hulp met IT',
    description: 'Computerhulp aan huis in Naarden. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-naarden'
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

export default function ComputerhulpAanHuisNaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

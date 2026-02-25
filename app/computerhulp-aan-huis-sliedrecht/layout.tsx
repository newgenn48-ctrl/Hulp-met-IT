import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Sliedrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Sliedrecht door HBO-opgeleide ICT-studenten. Hulp in Sliedrecht Centrum, Sliedrecht-Oost, Sliedrecht-West en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis sliedrecht',
    'computer reparatie sliedrecht',
    'laptop reparatie sliedrecht',
    'ICT student sliedrecht',
    'pc hulp sliedrecht',
    'computer student sliedrecht',
    'sliedrecht computerhulp avond',
    'sliedrecht IT hulp weekend',
    'computerhulp sliedrecht spoed',
    'betaalbare IT hulp sliedrecht',
    'wifi problemen sliedrecht',
    'internet hulp sliedrecht',
    'printer installatie sliedrecht',
    'virus verwijderen sliedrecht',
    'computerhulp sliedrecht centrum',
    'ict hulp sliedrecht-oost',
    'computer reparatie sliedrecht-west',
    'laptop hulp baanhoek',
    'pc hulp de lock',
    'it hulp merwestein',
    'computerhulp sliedrecht',
    'it service sliedrecht',
    'computer problemen sliedrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Sliedrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Sliedrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-sliedrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Sliedrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Sliedrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Sliedrecht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-sliedrecht'
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

export default function ComputerhulpAanHuisSliedrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

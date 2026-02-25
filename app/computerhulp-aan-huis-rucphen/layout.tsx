import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rucphen | Hulp met IT',
  description: 'Computerhulp aan huis in Rucphen door HBO-opgeleide ICT-studenten. Hulp in Rucphen, Sprundel, Sint Willebrord en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis rucphen',
    'computer reparatie rucphen',
    'laptop reparatie rucphen',
    'ICT student rucphen',
    'pc hulp rucphen',
    'computer student rucphen',
    'rucphen computerhulp avond',
    'rucphen IT hulp weekend',
    'computerhulp rucphen spoed',
    'betaalbare IT hulp rucphen',
    'wifi problemen rucphen',
    'internet hulp rucphen',
    'printer installatie rucphen',
    'virus verwijderen rucphen',
    'computerhulp rucphen',
    'ict hulp sprundel',
    'computer reparatie sint willebrord',
    'laptop hulp schijf',
    'pc hulp rucphen centrum',
    'it hulp vorenseinde',
    'it service rucphen',
    'computer problemen rucphen',
    'it hulp aan huis rucphen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rucphen | Hulp met IT',
    description: 'Computerhulp aan huis in Rucphen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-rucphen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Rucphen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rucphen | Hulp met IT',
    description: 'Computerhulp aan huis in Rucphen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rucphen'
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

export default function ComputerhulpAanHuisRucphenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

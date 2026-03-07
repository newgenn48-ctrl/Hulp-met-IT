import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hoorn | Hulp met IT',
  description: 'Computerhulp aan huis in Hoorn door HBO-opgeleide ICT-studenten. Hulp in Hoorn Centrum, Hoorn Noord, Kersenboogerd en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hoorn',
    'computer reparatie hoorn',
    'laptop reparatie hoorn',
    'ICT student hoorn',
    'pc hulp hoorn',
    'computer student hoorn',
    'hoorn computerhulp avond',
    'hoorn IT hulp weekend',
    'computerhulp hoorn spoed',
    'betaalbare IT hulp hoorn',
    'wifi problemen hoorn',
    'internet hulp hoorn',
    'printer installatie hoorn',
    'virus verwijderen hoorn',
    'computerhulp hoorn centrum',
    'ict hulp hoorn noord',
    'computer reparatie kersenboogerd',
    'laptop hulp risdam',
    'pc hulp grote waal',
    'it hulp blokker',
    'computerhulp hoorn',
    'it service hoorn',
    'computer problemen hoorn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hoorn | Hulp met IT',
    description: 'Computerhulp aan huis in Hoorn door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hoorn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hoorn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hoorn | Hulp met IT',
    description: 'Computerhulp aan huis in Hoorn. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hoorn'
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

export default function ComputerhulpAanHuisHoornLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

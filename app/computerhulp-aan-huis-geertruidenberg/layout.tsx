import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Geertruidenberg | Hulp met IT',
  description: 'Computerhulp aan huis in Geertruidenberg door HBO-opgeleide ICT-studenten. Hulp in Geertruidenberg Centrum, Raamsdonksveer, Raamsdonk en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis geertruidenberg',
    'computer reparatie geertruidenberg',
    'laptop reparatie geertruidenberg',
    'ICT student geertruidenberg',
    'pc hulp geertruidenberg',
    'computer student geertruidenberg',
    'geertruidenberg computerhulp avond',
    'geertruidenberg IT hulp weekend',
    'computerhulp geertruidenberg spoed',
    'betaalbare IT hulp geertruidenberg',
    'wifi problemen geertruidenberg',
    'internet hulp geertruidenberg',
    'printer installatie geertruidenberg',
    'virus verwijderen geertruidenberg',
    'computerhulp geertruidenberg centrum',
    'ict hulp raamsdonksveer',
    'computer reparatie raamsdonk',
    'laptop hulp raamsdonksveer centrum',
    'pc hulp geertruidenberg zuid',
    'it hulp raamsdonksveer noord',
    'computerhulp geertruidenberg',
    'it service geertruidenberg',
    'computer problemen geertruidenberg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Geertruidenberg | Hulp met IT',
    description: 'Computerhulp aan huis in Geertruidenberg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-geertruidenberg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Geertruidenberg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Geertruidenberg | Hulp met IT',
    description: 'Computerhulp aan huis in Geertruidenberg. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-geertruidenberg'
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

export default function ComputerhulpAanHuisGeertruidenbergLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

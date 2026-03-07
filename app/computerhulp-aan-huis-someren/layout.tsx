import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Someren | Hulp met IT',
  description: 'Computerhulp aan huis in Someren door HBO-opgeleide ICT-studenten. Hulp in Someren Centrum, Someren-Eind, Someren-Heide en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis someren',
    'computer reparatie someren',
    'laptop reparatie someren',
    'ICT student someren',
    'pc hulp someren',
    'computer student someren',
    'someren computerhulp avond',
    'someren IT hulp weekend',
    'computerhulp someren spoed',
    'betaalbare IT hulp someren',
    'wifi problemen someren',
    'internet hulp someren',
    'printer installatie someren',
    'virus verwijderen someren',
    'computerhulp someren centrum',
    'ict hulp someren-eind',
    'computer reparatie someren-heide',
    'laptop hulp lierop',
    'pc hulp someren noord',
    'it hulp someren zuid',
    'computerhulp someren',
    'it service someren',
    'computer problemen someren'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Someren | Hulp met IT',
    description: 'Computerhulp aan huis in Someren door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-someren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Someren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Someren | Hulp met IT',
    description: 'Computerhulp aan huis in Someren. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-someren'
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

export default function ComputerhulpAanHuisSomerenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

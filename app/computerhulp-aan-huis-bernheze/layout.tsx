import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bernheze | Hulp met IT',
  description: 'Computerhulp aan huis in Bernheze door HBO-opgeleide ICT-studenten. Hulp in Heesch, Nistelrode, Loosbroek en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bernheze',
    'computer reparatie bernheze',
    'laptop reparatie bernheze',
    'ICT student bernheze',
    'pc hulp bernheze',
    'computer student bernheze',
    'bernheze computerhulp avond',
    'bernheze IT hulp weekend',
    'computerhulp bernheze spoed',
    'betaalbare IT hulp bernheze',
    'wifi problemen bernheze',
    'internet hulp bernheze',
    'printer installatie bernheze',
    'virus verwijderen bernheze',
    'computerhulp heesch',
    'ict hulp nistelrode',
    'computer reparatie loosbroek',
    'laptop hulp vorstenbosch',
    'pc hulp heeswijk-dinther',
    'it hulp middelrode',
    'computerhulp bernheze',
    'it service bernheze',
    'computer problemen bernheze'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bernheze | Hulp met IT',
    description: 'Computerhulp aan huis in Bernheze door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bernheze',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bernheze - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bernheze | Hulp met IT',
    description: 'Computerhulp aan huis in Bernheze. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bernheze'
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

export default function ComputerhulpAanHuisBernhezeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

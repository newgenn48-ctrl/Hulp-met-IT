import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zundert | Hulp met IT',
  description: 'Computerhulp aan huis in Zundert door HBO-opgeleide ICT-studenten. Hulp in Zundert Centrum, Rijsbergen, Achtmaal en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zundert',
    'computer reparatie zundert',
    'laptop reparatie zundert',
    'ICT student zundert',
    'pc hulp zundert',
    'computer student zundert',
    'zundert computerhulp avond',
    'zundert IT hulp weekend',
    'computerhulp zundert spoed',
    'betaalbare IT hulp zundert',
    'wifi problemen zundert',
    'internet hulp zundert',
    'printer installatie zundert',
    'virus verwijderen zundert',
    'computerhulp zundert centrum',
    'ict hulp rijsbergen',
    'computer reparatie achtmaal',
    'laptop hulp klein zundert',
    'pc hulp wernhout',
    'it hulp zundert noord',
    'computerhulp zundert',
    'it service zundert',
    'computer problemen zundert'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zundert | Hulp met IT',
    description: 'Computerhulp aan huis in Zundert door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zundert',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zundert - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zundert | Hulp met IT',
    description: 'Computerhulp aan huis in Zundert. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zundert'
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

export default function ComputerhulpAanHuisZundertLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

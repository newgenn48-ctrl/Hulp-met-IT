import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Baarn | Hulp met IT',
  description: 'Computerhulp aan huis in Baarn door HBO-opgeleide ICT-studenten. Hulp in Baarn Centrum, Baarn Noord, Baarn Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis baarn',
    'computer reparatie baarn',
    'laptop reparatie baarn',
    'ICT student baarn',
    'pc hulp baarn',
    'computer student baarn',
    'baarn computerhulp avond',
    'baarn IT hulp weekend',
    'computerhulp baarn spoed',
    'betaalbare IT hulp baarn',
    'wifi problemen baarn',
    'internet hulp baarn',
    'printer installatie baarn',
    'virus verwijderen baarn',
    'computerhulp baarn centrum',
    'ict hulp baarn noord',
    'computer reparatie baarn oost',
    'laptop hulp baarn west',
    'pc hulp baarn zuid',
    'it hulp soestdijk',
    'computerhulp baarn',
    'it service baarn',
    'computer problemen baarn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Baarn | Hulp met IT',
    description: 'Computerhulp aan huis in Baarn door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-baarn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Baarn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Baarn | Hulp met IT',
    description: 'Computerhulp aan huis in Baarn. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-baarn'
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

export default function ComputerhulpAanHuisBaarnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

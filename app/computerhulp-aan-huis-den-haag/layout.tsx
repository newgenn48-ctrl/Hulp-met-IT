import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Haag | Hulp met IT',
  description: 'Computerhulp aan huis in Den Haag door HBO-opgeleide ICT-studenten. Hulp in Den Haag Centrum, Scheveningen, Benoordenhout en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis den haag',
    'computer reparatie den haag',
    'laptop reparatie den haag',
    'ICT student den haag',
    'pc hulp den haag',
    'computer student den haag',
    'den haag computerhulp avond',
    'den haag IT hulp weekend',
    'computerhulp den haag spoed',
    'betaalbare IT hulp den haag',
    'wifi problemen den haag',
    'internet hulp den haag',
    'printer installatie den haag',
    'virus verwijderen den haag',
    'computerhulp den haag centrum',
    'ict hulp scheveningen',
    'computer reparatie benoordenhout',
    'laptop hulp haagse bos',
    'pc hulp laak',
    'it hulp escamp',
    'computerhulp den haag',
    'it service den haag',
    'computer problemen den haag'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Den Haag | Hulp met IT',
    description: 'Computerhulp aan huis in Den Haag door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-den-haag',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Den Haag - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Haag | Hulp met IT',
    description: 'Computerhulp aan huis in Den Haag. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-haag'
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

export default function ComputerhulpAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

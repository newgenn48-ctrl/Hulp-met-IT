import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bergen | Hulp met IT',
  description: 'Computerhulp aan huis in Bergen door HBO-opgeleide ICT-studenten. Hulp in Bergen, Bergen aan Zee, Egmond aan Zee en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bergen',
    'computer reparatie bergen',
    'laptop reparatie bergen',
    'ICT student bergen',
    'pc hulp bergen',
    'computer student bergen',
    'bergen computerhulp avond',
    'bergen IT hulp weekend',
    'computerhulp bergen spoed',
    'betaalbare IT hulp bergen',
    'wifi problemen bergen',
    'internet hulp bergen',
    'printer installatie bergen',
    'virus verwijderen bergen',
    'computerhulp bergen',
    'ict hulp bergen aan zee',
    'computer reparatie egmond aan zee',
    'laptop hulp egmond aan den hoef',
    'pc hulp egmond-binnen',
    'it hulp schoorl',
    'it service bergen',
    'computer problemen bergen',
    'it hulp aan huis bergen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bergen | Hulp met IT',
    description: 'Computerhulp aan huis in Bergen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bergen-nh',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bergen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bergen | Hulp met IT',
    description: 'Computerhulp aan huis in Bergen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bergen-nh'
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

export default function ComputerhulpAanHuisBergenNhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Beverwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Beverwijk door HBO-opgeleide ICT-studenten. Hulp in Beverwijk, Wijk aan Zee, Westerhout en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis beverwijk',
    'computer reparatie beverwijk',
    'laptop reparatie beverwijk',
    'ICT student beverwijk',
    'pc hulp beverwijk',
    'computer student beverwijk',
    'beverwijk computerhulp avond',
    'beverwijk IT hulp weekend',
    'computerhulp beverwijk spoed',
    'betaalbare IT hulp beverwijk',
    'wifi problemen beverwijk',
    'internet hulp beverwijk',
    'printer installatie beverwijk',
    'virus verwijderen beverwijk',
    'computerhulp beverwijk',
    'ict hulp wijk aan zee',
    'computer reparatie westerhout',
    'laptop hulp beverwijk-zuid',
    'pc hulp beverwijk-oost',
    'it hulp meerestein',
    'it service beverwijk',
    'computer problemen beverwijk',
    'it hulp aan huis beverwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Beverwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Beverwijk door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-beverwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Beverwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Beverwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Beverwijk. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-beverwijk'
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

export default function ComputerhulpAanHuisBeverwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

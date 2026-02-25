import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Helder | Hulp met IT',
  description: 'Computerhulp aan huis in Den Helder door HBO-opgeleide ICT-studenten. Hulp in Den Helder Centrum, Nieuw-Den Helder, De Schooten en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis den helder',
    'computer reparatie den helder',
    'laptop reparatie den helder',
    'ICT student den helder',
    'pc hulp den helder',
    'computer student den helder',
    'den helder computerhulp avond',
    'den helder IT hulp weekend',
    'computerhulp den helder spoed',
    'betaalbare IT hulp den helder',
    'wifi problemen den helder',
    'internet hulp den helder',
    'printer installatie den helder',
    'virus verwijderen den helder',
    'computerhulp den helder centrum',
    'ict hulp nieuw-den helder',
    'computer reparatie de schooten',
    'laptop hulp julianadorp',
    'pc hulp huisduinen',
    'it hulp van foreestbuurt',
    'computerhulp den helder',
    'it service den helder',
    'computer problemen den helder'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Den Helder | Hulp met IT',
    description: 'Computerhulp aan huis in Den Helder door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-den-helder',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Den Helder - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Helder | Hulp met IT',
    description: 'Computerhulp aan huis in Den Helder. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-helder'
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

export default function ComputerhulpAanHuisDenHelderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

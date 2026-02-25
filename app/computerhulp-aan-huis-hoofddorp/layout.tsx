import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hoofddorp | Hulp met IT',
  description: 'Computerhulp aan huis in Hoofddorp door HBO-opgeleide ICT-studenten. Hulp in Hoofddorp Centrum, Floriande, Toolenburg en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hoofddorp',
    'computer reparatie hoofddorp',
    'laptop reparatie hoofddorp',
    'ICT student hoofddorp',
    'pc hulp hoofddorp',
    'computer student hoofddorp',
    'hoofddorp computerhulp avond',
    'hoofddorp IT hulp weekend',
    'computerhulp hoofddorp spoed',
    'betaalbare IT hulp hoofddorp',
    'wifi problemen hoofddorp',
    'internet hulp hoofddorp',
    'printer installatie hoofddorp',
    'virus verwijderen hoofddorp',
    'computerhulp hoofddorp centrum',
    'ict hulp floriande',
    'computer reparatie toolenburg',
    'laptop hulp bornholm',
    'pc hulp pax',
    'it hulp nieuw-vennep',
    'computerhulp hoofddorp',
    'it service hoofddorp',
    'computer problemen hoofddorp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hoofddorp | Hulp met IT',
    description: 'Computerhulp aan huis in Hoofddorp door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hoofddorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hoofddorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hoofddorp | Hulp met IT',
    description: 'Computerhulp aan huis in Hoofddorp. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hoofddorp'
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

export default function ComputerhulpAanHuisHoofddorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

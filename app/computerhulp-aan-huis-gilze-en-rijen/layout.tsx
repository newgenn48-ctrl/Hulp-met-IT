import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gilze en Rijen | Hulp met IT',
  description: 'Computerhulp aan huis in Gilze en Rijen door HBO-opgeleide ICT-studenten. Hulp in Rijen, Gilze, Molenschot en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis gilze en rijen',
    'computer reparatie gilze en rijen',
    'laptop reparatie gilze en rijen',
    'ICT student gilze en rijen',
    'pc hulp gilze en rijen',
    'computer student gilze en rijen',
    'gilze en rijen computerhulp avond',
    'gilze en rijen IT hulp weekend',
    'computerhulp gilze en rijen spoed',
    'betaalbare IT hulp gilze en rijen',
    'wifi problemen gilze en rijen',
    'internet hulp gilze en rijen',
    'printer installatie gilze en rijen',
    'virus verwijderen gilze en rijen',
    'computerhulp rijen',
    'ict hulp gilze',
    'computer reparatie molenschot',
    'laptop hulp rijen centrum',
    'pc hulp gilze centrum',
    'it hulp hulten',
    'computerhulp gilze en rijen',
    'it service gilze en rijen',
    'computer problemen gilze en rijen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gilze en Rijen | Hulp met IT',
    description: 'Computerhulp aan huis in Gilze en Rijen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-gilze-en-rijen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Gilze en Rijen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gilze en Rijen | Hulp met IT',
    description: 'Computerhulp aan huis in Gilze en Rijen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gilze-en-rijen'
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

export default function ComputerhulpAanHuisGilzeEnRijenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis | HBO ICT-student bij u thuis | Hulp met IT',
  description: 'Computerhulp aan huis door HBO-opgeleide ICT-studenten in heel Nederland. Hulp met uw laptop, printer, WiFi, e-mail en meer. €14,50 per kwartier + €10 voorrijkosten. 7 dagen per week beschikbaar!',
  keywords: [
    'computerhulp aan huis',
    'computer reparatie aan huis',
    'laptop reparatie thuis',
    'ICT student aan huis',
    'computerhulp thuis',
    'computer service aan huis',
    'pc hulp thuis',
    'computerhulp studenten',
    'computer hulp aan huis',
    'IT ondersteuning thuis',
    'pc reparatie thuis',
    'laptop hulp aan huis',
    'thuishulp computer',
    'betaalbare computerhulp',
    'computerhulp aan huis nederland',
    'computerhulp senioren',
    'computer hulp ouderen',
    'wifi problemen hulp',
    'printer installatie thuis',
    'virus verwijderen aan huis'
  ],
  openGraph: {
    title: 'Computerhulp aan huis | HBO ICT-student bij u thuis | Hulp met IT',
    description: 'Computerhulp aan huis door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis | Hulp met IT',
    description: 'Computerhulp aan huis door HBO ICT-studenten. €14,50/kwartier + €10 voorrijkosten. 7 dagen per week!',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis'
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

export default function ComputerhulpAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

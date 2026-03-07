import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zaandam | Hulp met IT',
  description: 'Computerhulp aan huis in Zaandam door HBO-opgeleide ICT-studenten. Hulp in Zaandam Centrum, Zaandam Zuid, Zaandam Noord en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zaandam',
    'computer reparatie zaandam',
    'laptop reparatie zaandam',
    'ICT student zaandam',
    'pc hulp zaandam',
    'computer student zaandam',
    'zaandam computerhulp avond',
    'zaandam IT hulp weekend',
    'computerhulp zaandam spoed',
    'betaalbare IT hulp zaandam',
    'wifi problemen zaandam',
    'internet hulp zaandam',
    'printer installatie zaandam',
    'virus verwijderen zaandam',
    'computerhulp zaandam centrum',
    'ict hulp zaandam zuid',
    'computer reparatie zaandam noord',
    'laptop hulp wormerveer',
    'pc hulp krommenie',
    'it hulp assendelft',
    'computerhulp zaandam',
    'it service zaandam',
    'computer problemen zaandam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zaandam | Hulp met IT',
    description: 'Computerhulp aan huis in Zaandam door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zaandam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zaandam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zaandam | Hulp met IT',
    description: 'Computerhulp aan huis in Zaandam. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zaandam'
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

export default function ComputerhulpAanHuisZaandamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

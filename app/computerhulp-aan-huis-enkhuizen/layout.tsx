import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Enkhuizen | Hulp met IT',
  description: 'Computerhulp aan huis in Enkhuizen door HBO-opgeleide ICT-studenten. Hulp in Enkhuizen-Centrum, Gommerwijk, Fruittuinen en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis enkhuizen',
    'computer reparatie enkhuizen',
    'laptop reparatie enkhuizen',
    'ICT student enkhuizen',
    'pc hulp enkhuizen',
    'computer student enkhuizen',
    'enkhuizen computerhulp avond',
    'enkhuizen IT hulp weekend',
    'computerhulp enkhuizen spoed',
    'betaalbare IT hulp enkhuizen',
    'wifi problemen enkhuizen',
    'internet hulp enkhuizen',
    'printer installatie enkhuizen',
    'virus verwijderen enkhuizen',
    'computerhulp enkhuizen-centrum',
    'ict hulp gommerwijk',
    'computer reparatie fruittuinen',
    'laptop hulp kadijken',
    'pc hulp westerstrand',
    'it hulp enkhuizen-zuid',
    'computerhulp enkhuizen',
    'it service enkhuizen',
    'computer problemen enkhuizen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Enkhuizen | Hulp met IT',
    description: 'Computerhulp aan huis in Enkhuizen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-enkhuizen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Enkhuizen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Enkhuizen | Hulp met IT',
    description: 'Computerhulp aan huis in Enkhuizen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-enkhuizen'
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

export default function ComputerhulpAanHuisEnkhuizenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

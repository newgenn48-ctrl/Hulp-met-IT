import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Stichtse Vecht | Hulp met IT',
  description: 'Computerhulp aan huis in Stichtse Vecht door HBO-opgeleide ICT-studenten. Hulp in Maarssen, Breukelen, Loenen aan de Vecht en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis stichtse vecht',
    'computer reparatie stichtse vecht',
    'laptop reparatie stichtse vecht',
    'ICT student stichtse vecht',
    'pc hulp stichtse vecht',
    'computer student stichtse vecht',
    'stichtse vecht computerhulp avond',
    'stichtse vecht IT hulp weekend',
    'computerhulp stichtse vecht spoed',
    'betaalbare IT hulp stichtse vecht',
    'wifi problemen stichtse vecht',
    'internet hulp stichtse vecht',
    'printer installatie stichtse vecht',
    'virus verwijderen stichtse vecht',
    'computerhulp maarssen',
    'ict hulp breukelen',
    'computer reparatie loenen aan de vecht',
    'laptop hulp nieuwersluis',
    'pc hulp nigtevecht',
    'it hulp oud-zuilen',
    'computerhulp stichtse vecht',
    'it service stichtse vecht',
    'computer problemen stichtse vecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Stichtse Vecht | Hulp met IT',
    description: 'Computerhulp aan huis in Stichtse Vecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-stichtse-vecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Stichtse Vecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Stichtse Vecht | Hulp met IT',
    description: 'Computerhulp aan huis in Stichtse Vecht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-stichtse-vecht'
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

export default function ComputerhulpAanHuisStichtseVechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

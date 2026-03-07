import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Wijdemeren | Hulp met IT',
  description: 'Computerhulp aan huis in Wijdemeren door HBO-opgeleide ICT-studenten. Hulp in Loosdrecht, Nederhorst den Berg, Kortenhoef en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis wijdemeren',
    'computer reparatie wijdemeren',
    'laptop reparatie wijdemeren',
    'ICT student wijdemeren',
    'pc hulp wijdemeren',
    'computer student wijdemeren',
    'wijdemeren computerhulp avond',
    'wijdemeren IT hulp weekend',
    'computerhulp wijdemeren spoed',
    'betaalbare IT hulp wijdemeren',
    'wifi problemen wijdemeren',
    'internet hulp wijdemeren',
    'printer installatie wijdemeren',
    'virus verwijderen wijdemeren',
    'computerhulp loosdrecht',
    'ict hulp nederhorst den berg',
    'computer reparatie kortenhoef',
    'laptop hulp ankeveen',
    'pc hulp breukeleveen',
    'it hulp nieuw-loosdrecht',
    'computerhulp wijdemeren',
    'it service wijdemeren',
    'computer problemen wijdemeren'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Wijdemeren | Hulp met IT',
    description: 'Computerhulp aan huis in Wijdemeren door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-wijdemeren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Wijdemeren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Wijdemeren | Hulp met IT',
    description: 'Computerhulp aan huis in Wijdemeren. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-wijdemeren'
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

export default function ComputerhulpAanHuisWijdemerenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

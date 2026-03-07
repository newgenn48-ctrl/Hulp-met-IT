import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Medemblik | Hulp met IT',
  description: 'Computerhulp aan huis in Medemblik door HBO-opgeleide ICT-studenten. Hulp in Medemblik, Wognum, Nibbixwoud en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis medemblik',
    'computer reparatie medemblik',
    'laptop reparatie medemblik',
    'ICT student medemblik',
    'pc hulp medemblik',
    'computer student medemblik',
    'medemblik computerhulp avond',
    'medemblik IT hulp weekend',
    'computerhulp medemblik spoed',
    'betaalbare IT hulp medemblik',
    'wifi problemen medemblik',
    'internet hulp medemblik',
    'printer installatie medemblik',
    'virus verwijderen medemblik',
    'computerhulp medemblik',
    'ict hulp wognum',
    'computer reparatie nibbixwoud',
    'laptop hulp opperdoes',
    'pc hulp abbekerk',
    'it hulp benningbroek',
    'it service medemblik',
    'computer problemen medemblik',
    'it hulp aan huis medemblik'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Medemblik | Hulp met IT',
    description: 'Computerhulp aan huis in Medemblik door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-medemblik',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Medemblik - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Medemblik | Hulp met IT',
    description: 'Computerhulp aan huis in Medemblik. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-medemblik'
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

export default function ComputerhulpAanHuisMedemblikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

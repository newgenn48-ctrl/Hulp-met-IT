import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis IJsselstein | Hulp met IT',
  description: 'Computerhulp aan huis in IJsselstein door HBO-opgeleide ICT-studenten. Hulp in IJsselstein Centrum, IJsselstein Noord, IJsselstein Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis ijsselstein',
    'computer reparatie ijsselstein',
    'laptop reparatie ijsselstein',
    'ICT student ijsselstein',
    'pc hulp ijsselstein',
    'computer student ijsselstein',
    'ijsselstein computerhulp avond',
    'ijsselstein IT hulp weekend',
    'computerhulp ijsselstein spoed',
    'betaalbare IT hulp ijsselstein',
    'wifi problemen ijsselstein',
    'internet hulp ijsselstein',
    'printer installatie ijsselstein',
    'virus verwijderen ijsselstein',
    'computerhulp ijsselstein centrum',
    'ict hulp ijsselstein noord',
    'computer reparatie ijsselstein zuid',
    'laptop hulp zenderpark',
    'pc hulp achterveld',
    'it hulp groenvliet',
    'computerhulp ijsselstein',
    'it service ijsselstein',
    'computer problemen ijsselstein'
  ],
  openGraph: {
    title: 'Computerhulp aan huis IJsselstein | Hulp met IT',
    description: 'Computerhulp aan huis in IJsselstein door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-ijsselstein',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis IJsselstein - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis IJsselstein | Hulp met IT',
    description: 'Computerhulp aan huis in IJsselstein. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-ijsselstein'
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

export default function ComputerhulpAanHuisIjsselsteinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

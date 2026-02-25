import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Utrechtse Heuvelrug | Hulp met IT',
  description: 'Computerhulp aan huis in Utrechtse Heuvelrug door HBO-opgeleide ICT-studenten. Hulp in Doorn, Driebergen-Rijsenburg, Amerongen en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis utrechtse heuvelrug',
    'computer reparatie utrechtse heuvelrug',
    'laptop reparatie utrechtse heuvelrug',
    'ICT student utrechtse heuvelrug',
    'pc hulp utrechtse heuvelrug',
    'computer student utrechtse heuvelrug',
    'utrechtse heuvelrug computerhulp avond',
    'utrechtse heuvelrug IT hulp weekend',
    'computerhulp utrechtse heuvelrug spoed',
    'betaalbare IT hulp utrechtse heuvelrug',
    'wifi problemen utrechtse heuvelrug',
    'internet hulp utrechtse heuvelrug',
    'printer installatie utrechtse heuvelrug',
    'virus verwijderen utrechtse heuvelrug',
    'computerhulp doorn',
    'ict hulp driebergen-rijsenburg',
    'computer reparatie amerongen',
    'laptop hulp maarn',
    'pc hulp leersum',
    'it hulp overberg',
    'computerhulp utrechtse heuvelrug',
    'it service utrechtse heuvelrug',
    'computer problemen utrechtse heuvelrug'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Utrechtse Heuvelrug | Hulp met IT',
    description: 'Computerhulp aan huis in Utrechtse Heuvelrug door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-utrechtse-heuvelrug',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Utrechtse Heuvelrug - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Utrechtse Heuvelrug | Hulp met IT',
    description: 'Computerhulp aan huis in Utrechtse Heuvelrug. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-utrechtse-heuvelrug'
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

export default function ComputerhulpAanHuisUtrechtseHeuvelrugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

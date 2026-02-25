import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gorinchem | Hulp met IT',
  description: 'Computerhulp aan huis in Gorinchem door HBO-opgeleide ICT-studenten. Hulp in Gorinchem Centrum, Gorinchem Oost, Gorinchem West en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis gorinchem',
    'computer reparatie gorinchem',
    'laptop reparatie gorinchem',
    'ICT student gorinchem',
    'pc hulp gorinchem',
    'computer student gorinchem',
    'gorinchem computerhulp avond',
    'gorinchem IT hulp weekend',
    'computerhulp gorinchem spoed',
    'betaalbare IT hulp gorinchem',
    'wifi problemen gorinchem',
    'internet hulp gorinchem',
    'printer installatie gorinchem',
    'virus verwijderen gorinchem',
    'computerhulp gorinchem centrum',
    'ict hulp gorinchem oost',
    'computer reparatie gorinchem west',
    'laptop hulp haarwijk',
    'pc hulp stalkaarsen',
    'it hulp dalem',
    'computerhulp gorinchem',
    'it service gorinchem',
    'computer problemen gorinchem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gorinchem | Hulp met IT',
    description: 'Computerhulp aan huis in Gorinchem door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-gorinchem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Gorinchem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gorinchem | Hulp met IT',
    description: 'Computerhulp aan huis in Gorinchem. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gorinchem'
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

export default function ComputerhulpAanHuisGorinchemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp met IT',
  description: 'Computerhulp aan huis in Alphen aan den Rijn door HBO-opgeleide ICT-studenten. Hulp in Alphen Centrum, Alphen Noord, Alphen Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop reparatie alphen aan den rijn',
    'ICT student alphen aan den rijn',
    'pc hulp alphen aan den rijn',
    'computer student alphen aan den rijn',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp alphen aan den rijn spoed',
    'betaalbare IT hulp alphen aan den rijn',
    'wifi problemen alphen aan den rijn',
    'internet hulp alphen aan den rijn',
    'printer installatie alphen aan den rijn',
    'virus verwijderen alphen aan den rijn',
    'computerhulp alphen centrum',
    'ict hulp alphen noord',
    'computer reparatie alphen oost',
    'laptop hulp alphen west',
    'pc hulp alphen zuid',
    'it hulp koudekerk',
    'computerhulp alphen aan den rijn',
    'it service alphen',
    'laptop reparatie alphen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp met IT',
    description: 'Computerhulp aan huis in Alphen aan den Rijn door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-alphen-aan-den-rijn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Alphen aan den Rijn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp met IT',
    description: 'Computerhulp aan huis in Alphen aan den Rijn. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alphen-aan-den-rijn'
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

export default function ComputerhulpAanHuisAlphenAanDenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

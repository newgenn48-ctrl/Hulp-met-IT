import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Helmond | Hulp met IT',
  description: 'Computerhulp aan huis in Helmond door HBO-opgeleide ICT-studenten. Hulp in Helmond Centrum, Helmond Noord, Helmond Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis helmond',
    'computer reparatie helmond',
    'laptop reparatie helmond',
    'ICT student helmond',
    'pc hulp helmond',
    'computer student helmond',
    'helmond computerhulp avond',
    'helmond IT hulp weekend',
    'computerhulp helmond spoed',
    'betaalbare IT hulp helmond',
    'wifi problemen helmond',
    'internet hulp helmond',
    'printer installatie helmond',
    'virus verwijderen helmond',
    'computerhulp helmond centrum',
    'ict hulp helmond noord',
    'computer reparatie helmond oost',
    'laptop hulp helmond west',
    'pc hulp brandevoort',
    'it hulp rijpelberg',
    'computerhulp helmond',
    'it service helmond',
    'computer problemen helmond'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Helmond | Hulp met IT',
    description: 'Computerhulp aan huis in Helmond door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-helmond',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Helmond - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Helmond | Hulp met IT',
    description: 'Computerhulp aan huis in Helmond. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-helmond'
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

export default function ComputerhulpAanHuisHelmondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

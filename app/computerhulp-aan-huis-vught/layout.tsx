import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vught | Hulp met IT',
  description: 'Computerhulp aan huis in Vught door HBO-opgeleide ICT-studenten. Hulp in Vught Centrum, Cromvoirt, Helvoirt en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis vught',
    'computer reparatie vught',
    'laptop reparatie vught',
    'ICT student vught',
    'pc hulp vught',
    'computer student vught',
    'vught computerhulp avond',
    'vught IT hulp weekend',
    'computerhulp vught spoed',
    'betaalbare IT hulp vught',
    'wifi problemen vught',
    'internet hulp vught',
    'printer installatie vught',
    'virus verwijderen vught',
    'computerhulp vught centrum',
    'ict hulp cromvoirt',
    'computer reparatie helvoirt',
    'laptop hulp villapark',
    'pc hulp vught noord',
    'it hulp vught zuid',
    'computerhulp vught',
    'it service vught',
    'computer problemen vught'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vught | Hulp met IT',
    description: 'Computerhulp aan huis in Vught door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-vught',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Vught - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vught | Hulp met IT',
    description: 'Computerhulp aan huis in Vught. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vught'
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

export default function ComputerhulpAanHuisVughtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

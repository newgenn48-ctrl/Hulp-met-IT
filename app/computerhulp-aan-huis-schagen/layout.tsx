import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Schagen | Hulp met IT',
  description: 'Computerhulp aan huis in Schagen door HBO-opgeleide ICT-studenten. Hulp in Schagen, Tuitjenhorn, Warmenhuizen en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis schagen',
    'computer reparatie schagen',
    'laptop reparatie schagen',
    'ICT student schagen',
    'pc hulp schagen',
    'computer student schagen',
    'schagen computerhulp avond',
    'schagen IT hulp weekend',
    'computerhulp schagen spoed',
    'betaalbare IT hulp schagen',
    'wifi problemen schagen',
    'internet hulp schagen',
    'printer installatie schagen',
    'virus verwijderen schagen',
    'computerhulp schagen',
    'ict hulp tuitjenhorn',
    'computer reparatie warmenhuizen',
    'laptop hulp dirkshorn',
    'pc hulp callantsoog',
    'it hulp sint maartensbrug',
    'it service schagen',
    'computer problemen schagen',
    'it hulp aan huis schagen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Schagen | Hulp met IT',
    description: 'Computerhulp aan huis in Schagen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-schagen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Schagen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Schagen | Hulp met IT',
    description: 'Computerhulp aan huis in Schagen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-schagen'
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

export default function ComputerhulpAanHuisSchagenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

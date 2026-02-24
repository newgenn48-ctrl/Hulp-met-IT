import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Groningen | Hulp met IT',
  description: 'Computerhulp aan huis in Groningen door HBO-opgeleide ICT-studenten. Hulp in Groningen Centrum, Groningen Noord, Groningen Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis groningen',
    'computer reparatie groningen',
    'laptop reparatie groningen',
    'ICT student groningen',
    'pc hulp groningen',
    'computer student groningen',
    'groningen computerhulp avond',
    'groningen IT hulp weekend',
    'computerhulp groningen spoed',
    'betaalbare IT hulp groningen',
    'wifi problemen groningen',
    'internet hulp groningen',
    'printer installatie groningen',
    'virus verwijderen groningen',
    'computerhulp groningen centrum',
    'ict hulp groningen noord',
    'computer reparatie groningen oost',
    'laptop hulp groningen west',
    'pc hulp groningen zuid',
    'it hulp paddepoel',
    'computerhulp groningen',
    'it service groningen',
    'computer problemen groningen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Groningen | Hulp met IT',
    description: 'Computerhulp aan huis in Groningen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-groningen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Groningen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Groningen | Hulp met IT',
    description: 'Computerhulp aan huis in Groningen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-groningen'
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

export default function ComputerhulpAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

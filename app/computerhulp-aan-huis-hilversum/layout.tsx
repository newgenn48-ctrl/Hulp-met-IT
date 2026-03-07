import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hilversum | Hulp met IT',
  description: 'Computerhulp aan huis in Hilversum door HBO-opgeleide ICT-studenten. Hulp in Hilversum Centrum, Hilversum Noord, Hilversum Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hilversum',
    'computer reparatie hilversum',
    'laptop reparatie hilversum',
    'ICT student hilversum',
    'pc hulp hilversum',
    'computer student hilversum',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend',
    'computerhulp hilversum spoed',
    'betaalbare IT hulp hilversum',
    'wifi problemen hilversum',
    'internet hulp hilversum',
    'printer installatie hilversum',
    'virus verwijderen hilversum',
    'computerhulp hilversum centrum',
    'ict hulp hilversum noord',
    'computer reparatie hilversum oost',
    'laptop hulp hilversum west',
    'pc hulp hilversum zuid',
    'it hulp kerkelanden',
    'computerhulp hilversum',
    'it service hilversum',
    'computer problemen hilversum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hilversum | Hulp met IT',
    description: 'Computerhulp aan huis in Hilversum door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hilversum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hilversum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hilversum | Hulp met IT',
    description: 'Computerhulp aan huis in Hilversum. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hilversum'
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

export default function ComputerhulpAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

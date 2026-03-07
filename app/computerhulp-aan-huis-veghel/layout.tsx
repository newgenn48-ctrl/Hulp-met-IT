import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Veghel | Hulp met IT',
  description: 'Computerhulp aan huis in Veghel door HBO-opgeleide ICT-studenten. Hulp in Veghel Centrum, Veghel Noord, Veghel Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis veghel',
    'computer reparatie veghel',
    'laptop reparatie veghel',
    'ICT student veghel',
    'pc hulp veghel',
    'computer student veghel',
    'veghel computerhulp avond',
    'veghel IT hulp weekend',
    'computerhulp veghel spoed',
    'betaalbare IT hulp veghel',
    'wifi problemen veghel',
    'internet hulp veghel',
    'printer installatie veghel',
    'virus verwijderen veghel',
    'computerhulp veghel centrum',
    'ict hulp veghel noord',
    'computer reparatie veghel zuid',
    'laptop hulp eerde',
    'pc hulp zijtaart',
    'it hulp sint-oedenrode',
    'computerhulp veghel',
    'it service veghel',
    'computer problemen veghel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Veghel | Hulp met IT',
    description: 'Computerhulp aan huis in Veghel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-veghel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Veghel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Veghel | Hulp met IT',
    description: 'Computerhulp aan huis in Veghel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-veghel'
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

export default function ComputerhulpAanHuisVeghelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

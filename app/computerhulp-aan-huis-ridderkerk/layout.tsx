import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Ridderkerk | Hulp met IT',
  description: 'Computerhulp aan huis in Ridderkerk door HBO-opgeleide ICT-studenten. Hulp in Ridderkerk Centrum, Drievliet, Bolnes en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis ridderkerk',
    'computer reparatie ridderkerk',
    'laptop reparatie ridderkerk',
    'ICT student ridderkerk',
    'pc hulp ridderkerk',
    'computer student ridderkerk',
    'ridderkerk computerhulp avond',
    'ridderkerk IT hulp weekend',
    'computerhulp ridderkerk spoed',
    'betaalbare IT hulp ridderkerk',
    'wifi problemen ridderkerk',
    'internet hulp ridderkerk',
    'printer installatie ridderkerk',
    'virus verwijderen ridderkerk',
    'computerhulp ridderkerk centrum',
    'ict hulp drievliet',
    'computer reparatie bolnes',
    'laptop hulp slikkerveer',
    'pc hulp rijsoord',
    'it hulp donkersloot',
    'computerhulp ridderkerk',
    'it service ridderkerk',
    'computer problemen ridderkerk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Ridderkerk | Hulp met IT',
    description: 'Computerhulp aan huis in Ridderkerk door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-ridderkerk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Ridderkerk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Ridderkerk | Hulp met IT',
    description: 'Computerhulp aan huis in Ridderkerk. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-ridderkerk'
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

export default function ComputerhulpAanHuisRidderkerkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

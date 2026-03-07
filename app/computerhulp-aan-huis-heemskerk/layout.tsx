import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Heemskerk | Hulp met IT',
  description: 'Computerhulp aan huis in Heemskerk door HBO-opgeleide ICT-studenten. Hulp in Heemskerk, Assumburg, De Maer en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis heemskerk',
    'computer reparatie heemskerk',
    'laptop reparatie heemskerk',
    'ICT student heemskerk',
    'pc hulp heemskerk',
    'computer student heemskerk',
    'heemskerk computerhulp avond',
    'heemskerk IT hulp weekend',
    'computerhulp heemskerk spoed',
    'betaalbare IT hulp heemskerk',
    'wifi problemen heemskerk',
    'internet hulp heemskerk',
    'printer installatie heemskerk',
    'virus verwijderen heemskerk',
    'computerhulp heemskerk',
    'ict hulp assumburg',
    'computer reparatie de maer',
    'laptop hulp waterakkers',
    'pc hulp heemskerk-west',
    'it hulp heemskerk-oost',
    'it service heemskerk',
    'computer problemen heemskerk',
    'it hulp aan huis heemskerk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Heemskerk | Hulp met IT',
    description: 'Computerhulp aan huis in Heemskerk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-heemskerk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Heemskerk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Heemskerk | Hulp met IT',
    description: 'Computerhulp aan huis in Heemskerk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-heemskerk'
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

export default function ComputerhulpAanHuisHeemskerkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

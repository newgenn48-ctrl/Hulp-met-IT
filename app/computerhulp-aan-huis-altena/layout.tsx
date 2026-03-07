import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Altena | Hulp met IT',
  description: 'Computerhulp aan huis in Altena door HBO-opgeleide ICT-studenten. Hulp in Woudrichem, Werkendam, Almkerk en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis altena',
    'computer reparatie altena',
    'laptop reparatie altena',
    'ICT student altena',
    'pc hulp altena',
    'computer student altena',
    'altena computerhulp avond',
    'altena IT hulp weekend',
    'computerhulp altena spoed',
    'betaalbare IT hulp altena',
    'wifi problemen altena',
    'internet hulp altena',
    'printer installatie altena',
    'virus verwijderen altena',
    'computerhulp woudrichem',
    'ict hulp werkendam',
    'computer reparatie almkerk',
    'laptop hulp sleeuwijk',
    'pc hulp dussen',
    'it hulp hank',
    'computerhulp altena',
    'it service altena',
    'computer problemen altena'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Altena | Hulp met IT',
    description: 'Computerhulp aan huis in Altena door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-altena',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Altena - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Altena | Hulp met IT',
    description: 'Computerhulp aan huis in Altena. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-altena'
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

export default function ComputerhulpAanHuisAltenaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zwolle | Hulp met IT',
  description: 'Computerhulp aan huis in Zwolle door HBO-opgeleide ICT-studenten. Hulp in Zwolle Centrum, Zwolle Noord, Zwolle Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zwolle',
    'computer reparatie zwolle',
    'laptop reparatie zwolle',
    'ICT student zwolle',
    'pc hulp zwolle',
    'computer student zwolle',
    'zwolle computerhulp avond',
    'zwolle IT hulp weekend',
    'computerhulp zwolle spoed',
    'betaalbare IT hulp zwolle',
    'wifi problemen zwolle',
    'internet hulp zwolle',
    'printer installatie zwolle',
    'virus verwijderen zwolle',
    'computerhulp zwolle centrum',
    'ict hulp zwolle noord',
    'computer reparatie zwolle oost',
    'laptop hulp zwolle west',
    'pc hulp zwolle zuid',
    'it hulp stadshagen',
    'computerhulp zwolle',
    'it service zwolle',
    'computer problemen zwolle'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zwolle | Hulp met IT',
    description: 'Computerhulp aan huis in Zwolle door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zwolle',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zwolle - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zwolle | Hulp met IT',
    description: 'Computerhulp aan huis in Zwolle. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zwolle'
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

export default function ComputerhulpAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Goeree-Overflakkee | Hulp met IT',
  description: 'Computerhulp aan huis in Goeree-Overflakkee door HBO-opgeleide ICT-studenten. Hulp in Middelharnis, Sommelsdijk, Ouddorp en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis goeree-overflakkee',
    'computer reparatie goeree-overflakkee',
    'laptop reparatie goeree-overflakkee',
    'ICT student goeree-overflakkee',
    'pc hulp goeree-overflakkee',
    'computer student goeree-overflakkee',
    'goeree-overflakkee computerhulp avond',
    'goeree-overflakkee IT hulp weekend',
    'computerhulp goeree-overflakkee spoed',
    'betaalbare IT hulp goeree-overflakkee',
    'wifi problemen goeree-overflakkee',
    'internet hulp goeree-overflakkee',
    'printer installatie goeree-overflakkee',
    'virus verwijderen goeree-overflakkee',
    'computerhulp middelharnis',
    'ict hulp sommelsdijk',
    'computer reparatie ouddorp',
    'laptop hulp goedereede',
    'pc hulp dirksland',
    'it hulp stellendam',
    'computerhulp goeree-overflakkee',
    'it service goeree-overflakkee',
    'computer problemen goeree-overflakkee'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Goeree-Overflakkee | Hulp met IT',
    description: 'Computerhulp aan huis in Goeree-Overflakkee door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-goeree-overflakkee',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Goeree-Overflakkee - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Goeree-Overflakkee | Hulp met IT',
    description: 'Computerhulp aan huis in Goeree-Overflakkee. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-goeree-overflakkee'
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

export default function ComputerhulpAanHuisGoereeOverflakkeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

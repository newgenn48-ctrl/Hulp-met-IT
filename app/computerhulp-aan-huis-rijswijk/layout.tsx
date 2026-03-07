import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rijswijk | Hulp met IT',
  description: 'Computerhulp aan huis in Rijswijk door HBO-opgeleide ICT-studenten. Hulp in Rijswijk Centrum, Rijswijk-Zuid, Ypenburg en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis rijswijk',
    'computer reparatie rijswijk',
    'laptop reparatie rijswijk',
    'ICT student rijswijk',
    'pc hulp rijswijk',
    'computer student rijswijk',
    'rijswijk computerhulp avond',
    'rijswijk IT hulp weekend',
    'computerhulp rijswijk spoed',
    'betaalbare IT hulp rijswijk',
    'wifi problemen rijswijk',
    'internet hulp rijswijk',
    'printer installatie rijswijk',
    'virus verwijderen rijswijk',
    'computerhulp rijswijk centrum',
    'ict hulp rijswijk-zuid',
    'computer reparatie ypenburg',
    'laptop hulp plaspoelpolder',
    'pc hulp bomenbuurt',
    'it hulp stervoorde',
    'computerhulp rijswijk',
    'it service rijswijk',
    'computer problemen rijswijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rijswijk | Hulp met IT',
    description: 'Computerhulp aan huis in Rijswijk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-rijswijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Rijswijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rijswijk | Hulp met IT',
    description: 'Computerhulp aan huis in Rijswijk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rijswijk'
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

export default function ComputerhulpAanHuisRijswijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

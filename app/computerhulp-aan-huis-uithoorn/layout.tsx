import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Uithoorn | Hulp met IT',
  description: 'Computerhulp aan huis in Uithoorn door HBO-opgeleide ICT-studenten. Hulp in Uithoorn, De Kwakel, Thamerdal en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis uithoorn',
    'computer reparatie uithoorn',
    'laptop reparatie uithoorn',
    'ICT student uithoorn',
    'pc hulp uithoorn',
    'computer student uithoorn',
    'uithoorn computerhulp avond',
    'uithoorn IT hulp weekend',
    'computerhulp uithoorn spoed',
    'betaalbare IT hulp uithoorn',
    'wifi problemen uithoorn',
    'internet hulp uithoorn',
    'printer installatie uithoorn',
    'virus verwijderen uithoorn',
    'computerhulp uithoorn',
    'ict hulp de kwakel',
    'computer reparatie thamerdal',
    'laptop hulp legmeer',
    'pc hulp uithoorn-centrum',
    'it hulp zijdelwaard',
    'it service uithoorn',
    'computer problemen uithoorn',
    'it hulp aan huis uithoorn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Uithoorn | Hulp met IT',
    description: 'Computerhulp aan huis in Uithoorn door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-uithoorn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Uithoorn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Uithoorn | Hulp met IT',
    description: 'Computerhulp aan huis in Uithoorn. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-uithoorn'
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

export default function ComputerhulpAanHuisUithoornLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

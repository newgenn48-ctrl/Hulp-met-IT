import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Lansingerland | Hulp met IT',
  description: 'Computerhulp aan huis in Lansingerland door HBO-opgeleide ICT-studenten. Hulp in Berkel en Rodenrijs, Bergschenhoek, Bleiswijk en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis lansingerland',
    'computer reparatie lansingerland',
    'laptop reparatie lansingerland',
    'ICT student lansingerland',
    'pc hulp lansingerland',
    'computer student lansingerland',
    'lansingerland computerhulp avond',
    'lansingerland IT hulp weekend',
    'computerhulp lansingerland spoed',
    'betaalbare IT hulp lansingerland',
    'wifi problemen lansingerland',
    'internet hulp lansingerland',
    'printer installatie lansingerland',
    'virus verwijderen lansingerland',
    'computerhulp berkel en rodenrijs',
    'ict hulp bergschenhoek',
    'computer reparatie bleiswijk',
    'laptop hulp noordeinde',
    'pc hulp kruisweg',
    'it hulp rotte',
    'computerhulp lansingerland',
    'it service lansingerland',
    'computer problemen lansingerland'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Lansingerland | Hulp met IT',
    description: 'Computerhulp aan huis in Lansingerland door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-lansingerland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Lansingerland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Lansingerland | Hulp met IT',
    description: 'Computerhulp aan huis in Lansingerland. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-lansingerland'
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

export default function ComputerhulpAanHuisLansingerlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

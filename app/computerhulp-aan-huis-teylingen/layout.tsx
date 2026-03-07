import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Teylingen | Hulp met IT',
  description: 'Computerhulp aan huis in Teylingen door HBO-opgeleide ICT-studenten. Hulp in Sassenheim, Voorhout, Warmond en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis teylingen',
    'computer reparatie teylingen',
    'laptop reparatie teylingen',
    'ICT student teylingen',
    'pc hulp teylingen',
    'computer student teylingen',
    'teylingen computerhulp avond',
    'teylingen IT hulp weekend',
    'computerhulp teylingen spoed',
    'betaalbare IT hulp teylingen',
    'wifi problemen teylingen',
    'internet hulp teylingen',
    'printer installatie teylingen',
    'virus verwijderen teylingen',
    'computerhulp sassenheim',
    'ict hulp voorhout',
    'computer reparatie warmond',
    'laptop hulp sassenheim-noord',
    'pc hulp sassenheim-zuid',
    'it hulp voorhout-west',
    'computerhulp teylingen',
    'it service teylingen',
    'computer problemen teylingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Teylingen | Hulp met IT',
    description: 'Computerhulp aan huis in Teylingen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-teylingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Teylingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Teylingen | Hulp met IT',
    description: 'Computerhulp aan huis in Teylingen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-teylingen'
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

export default function ComputerhulpAanHuisTeylingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

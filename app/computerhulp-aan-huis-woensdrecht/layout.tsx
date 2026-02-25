import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Woensdrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Woensdrecht door HBO-opgeleide ICT-studenten. Hulp in Hoogerheide, Huijbergen, Putte en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis woensdrecht',
    'computer reparatie woensdrecht',
    'laptop reparatie woensdrecht',
    'ICT student woensdrecht',
    'pc hulp woensdrecht',
    'computer student woensdrecht',
    'woensdrecht computerhulp avond',
    'woensdrecht IT hulp weekend',
    'computerhulp woensdrecht spoed',
    'betaalbare IT hulp woensdrecht',
    'wifi problemen woensdrecht',
    'internet hulp woensdrecht',
    'printer installatie woensdrecht',
    'virus verwijderen woensdrecht',
    'computerhulp hoogerheide',
    'ict hulp huijbergen',
    'computer reparatie putte',
    'laptop hulp ossendrecht',
    'pc hulp woensdrecht dorp',
    'it hulp calfven',
    'computerhulp woensdrecht',
    'it service woensdrecht',
    'computer problemen woensdrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Woensdrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Woensdrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-woensdrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Woensdrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Woensdrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Woensdrecht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-woensdrecht'
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

export default function ComputerhulpAanHuisWoensdrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

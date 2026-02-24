import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Blaricum | Hulp met IT',
  description: 'Computerhulp aan huis in Blaricum door HBO-opgeleide ICT-studenten. Hulp in Blaricum Centrum, Blaricum Noord, Blaricum Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis blaricum',
    'computer reparatie blaricum',
    'laptop reparatie blaricum',
    'ICT student blaricum',
    'pc hulp blaricum',
    'computer student blaricum',
    'blaricum computerhulp avond',
    'blaricum IT hulp weekend',
    'computerhulp blaricum spoed',
    'betaalbare IT hulp blaricum',
    'wifi problemen blaricum',
    'internet hulp blaricum',
    'printer installatie blaricum',
    'virus verwijderen blaricum',
    'computerhulp blaricum centrum',
    'ict hulp blaricum noord',
    'computer reparatie blaricum oost',
    'laptop hulp blaricum west',
    'pc hulp blaricum zuid',
    'it hulp laren',
    'computerhulp blaricum',
    'it service blaricum',
    'computer problemen blaricum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Blaricum | Hulp met IT',
    description: 'Computerhulp aan huis in Blaricum door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-blaricum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Blaricum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Blaricum | Hulp met IT',
    description: 'Computerhulp aan huis in Blaricum. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-blaricum'
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

export default function ComputerhulpAanHuisBlaricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

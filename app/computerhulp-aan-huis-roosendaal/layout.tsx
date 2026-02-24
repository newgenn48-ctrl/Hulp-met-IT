import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Roosendaal | Hulp met IT',
  description: 'Computerhulp aan huis in Roosendaal door HBO-opgeleide ICT-studenten. Hulp in Roosendaal Centrum, Roosendaal Noord, Roosendaal Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis roosendaal',
    'computer reparatie roosendaal',
    'laptop reparatie roosendaal',
    'ICT student roosendaal',
    'pc hulp roosendaal',
    'computer student roosendaal',
    'roosendaal computerhulp avond',
    'roosendaal IT hulp weekend',
    'computerhulp roosendaal spoed',
    'betaalbare IT hulp roosendaal',
    'wifi problemen roosendaal',
    'internet hulp roosendaal',
    'printer installatie roosendaal',
    'virus verwijderen roosendaal',
    'computerhulp roosendaal centrum',
    'ict hulp roosendaal noord',
    'computer reparatie roosendaal oost',
    'laptop hulp tolberg',
    'pc hulp kroeven',
    'it hulp langdonk',
    'computerhulp roosendaal',
    'it service roosendaal',
    'computer problemen roosendaal'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Roosendaal | Hulp met IT',
    description: 'Computerhulp aan huis in Roosendaal door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-roosendaal',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Roosendaal - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Roosendaal | Hulp met IT',
    description: 'Computerhulp aan huis in Roosendaal. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-roosendaal'
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

export default function ComputerhulpAanHuisRoosendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

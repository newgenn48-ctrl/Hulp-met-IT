import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Dordrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Dordrecht door HBO-opgeleide ICT-studenten. Hulp in Dordrecht Centrum, Dordrecht Noord, Dordrecht Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis dordrecht',
    'computer reparatie dordrecht',
    'laptop reparatie dordrecht',
    'ICT student dordrecht',
    'pc hulp dordrecht',
    'computer student dordrecht',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend',
    'computerhulp dordrecht spoed',
    'betaalbare IT hulp dordrecht',
    'wifi problemen dordrecht',
    'internet hulp dordrecht',
    'printer installatie dordrecht',
    'virus verwijderen dordrecht',
    'computerhulp dordrecht centrum',
    'ict hulp dordrecht noord',
    'computer reparatie dordrecht oost',
    'laptop hulp dordrecht west',
    'pc hulp dordrecht zuid',
    'it hulp wielwijk',
    'computerhulp dordrecht',
    'it service dordrecht',
    'computer problemen dordrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Dordrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Dordrecht door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-dordrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Dordrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Dordrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Dordrecht. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dordrecht'
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

export default function ComputerhulpAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

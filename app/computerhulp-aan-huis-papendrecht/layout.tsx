import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Papendrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Papendrecht door HBO-opgeleide ICT-studenten. Hulp in Papendrecht Centrum, Papendrecht Noord, Papendrecht West en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis papendrecht',
    'computer reparatie papendrecht',
    'laptop reparatie papendrecht',
    'ICT student papendrecht',
    'pc hulp papendrecht',
    'computer student papendrecht',
    'papendrecht computerhulp avond',
    'papendrecht IT hulp weekend',
    'computerhulp papendrecht spoed',
    'betaalbare IT hulp papendrecht',
    'wifi problemen papendrecht',
    'internet hulp papendrecht',
    'printer installatie papendrecht',
    'virus verwijderen papendrecht',
    'computerhulp papendrecht centrum',
    'ict hulp papendrecht noord',
    'computer reparatie papendrecht west',
    'laptop hulp westpolder',
    'pc hulp kraaihoek',
    'it hulp molenvliet',
    'computerhulp papendrecht',
    'it service papendrecht',
    'computer problemen papendrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Papendrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Papendrecht door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-papendrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Papendrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Papendrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Papendrecht. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-papendrecht'
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

export default function ComputerhulpAanHuisPapendrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

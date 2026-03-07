import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Barendrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Barendrecht door HBO-opgeleide ICT-studenten. Hulp in Barendrecht Centrum, Carnisselande, Vrouwenpolder en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis barendrecht',
    'computer reparatie barendrecht',
    'laptop reparatie barendrecht',
    'ICT student barendrecht',
    'pc hulp barendrecht',
    'computer student barendrecht',
    'barendrecht computerhulp avond',
    'barendrecht IT hulp weekend',
    'computerhulp barendrecht spoed',
    'betaalbare IT hulp barendrecht',
    'wifi problemen barendrecht',
    'internet hulp barendrecht',
    'printer installatie barendrecht',
    'virus verwijderen barendrecht',
    'computerhulp barendrecht centrum',
    'ict hulp carnisselande',
    'computer reparatie vrouwenpolder',
    'laptop hulp oranjewijk',
    'pc hulp riederhoek',
    'it hulp buitenoord',
    'computerhulp barendrecht',
    'it service barendrecht',
    'computer problemen barendrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Barendrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Barendrecht door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-barendrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Barendrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Barendrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Barendrecht. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-barendrecht'
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

export default function ComputerhulpAanHuisBarendrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

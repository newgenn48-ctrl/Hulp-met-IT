import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zwijndrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Zwijndrecht door HBO-opgeleide ICT-studenten. Hulp in Zwijndrecht Centrum, Walburg, Nederhoven en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zwijndrecht',
    'computer reparatie zwijndrecht',
    'laptop reparatie zwijndrecht',
    'ICT student zwijndrecht',
    'pc hulp zwijndrecht',
    'computer student zwijndrecht',
    'zwijndrecht computerhulp avond',
    'zwijndrecht IT hulp weekend',
    'computerhulp zwijndrecht spoed',
    'betaalbare IT hulp zwijndrecht',
    'wifi problemen zwijndrecht',
    'internet hulp zwijndrecht',
    'printer installatie zwijndrecht',
    'virus verwijderen zwijndrecht',
    'computerhulp zwijndrecht centrum',
    'ict hulp walburg',
    'computer reparatie nederhoven',
    'laptop hulp ontwikkeling',
    'pc hulp kort ambacht',
    'it hulp heer oudelands ambacht',
    'computerhulp zwijndrecht',
    'it service zwijndrecht',
    'computer problemen zwijndrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zwijndrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Zwijndrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zwijndrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zwijndrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zwijndrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Zwijndrecht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zwijndrecht'
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

export default function ComputerhulpAanHuisZwijndrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

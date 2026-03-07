import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Bosch | Hulp met IT',
  description: 'Computerhulp aan huis in Den Bosch door HBO-opgeleide ICT-studenten. Hulp in Den Bosch Centrum, Den Bosch Noord, Den Bosch Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis den bosch',
    'computer reparatie den bosch',
    'laptop reparatie den bosch',
    'ICT student den bosch',
    'pc hulp den bosch',
    'computer student den bosch',
    'den bosch computerhulp avond',
    'den bosch IT hulp weekend',
    'computerhulp den bosch spoed',
    'betaalbare IT hulp den bosch',
    'wifi problemen den bosch',
    'internet hulp den bosch',
    'printer installatie den bosch',
    'virus verwijderen den bosch',
    'computerhulp den bosch centrum',
    'ict hulp den bosch noord',
    'computer reparatie den bosch oost',
    'laptop hulp den bosch west',
    'pc hulp den bosch zuid',
    'it hulp maaspoort',
    'computerhulp den bosch',
    'it service den bosch',
    'computer problemen den bosch'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Den Bosch | Hulp met IT',
    description: 'Computerhulp aan huis in Den Bosch door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-den-bosch',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Den Bosch - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Bosch | Hulp met IT',
    description: 'Computerhulp aan huis in Den Bosch. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-bosch'
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

export default function ComputerhulpAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

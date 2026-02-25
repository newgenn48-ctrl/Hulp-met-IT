import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Cranendonck | Hulp met IT',
  description: 'Computerhulp aan huis in Cranendonck door HBO-opgeleide ICT-studenten. Hulp in Budel, Maarheeze, Budel-Schoot en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis cranendonck',
    'computer reparatie cranendonck',
    'laptop reparatie cranendonck',
    'ICT student cranendonck',
    'pc hulp cranendonck',
    'computer student cranendonck',
    'cranendonck computerhulp avond',
    'cranendonck IT hulp weekend',
    'computerhulp cranendonck spoed',
    'betaalbare IT hulp cranendonck',
    'wifi problemen cranendonck',
    'internet hulp cranendonck',
    'printer installatie cranendonck',
    'virus verwijderen cranendonck',
    'computerhulp budel',
    'ict hulp maarheeze',
    'computer reparatie budel-schoot',
    'laptop hulp budel-dorplein',
    'pc hulp gastel',
    'it hulp soerendonk',
    'computerhulp cranendonck',
    'it service cranendonck',
    'computer problemen cranendonck'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Cranendonck | Hulp met IT',
    description: 'Computerhulp aan huis in Cranendonck door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-cranendonck',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Cranendonck - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Cranendonck | Hulp met IT',
    description: 'Computerhulp aan huis in Cranendonck. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-cranendonck'
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

export default function ComputerhulpAanHuisCranendonckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rotterdam | Hulp met IT',
  description: 'Computerhulp aan huis in Rotterdam door HBO-opgeleide ICT-studenten. Hulp in Rotterdam Centrum, Rotterdam Noord, Rotterdam Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis rotterdam',
    'computer reparatie rotterdam',
    'laptop reparatie rotterdam',
    'ICT student rotterdam',
    'pc hulp rotterdam',
    'computer student rotterdam',
    'rotterdam computerhulp avond',
    'rotterdam IT hulp weekend',
    'computerhulp rotterdam spoed',
    'betaalbare IT hulp rotterdam',
    'wifi problemen rotterdam',
    'internet hulp rotterdam',
    'printer installatie rotterdam',
    'virus verwijderen rotterdam',
    'computerhulp rotterdam centrum',
    'ict hulp rotterdam noord',
    'computer reparatie rotterdam oost',
    'laptop hulp rotterdam west',
    'pc hulp rotterdam zuid',
    'it hulp kralingen-crooswijk',
    'computerhulp rotterdam',
    'it service rotterdam',
    'computer problemen rotterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rotterdam | Hulp met IT',
    description: 'Computerhulp aan huis in Rotterdam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-rotterdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Rotterdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rotterdam | Hulp met IT',
    description: 'Computerhulp aan huis in Rotterdam. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rotterdam'
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

export default function ComputerhulpAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Terneuzen | Hulp met IT',
  description: 'Computerhulp aan huis in Terneuzen door HBO-opgeleide ICT-studenten. Hulp in Terneuzen Centrum, Terneuzen Noord, Terneuzen Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis terneuzen',
    'computer reparatie terneuzen',
    'laptop reparatie terneuzen',
    'ICT student terneuzen',
    'pc hulp terneuzen',
    'computer student terneuzen',
    'terneuzen computerhulp avond',
    'terneuzen IT hulp weekend',
    'computerhulp terneuzen spoed',
    'betaalbare IT hulp terneuzen',
    'wifi problemen terneuzen',
    'internet hulp terneuzen',
    'printer installatie terneuzen',
    'virus verwijderen terneuzen',
    'computerhulp terneuzen centrum',
    'ict hulp terneuzen noord',
    'computer reparatie terneuzen zuid',
    'laptop hulp sluiskil',
    'pc hulp biervliet',
    'it hulp hoek',
    'computerhulp terneuzen',
    'it service terneuzen',
    'computer problemen terneuzen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Terneuzen | Hulp met IT',
    description: 'Computerhulp aan huis in Terneuzen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-terneuzen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Terneuzen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Terneuzen | Hulp met IT',
    description: 'Computerhulp aan huis in Terneuzen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-terneuzen'
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

export default function ComputerhulpAanHuisTerneuzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

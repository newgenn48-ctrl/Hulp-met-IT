import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Krimpenerwaard | Hulp met IT',
  description: 'Computerhulp aan huis in Krimpenerwaard door HBO-opgeleide ICT-studenten. Hulp in Schoonhoven, Bergambacht, Lekkerkerk en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis krimpenerwaard',
    'computer reparatie krimpenerwaard',
    'laptop reparatie krimpenerwaard',
    'ICT student krimpenerwaard',
    'pc hulp krimpenerwaard',
    'computer student krimpenerwaard',
    'krimpenerwaard computerhulp avond',
    'krimpenerwaard IT hulp weekend',
    'computerhulp krimpenerwaard spoed',
    'betaalbare IT hulp krimpenerwaard',
    'wifi problemen krimpenerwaard',
    'internet hulp krimpenerwaard',
    'printer installatie krimpenerwaard',
    'virus verwijderen krimpenerwaard',
    'computerhulp schoonhoven',
    'ict hulp bergambacht',
    'computer reparatie lekkerkerk',
    'laptop hulp haastrecht',
    'pc hulp stolwijk',
    'it hulp vlist',
    'computerhulp krimpenerwaard',
    'it service krimpenerwaard',
    'computer problemen krimpenerwaard'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Krimpenerwaard | Hulp met IT',
    description: 'Computerhulp aan huis in Krimpenerwaard door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-krimpenerwaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Krimpenerwaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Krimpenerwaard | Hulp met IT',
    description: 'Computerhulp aan huis in Krimpenerwaard. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-krimpenerwaard'
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

export default function ComputerhulpAanHuisKrimpenerwaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

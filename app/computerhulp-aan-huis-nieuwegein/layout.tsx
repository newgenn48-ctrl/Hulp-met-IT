import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nieuwegein | Hulp met IT',
  description: 'Computerhulp aan huis in Nieuwegein door HBO-opgeleide ICT-studenten. Hulp in Nieuwegein Centrum, Batau, Galecop en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis nieuwegein',
    'computer reparatie nieuwegein',
    'laptop reparatie nieuwegein',
    'ICT student nieuwegein',
    'pc hulp nieuwegein',
    'computer student nieuwegein',
    'nieuwegein computerhulp avond',
    'nieuwegein IT hulp weekend',
    'computerhulp nieuwegein spoed',
    'betaalbare IT hulp nieuwegein',
    'wifi problemen nieuwegein',
    'internet hulp nieuwegein',
    'printer installatie nieuwegein',
    'virus verwijderen nieuwegein',
    'computerhulp nieuwegein centrum',
    'ict hulp batau',
    'computer reparatie galecop',
    'laptop hulp vreeswijk',
    'pc hulp jutphaas',
    'it hulp doorslag',
    'computerhulp nieuwegein',
    'it service nieuwegein',
    'computer problemen nieuwegein'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nieuwegein | Hulp met IT',
    description: 'Computerhulp aan huis in Nieuwegein door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-nieuwegein',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Nieuwegein - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nieuwegein | Hulp met IT',
    description: 'Computerhulp aan huis in Nieuwegein. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nieuwegein'
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

export default function ComputerhulpAanHuisNieuwegeinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Katwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Katwijk door HBO-opgeleide ICT-studenten. Hulp in Katwijk aan Zee, Katwijk aan den Rijn, Katwijk Centrum en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis katwijk',
    'computer reparatie katwijk',
    'laptop reparatie katwijk',
    'ICT student katwijk',
    'pc hulp katwijk',
    'computer student katwijk',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend',
    'computerhulp katwijk spoed',
    'betaalbare IT hulp katwijk',
    'wifi problemen katwijk',
    'internet hulp katwijk',
    'printer installatie katwijk',
    'virus verwijderen katwijk',
    'computerhulp katwijk aan zee',
    'ict hulp katwijk aan den rijn',
    'computer reparatie katwijk centrum',
    'laptop hulp katwijk noord',
    'pc hulp katwijk zuid',
    'it hulp rijnsburg',
    'computerhulp katwijk',
    'it service katwijk',
    'computer problemen katwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Katwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Katwijk door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-katwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Katwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Katwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Katwijk. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-katwijk'
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

export default function ComputerhulpAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Kaag en Braassem | Hulp met IT',
  description: 'Computerhulp aan huis in Kaag en Braassem door HBO-opgeleide ICT-studenten. Hulp in Roelofarendsveen, Oude Wetering, Leimuiden en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis kaag en braassem',
    'computer reparatie kaag en braassem',
    'laptop reparatie kaag en braassem',
    'ICT student kaag en braassem',
    'pc hulp kaag en braassem',
    'computer student kaag en braassem',
    'kaag en braassem computerhulp avond',
    'kaag en braassem IT hulp weekend',
    'computerhulp kaag en braassem spoed',
    'betaalbare IT hulp kaag en braassem',
    'wifi problemen kaag en braassem',
    'internet hulp kaag en braassem',
    'printer installatie kaag en braassem',
    'virus verwijderen kaag en braassem',
    'computerhulp roelofarendsveen',
    'ict hulp oude wetering',
    'computer reparatie leimuiden',
    'laptop hulp rijnsaterwoude',
    'pc hulp kaag',
    'it hulp bilderdam',
    'computerhulp kaag en braassem',
    'it service kaag en braassem',
    'computer problemen kaag en braassem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Kaag en Braassem | Hulp met IT',
    description: 'Computerhulp aan huis in Kaag en Braassem door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-kaag-en-braassem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Kaag en Braassem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Kaag en Braassem | Hulp met IT',
    description: 'Computerhulp aan huis in Kaag en Braassem. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-kaag-en-braassem'
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

export default function ComputerhulpAanHuisKaagEnBraassemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

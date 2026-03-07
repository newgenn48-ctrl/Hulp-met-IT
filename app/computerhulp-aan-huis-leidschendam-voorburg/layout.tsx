import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leidschendam-Voorburg | Hulp met IT',
  description: 'Computerhulp aan huis in Leidschendam-Voorburg door HBO-opgeleide ICT-studenten. Hulp in Leidschendam Centrum, Voorburg Centrum, Leidschendam Noord en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis leidschendam-voorburg',
    'computer reparatie leidschendam-voorburg',
    'laptop reparatie leidschendam-voorburg',
    'ICT student leidschendam-voorburg',
    'pc hulp leidschendam-voorburg',
    'computer student leidschendam-voorburg',
    'leidschendam-voorburg computerhulp avond',
    'leidschendam-voorburg IT hulp weekend',
    'computerhulp leidschendam-voorburg spoed',
    'betaalbare IT hulp leidschendam-voorburg',
    'wifi problemen leidschendam-voorburg',
    'internet hulp leidschendam-voorburg',
    'printer installatie leidschendam-voorburg',
    'virus verwijderen leidschendam-voorburg',
    'computerhulp leidschendam centrum',
    'ict hulp voorburg centrum',
    'computer reparatie leidschendam noord',
    'laptop hulp leidschendam zuid',
    'pc hulp voorburg noord',
    'it hulp voorburg zuid',
    'computerhulp leidschendam',
    'computerhulp voorburg',
    'it service leidschendam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leidschendam-Voorburg | Hulp met IT',
    description: 'Computerhulp aan huis in Leidschendam-Voorburg door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-leidschendam-voorburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Leidschendam-Voorburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leidschendam-Voorburg | Hulp met IT',
    description: 'Computerhulp aan huis in Leidschendam-Voorburg. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leidschendam-voorburg'
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

export default function ComputerhulpAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

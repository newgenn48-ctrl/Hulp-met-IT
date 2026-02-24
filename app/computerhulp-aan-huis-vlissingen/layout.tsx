import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vlissingen | Hulp met IT',
  description: 'Computerhulp aan huis in Vlissingen door HBO-opgeleide ICT-studenten. Hulp in Vlissingen Centrum, Vlissingen Boulevard, Oost-Souburg en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis vlissingen',
    'computer reparatie vlissingen',
    'laptop reparatie vlissingen',
    'ICT student vlissingen',
    'pc hulp vlissingen',
    'computer student vlissingen',
    'vlissingen computerhulp avond',
    'vlissingen IT hulp weekend',
    'computerhulp vlissingen spoed',
    'betaalbare IT hulp vlissingen',
    'wifi problemen vlissingen',
    'internet hulp vlissingen',
    'printer installatie vlissingen',
    'virus verwijderen vlissingen',
    'computerhulp vlissingen centrum',
    'ict hulp vlissingen boulevard',
    'computer reparatie oost-souburg',
    'laptop hulp paauwenburg',
    'pc hulp westerzicht',
    'it hulp rosenburg',
    'computerhulp vlissingen',
    'it service vlissingen',
    'computer problemen vlissingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vlissingen | Hulp met IT',
    description: 'Computerhulp aan huis in Vlissingen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-vlissingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Vlissingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vlissingen | Hulp met IT',
    description: 'Computerhulp aan huis in Vlissingen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vlissingen'
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

export default function ComputerhulpAanHuisVlissingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

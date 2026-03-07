import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Geldrop-Mierlo | Hulp met IT',
  description: 'Computerhulp aan huis in Geldrop-Mierlo door HBO-opgeleide ICT-studenten. Hulp in Geldrop Centrum, Mierlo Centrum, Braakhuizen en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis geldrop-mierlo',
    'computer reparatie geldrop-mierlo',
    'laptop reparatie geldrop-mierlo',
    'ICT student geldrop-mierlo',
    'pc hulp geldrop-mierlo',
    'computer student geldrop-mierlo',
    'geldrop-mierlo computerhulp avond',
    'geldrop-mierlo IT hulp weekend',
    'computerhulp geldrop-mierlo spoed',
    'betaalbare IT hulp geldrop-mierlo',
    'wifi problemen geldrop-mierlo',
    'internet hulp geldrop-mierlo',
    'printer installatie geldrop-mierlo',
    'virus verwijderen geldrop-mierlo',
    'computerhulp geldrop centrum',
    'ict hulp mierlo centrum',
    'computer reparatie braakhuizen',
    'laptop hulp zesgehuchten',
    'pc hulp skandia',
    'it hulp coevering',
    'computerhulp geldrop-mierlo',
    'it service geldrop-mierlo',
    'computer problemen geldrop-mierlo'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Geldrop-Mierlo | Hulp met IT',
    description: 'Computerhulp aan huis in Geldrop-Mierlo door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-geldrop-mierlo',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Geldrop-Mierlo - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Geldrop-Mierlo | Hulp met IT',
    description: 'Computerhulp aan huis in Geldrop-Mierlo. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-geldrop-mierlo'
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

export default function ComputerhulpAanHuisGeldropMierloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

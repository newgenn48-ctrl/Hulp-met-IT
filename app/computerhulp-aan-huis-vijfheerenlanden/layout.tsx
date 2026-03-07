import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vijfheerenlanden | Hulp met IT',
  description: 'Computerhulp aan huis in Vijfheerenlanden door HBO-opgeleide ICT-studenten. Hulp in Vianen, Leerdam, Meerkerk en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis vijfheerenlanden',
    'computer reparatie vijfheerenlanden',
    'laptop reparatie vijfheerenlanden',
    'ICT student vijfheerenlanden',
    'pc hulp vijfheerenlanden',
    'computer student vijfheerenlanden',
    'vijfheerenlanden computerhulp avond',
    'vijfheerenlanden IT hulp weekend',
    'computerhulp vijfheerenlanden spoed',
    'betaalbare IT hulp vijfheerenlanden',
    'wifi problemen vijfheerenlanden',
    'internet hulp vijfheerenlanden',
    'printer installatie vijfheerenlanden',
    'virus verwijderen vijfheerenlanden',
    'computerhulp vianen',
    'ict hulp leerdam',
    'computer reparatie meerkerk',
    'laptop hulp lexmond',
    'pc hulp hagestein',
    'it hulp everdingen',
    'computerhulp vijfheerenlanden',
    'it service vijfheerenlanden',
    'computer problemen vijfheerenlanden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vijfheerenlanden | Hulp met IT',
    description: 'Computerhulp aan huis in Vijfheerenlanden door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-vijfheerenlanden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Vijfheerenlanden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vijfheerenlanden | Hulp met IT',
    description: 'Computerhulp aan huis in Vijfheerenlanden. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vijfheerenlanden'
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

export default function ComputerhulpAanHuisVijfheerenlandenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

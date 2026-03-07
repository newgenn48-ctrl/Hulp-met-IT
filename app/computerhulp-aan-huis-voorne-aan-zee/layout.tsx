import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Voorne aan Zee | Hulp met IT',
  description: 'Computerhulp aan huis in Voorne aan Zee door HBO-opgeleide ICT-studenten. Hulp in Hellevoetsluis, Brielle, Rockanje en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis voorne aan zee',
    'computer reparatie voorne aan zee',
    'laptop reparatie voorne aan zee',
    'ICT student voorne aan zee',
    'pc hulp voorne aan zee',
    'computer student voorne aan zee',
    'voorne aan zee computerhulp avond',
    'voorne aan zee IT hulp weekend',
    'computerhulp voorne aan zee spoed',
    'betaalbare IT hulp voorne aan zee',
    'wifi problemen voorne aan zee',
    'internet hulp voorne aan zee',
    'printer installatie voorne aan zee',
    'virus verwijderen voorne aan zee',
    'computerhulp hellevoetsluis',
    'ict hulp brielle',
    'computer reparatie rockanje',
    'laptop hulp oostvoorne',
    'pc hulp vierpolders',
    'it hulp zwartewaal',
    'computerhulp voorne aan zee',
    'it service voorne aan zee',
    'computer problemen voorne aan zee'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Voorne aan Zee | Hulp met IT',
    description: 'Computerhulp aan huis in Voorne aan Zee door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-voorne-aan-zee',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Voorne aan Zee - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Voorne aan Zee | Hulp met IT',
    description: 'Computerhulp aan huis in Voorne aan Zee. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-voorne-aan-zee'
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

export default function ComputerhulpAanHuisVoorneAanZeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

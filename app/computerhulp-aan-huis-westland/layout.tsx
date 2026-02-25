import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Westland | Hulp met IT',
  description: 'Computerhulp aan huis in Westland door HBO-opgeleide ICT-studenten. Hulp in Naaldwijk, Monster, \'s-Gravenzande en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis westland',
    'computer reparatie westland',
    'laptop reparatie westland',
    'ICT student westland',
    'pc hulp westland',
    'computer student westland',
    'westland computerhulp avond',
    'westland IT hulp weekend',
    'computerhulp westland spoed',
    'betaalbare IT hulp westland',
    'wifi problemen westland',
    'internet hulp westland',
    'printer installatie westland',
    'virus verwijderen westland',
    'computerhulp naaldwijk',
    'ict hulp monster',
    'computer reparatie \'s-gravenzande',
    'laptop hulp wateringen',
    'pc hulp de lier',
    'it hulp honselersdijk',
    'computerhulp westland',
    'it service westland',
    'computer problemen westland'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Westland | Hulp met IT',
    description: 'Computerhulp aan huis in Westland door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-westland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Westland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Westland | Hulp met IT',
    description: 'Computerhulp aan huis in Westland. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-westland'
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

export default function ComputerhulpAanHuisWestlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

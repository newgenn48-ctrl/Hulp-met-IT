import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Aalsmeer | Hulp met IT',
  description: 'Computerhulp aan huis in Aalsmeer door HBO-opgeleide ICT-studenten. Hulp in Aalsmeer, Kudelstaart, Aalsmeer-Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis aalsmeer',
    'computer reparatie aalsmeer',
    'laptop reparatie aalsmeer',
    'ICT student aalsmeer',
    'pc hulp aalsmeer',
    'computer student aalsmeer',
    'aalsmeer computerhulp avond',
    'aalsmeer IT hulp weekend',
    'computerhulp aalsmeer spoed',
    'betaalbare IT hulp aalsmeer',
    'wifi problemen aalsmeer',
    'internet hulp aalsmeer',
    'printer installatie aalsmeer',
    'virus verwijderen aalsmeer',
    'computerhulp aalsmeer',
    'ict hulp kudelstaart',
    'computer reparatie aalsmeer-oost',
    'laptop hulp aalsmeer-west',
    'pc hulp hornmeer',
    'it hulp stommeer',
    'it service aalsmeer',
    'computer problemen aalsmeer',
    'it hulp aan huis aalsmeer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Aalsmeer | Hulp met IT',
    description: 'Computerhulp aan huis in Aalsmeer door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-aalsmeer',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Aalsmeer - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Aalsmeer | Hulp met IT',
    description: 'Computerhulp aan huis in Aalsmeer. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-aalsmeer'
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

export default function ComputerhulpAanHuisAalsmeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

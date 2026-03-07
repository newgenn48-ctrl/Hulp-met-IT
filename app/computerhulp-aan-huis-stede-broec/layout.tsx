import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Stede Broec | Hulp met IT',
  description: 'Computerhulp aan huis in Stede Broec door HBO-opgeleide ICT-studenten. Hulp in Bovenkarspel, Grootebroek, Lutjebroek en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis stede broec',
    'computer reparatie stede broec',
    'laptop reparatie stede broec',
    'ICT student stede broec',
    'pc hulp stede broec',
    'computer student stede broec',
    'stede broec computerhulp avond',
    'stede broec IT hulp weekend',
    'computerhulp stede broec spoed',
    'betaalbare IT hulp stede broec',
    'wifi problemen stede broec',
    'internet hulp stede broec',
    'printer installatie stede broec',
    'virus verwijderen stede broec',
    'computerhulp bovenkarspel',
    'ict hulp grootebroek',
    'computer reparatie lutjebroek',
    'laptop hulp stede broec-centrum',
    'computerhulp stede broec',
    'it service stede broec',
    'computer problemen stede broec'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Stede Broec | Hulp met IT',
    description: 'Computerhulp aan huis in Stede Broec door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-stede-broec',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Stede Broec - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Stede Broec | Hulp met IT',
    description: 'Computerhulp aan huis in Stede Broec. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-stede-broec'
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

export default function ComputerhulpAanHuisStedeBroecLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

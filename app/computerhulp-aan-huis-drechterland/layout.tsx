import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Drechterland | Hulp met IT',
  description: 'Computerhulp aan huis in Drechterland door HBO-opgeleide ICT-studenten. Hulp in Hoogkarspel, Venhuizen, Hem en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis drechterland',
    'computer reparatie drechterland',
    'laptop reparatie drechterland',
    'ICT student drechterland',
    'pc hulp drechterland',
    'computer student drechterland',
    'drechterland computerhulp avond',
    'drechterland IT hulp weekend',
    'computerhulp drechterland spoed',
    'betaalbare IT hulp drechterland',
    'wifi problemen drechterland',
    'internet hulp drechterland',
    'printer installatie drechterland',
    'virus verwijderen drechterland',
    'computerhulp hoogkarspel',
    'ict hulp venhuizen',
    'computer reparatie hem',
    'laptop hulp oosterblokker',
    'pc hulp wijdenes',
    'it hulp westwoud',
    'computerhulp drechterland',
    'it service drechterland',
    'computer problemen drechterland'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Drechterland | Hulp met IT',
    description: 'Computerhulp aan huis in Drechterland door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-drechterland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Drechterland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Drechterland | Hulp met IT',
    description: 'Computerhulp aan huis in Drechterland. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-drechterland'
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

export default function ComputerhulpAanHuisDrechterlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

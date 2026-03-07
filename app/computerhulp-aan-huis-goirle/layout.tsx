import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Goirle | Hulp met IT',
  description: 'Computerhulp aan huis in Goirle door HBO-opgeleide ICT-studenten. Hulp in Goirle Centrum, Riel, Goirle Noord en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis goirle',
    'computer reparatie goirle',
    'laptop reparatie goirle',
    'ICT student goirle',
    'pc hulp goirle',
    'computer student goirle',
    'goirle computerhulp avond',
    'goirle IT hulp weekend',
    'computerhulp goirle spoed',
    'betaalbare IT hulp goirle',
    'wifi problemen goirle',
    'internet hulp goirle',
    'printer installatie goirle',
    'virus verwijderen goirle',
    'computerhulp goirle centrum',
    'ict hulp riel',
    'computer reparatie goirle noord',
    'laptop hulp goirle zuid',
    'pc hulp boerdonk',
    'it hulp abcoven',
    'computerhulp goirle',
    'it service goirle',
    'computer problemen goirle'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Goirle | Hulp met IT',
    description: 'Computerhulp aan huis in Goirle door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-goirle',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Goirle - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Goirle | Hulp met IT',
    description: 'Computerhulp aan huis in Goirle. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-goirle'
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

export default function ComputerhulpAanHuisGoirleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

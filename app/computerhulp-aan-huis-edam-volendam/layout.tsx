import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Edam-Volendam | Hulp met IT',
  description: 'Computerhulp aan huis in Edam-Volendam door HBO-opgeleide ICT-studenten. Hulp in Edam, Volendam, Zeevang en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis edam-volendam',
    'computer reparatie edam-volendam',
    'laptop reparatie edam-volendam',
    'ICT student edam-volendam',
    'pc hulp edam-volendam',
    'computer student edam-volendam',
    'edam-volendam computerhulp avond',
    'edam-volendam IT hulp weekend',
    'computerhulp edam-volendam spoed',
    'betaalbare IT hulp edam-volendam',
    'wifi problemen edam-volendam',
    'internet hulp edam-volendam',
    'printer installatie edam-volendam',
    'virus verwijderen edam-volendam',
    'computerhulp edam',
    'ict hulp volendam',
    'computer reparatie zeevang',
    'laptop hulp kwadijk',
    'pc hulp oosthuizen',
    'it hulp warder',
    'computerhulp edam-volendam',
    'it service edam-volendam',
    'computer problemen edam-volendam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Edam-Volendam | Hulp met IT',
    description: 'Computerhulp aan huis in Edam-Volendam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-edam-volendam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Edam-Volendam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Edam-Volendam | Hulp met IT',
    description: 'Computerhulp aan huis in Edam-Volendam. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-edam-volendam'
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

export default function ComputerhulpAanHuisEdamVolendamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

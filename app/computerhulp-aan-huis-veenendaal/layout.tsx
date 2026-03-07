import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Veenendaal | Hulp met IT',
  description: 'Computerhulp aan huis in Veenendaal door HBO-opgeleide ICT-studenten. Hulp in Veenendaal Centrum, Veenendaal Noord, Veenendaal Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis veenendaal',
    'computer reparatie veenendaal',
    'laptop reparatie veenendaal',
    'ICT student veenendaal',
    'pc hulp veenendaal',
    'computer student veenendaal',
    'veenendaal computerhulp avond',
    'veenendaal IT hulp weekend',
    'computerhulp veenendaal spoed',
    'betaalbare IT hulp veenendaal',
    'wifi problemen veenendaal',
    'internet hulp veenendaal',
    'printer installatie veenendaal',
    'virus verwijderen veenendaal',
    'computerhulp veenendaal centrum',
    'ict hulp veenendaal noord',
    'computer reparatie veenendaal oost',
    'laptop hulp veenendaal west',
    'pc hulp dragonder',
    'it hulp de engelenburg',
    'computerhulp veenendaal',
    'it service veenendaal',
    'computer problemen veenendaal'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Veenendaal | Hulp met IT',
    description: 'Computerhulp aan huis in Veenendaal door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-veenendaal',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Veenendaal - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Veenendaal | Hulp met IT',
    description: 'Computerhulp aan huis in Veenendaal. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-veenendaal'
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

export default function ComputerhulpAanHuisVeenendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

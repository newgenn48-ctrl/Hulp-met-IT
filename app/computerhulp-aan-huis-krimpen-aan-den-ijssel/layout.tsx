import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Krimpen aan den IJssel | Hulp met IT',
  description: 'Computerhulp aan huis in Krimpen aan den IJssel door HBO-opgeleide ICT-studenten. Hulp in Krimpen Centrum, Langeland, Oud Krimpen en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis krimpen aan den ijssel',
    'computer reparatie krimpen aan den ijssel',
    'laptop reparatie krimpen aan den ijssel',
    'ICT student krimpen aan den ijssel',
    'pc hulp krimpen aan den ijssel',
    'computer student krimpen aan den ijssel',
    'krimpen aan den ijssel computerhulp avond',
    'krimpen aan den ijssel IT hulp weekend',
    'computerhulp krimpen aan den ijssel spoed',
    'betaalbare IT hulp krimpen aan den ijssel',
    'wifi problemen krimpen aan den ijssel',
    'internet hulp krimpen aan den ijssel',
    'printer installatie krimpen aan den ijssel',
    'virus verwijderen krimpen aan den ijssel',
    'computerhulp krimpen centrum',
    'ict hulp langeland',
    'computer reparatie oud krimpen',
    'laptop hulp stormpolder',
    'pc hulp laning',
    'it hulp kortland',
    'computerhulp krimpen aan den ijssel',
    'it service krimpen aan den ijssel',
    'computer problemen krimpen aan den ijssel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Krimpen aan den IJssel | Hulp met IT',
    description: 'Computerhulp aan huis in Krimpen aan den IJssel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-krimpen-aan-den-ijssel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Krimpen aan den IJssel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Krimpen aan den IJssel | Hulp met IT',
    description: 'Computerhulp aan huis in Krimpen aan den IJssel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-krimpen-aan-den-ijssel'
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

export default function ComputerhulpAanHuisKrimpenAanDenIjsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

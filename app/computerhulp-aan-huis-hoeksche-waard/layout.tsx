import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hoeksche Waard | Hulp met IT',
  description: 'Computerhulp aan huis in Hoeksche Waard door HBO-opgeleide ICT-studenten. Hulp in Oud-Beijerland, Strijen, Numansdorp en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hoeksche waard',
    'computer reparatie hoeksche waard',
    'laptop reparatie hoeksche waard',
    'ICT student hoeksche waard',
    'pc hulp hoeksche waard',
    'computer student hoeksche waard',
    'hoeksche waard computerhulp avond',
    'hoeksche waard IT hulp weekend',
    'computerhulp hoeksche waard spoed',
    'betaalbare IT hulp hoeksche waard',
    'wifi problemen hoeksche waard',
    'internet hulp hoeksche waard',
    'printer installatie hoeksche waard',
    'virus verwijderen hoeksche waard',
    'computerhulp oud-beijerland',
    'ict hulp strijen',
    'computer reparatie numansdorp',
    'laptop hulp klaaswaal',
    'pc hulp \'s-gravendeel',
    'it hulp puttershoek',
    'computerhulp hoeksche waard',
    'it service hoeksche waard',
    'computer problemen hoeksche waard'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hoeksche Waard | Hulp met IT',
    description: 'Computerhulp aan huis in Hoeksche Waard door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hoeksche-waard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hoeksche Waard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hoeksche Waard | Hulp met IT',
    description: 'Computerhulp aan huis in Hoeksche Waard. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hoeksche-waard'
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

export default function ComputerhulpAanHuisHoekscheWaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

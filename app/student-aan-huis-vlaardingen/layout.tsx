import { Metadata } from 'next'

const CITY = 'Vlaardingen'

export const metadata: Metadata = {
  title: `ICT Student aan huis ${CITY} | Computerhulp vanaf €53,50`,
  description: `ICT Student aan huis in ${CITY} voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vlaardingen Centrum, Vlaardingen Oost, Holy, Westwijk en omgeving. Vanaf €53,50. Snel, vakkundig en vriendelijk!`,
  keywords: [
    `student aan huis ${CITY.toLowerCase()}`,
    `computerhulp ${CITY.toLowerCase()}`,
    `ict hulp ${CITY.toLowerCase()}`,
    `computer reparatie ${CITY.toLowerCase()}`,
    `laptop hulp ${CITY.toLowerCase()}`,
    `it student ${CITY.toLowerCase()}`,
    `betaalbare computerhulp ${CITY.toLowerCase()}`,
    `computer problemen ${CITY.toLowerCase()}`,
    `wifi problemen ${CITY.toLowerCase()}`,
    `internet hulp ${CITY.toLowerCase()}`,
    'computerhulp vlaardingen centrum',
    'ict hulp vlaardingen oost',
    'computer reparatie holy',
    'laptop hulp westwijk',
    'it student schiedam',
    'computerhulp maassluis',
    'wifi problemen rotterdam',
    'computer hulp delft',
    'ict hulp hoek van holland',
    'computerhulp rozenburg',
    'laptop reparatie spijkenisse',
    'hogeschool rotterdam student computerhulp',
    'tu delft it student'
  ],
  openGraph: {
    title: `ICT Student aan huis ${CITY} | Computerhulp vanaf €53,50`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis in Vlaardingen en omgeving. Vanaf €53,50.`,
    url: `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`,
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: `ICT Student aan huis ${CITY} - Hulp met IT`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `ICT Student aan huis ${CITY} | Computerhulp vanaf €53,50`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis.`,
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function StudentAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

const CITY = 'Rotterdam'

export const metadata: Metadata = {
  title: `ICT Student aan huis ${CITY} | Computerhulp €14,50 per kwartier`,
  description: `ICT Student aan huis in ${CITY} voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rotterdam Centrum, Kralingen, Hillegersberg, Feijenoord en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!`,
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
    'computerhulp rotterdam centrum',
    'ict hulp kralingen',
    'computer reparatie hillegersberg',
    'laptop hulp feijenoord',
    'it student rotterdam zuid',
    'computerhulp delfshaven',
    'wifi problemen overschie',
    'computer hulp capelle aan den ijssel',
    'ict hulp schiedam',
    'computerhulp vlaardingen',
    'laptop reparatie barendrecht',
    'erasmus universiteit student computerhulp',
    'hogeschool rotterdam it student'
  ],
  openGraph: {
    title: `ICT Student aan huis ${CITY} | Computerhulp €14,50 per kwartier`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis in Rotterdam en omgeving. €14,50 per kwartier.`,
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
    title: `ICT Student aan huis ${CITY} | Computerhulp €14,50 per kwartier`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis.`,
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: `/student-aan-huis-${CITY.toLowerCase()}`
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

export default function StudentAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

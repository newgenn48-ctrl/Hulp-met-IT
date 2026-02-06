import { Metadata } from 'next'

const CITY = 'Leidschendam-Voorburg'

export const metadata: Metadata = {
  title: `ICT Student aan huis ${CITY} | Computerhulp €14,50 per kwartier`,
  description: `ICT Student aan huis in ${CITY} voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Leidschendam Centrum, Voorburg, Stompwijk en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!`,
  keywords: [
    `student aan huis leidschendam-voorburg`,
    `computerhulp leidschendam-voorburg`,
    `ict hulp leidschendam-voorburg`,
    `computer reparatie leidschendam-voorburg`,
    `laptop hulp leidschendam-voorburg`,
    `it student leidschendam-voorburg`,
    `betaalbare computerhulp leidschendam-voorburg`,
    `computer problemen leidschendam-voorburg`,
    `wifi problemen leidschendam-voorburg`,
    `internet hulp leidschendam-voorburg`,
    'computerhulp leidschendam centrum',
    'ict hulp voorburg',
    'computer reparatie stompwijk',
    'laptop hulp den haag',
    'it student rijswijk',
    'computerhulp wassenaar',
    'wifi problemen zoetermeer',
    'computer hulp nootdorp',
    'ict hulp delft',
    'computerhulp voorschoten',
    'laptop reparatie leiden',
    'computerhulp leiderdorp',
    'tu delft student computerhulp',
    'haagse hogeschool it student'
  ],
  openGraph: {
    title: `ICT Student aan huis ${CITY} | Computerhulp €14,50 per kwartier`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis in Leidschendam-Voorburg en omgeving. €14,50 per kwartier.`,
    url: `https://hulpmetit.nl/student-aan-huis-leidschendam-voorburg`,
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
    canonical: `https://hulpmetit.nl/student-aan-huis-leidschendam-voorburg`
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

export default function StudentAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

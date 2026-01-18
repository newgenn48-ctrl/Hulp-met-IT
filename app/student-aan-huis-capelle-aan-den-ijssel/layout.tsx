import { Metadata } from 'next'

const CITY = 'Capelle aan den IJssel'

export const metadata: Metadata = {
  title: `ICT Student aan huis ${CITY} | Computerhulp vanaf €53,50`,
  description: `ICT Student aan huis in ${CITY} voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Capelle Centrum, Schollevaar, Oostgaarde, Schenkel en omgeving. Vanaf €53,50. Snel, vakkundig en vriendelijk!`,
  keywords: [
    `student aan huis capelle aan den ijssel`,
    `computerhulp capelle aan den ijssel`,
    `ict hulp capelle aan den ijssel`,
    `computer reparatie capelle aan den ijssel`,
    `laptop hulp capelle aan den ijssel`,
    `it student capelle aan den ijssel`,
    `betaalbare computerhulp capelle aan den ijssel`,
    `computer problemen capelle aan den ijssel`,
    `wifi problemen capelle aan den ijssel`,
    `internet hulp capelle aan den ijssel`,
    'computerhulp capelle centrum',
    'ict hulp schollevaar',
    'computer reparatie oostgaarde',
    'laptop hulp schenkel',
    'it student fascinatio',
    'computerhulp rotterdam',
    'wifi problemen krimpen aan den ijssel',
    'computer hulp nieuwerkerk aan den ijssel',
    'ict hulp kralingen',
    'computerhulp prins alexander',
    'laptop reparatie gouda',
    'computerhulp bergschenhoek',
    'hogeschool rotterdam student computerhulp',
    'erasmus universiteit it student'
  ],
  openGraph: {
    title: `ICT Student aan huis ${CITY} | Computerhulp vanaf €53,50`,
    description: `Betaalbare computerhulp door ervaren IT-studenten in ${CITY}. Wij komen bij u thuis in Capelle aan den IJssel en omgeving. Vanaf €53,50.`,
    url: `https://hulpmetit.nl/student-aan-huis-capelle-aan-den-ijssel`,
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
    canonical: `https://hulpmetit.nl/student-aan-huis-capelle-aan-den-ijssel`
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

export default function StudentAanHuisCapelleAanDenIJsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

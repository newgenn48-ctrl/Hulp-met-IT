import { Metadata } from 'next'

const city = 'Amersfoort'
const citySlug = 'amersfoort'

export const metadata: Metadata = {
  title: `ICT Student aan Huis ${city} | Computerhulp vanaf 53,50 | Hulp met IT`,
  description: `ICT Student aan huis in ${city} voor betaalbare computerhulp. Ervaren IT-studenten van Hogeschool Utrecht komen bij u thuis. Vanaf 53,50. Hulp met computer, laptop, tablet, smartphone, internet en meer.`,
  keywords: [
    `ict student aan huis ${city.toLowerCase()}`,
    `student aan huis ${city.toLowerCase()}`,
    `computerhulp ${city.toLowerCase()}`,
    `computer hulp ${city.toLowerCase()}`,
    `laptop hulp ${city.toLowerCase()}`,
    `thuishulp computer ${city.toLowerCase()}`,
    `pc hulp ${city.toLowerCase()}`,
    `internet hulp ${city.toLowerCase()}`,
    `tablet hulp ${city.toLowerCase()}`,
    `smartphone hulp ${city.toLowerCase()}`,
    `it hulp ${city.toLowerCase()}`,
    `computer reparatie ${city.toLowerCase()}`,
    `betaalbare computerhulp ${city.toLowerCase()}`,
    `computerhulp aan huis ${city.toLowerCase()}`,
    `hulp met computer ${city.toLowerCase()}`
  ],
  openGraph: {
    title: `ICT Student aan Huis ${city} | Betaalbare Computerhulp`,
    description: `Ervaren IT-studenten komen bij u thuis in ${city}. Betaalbare tarieven vanaf 53,50. Hulp met computer, laptop, tablet, smartphone en internet.`,
    url: `https://hulpmetit.nl/student-aan-huis-${citySlug}`,
    images: [
      {
        url: '/student-aan-huis.webp',
        width: 1200,
        height: 630,
        alt: `ICT Student aan Huis ${city}`
      }
    ],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: `ICT Student aan Huis ${city} | Betaalbare Computerhulp`,
    description: `Ervaren IT-studenten komen bij u thuis in ${city}. Betaalbare tarieven vanaf 53,50.`,
    images: ['/student-aan-huis.webp']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `https://hulpmetit.nl/student-aan-huis-${citySlug}`
  }
}

export default function StudentAanHuisAmersfoortLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}

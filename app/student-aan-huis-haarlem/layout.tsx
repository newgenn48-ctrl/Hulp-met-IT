import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Haarlem | Computerhulp aan Huis | Hulp Met IT',
  description: 'ICT Student aan huis in Haarlem voor betaalbare computerhulp. IT-studenten van Inholland Hogeschool komen naar u toe in Haarlem Centrum, Noord, Zuid, Oost, Schalkwijk, Heemstede, Bloemendaal en omgeving. Vanaf €53,50. Snel en vakkundig!',
  keywords: [
    'student aan huis haarlem',
    'computerhulp haarlem',
    'ICT student haarlem',
    'IT hulp haarlem',
    'computer reparatie haarlem',
    'laptop hulp haarlem',
    'betaalbare computerhulp haarlem',
    'computerhulp haarlem centrum',
    'computerhulp heemstede',
    'computerhulp bloemendaal',
    'computerhulp zandvoort',
    'computerhulp hoofddorp',
    'inholland student computerhulp',
    'student IT haarlem',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend',
    'senioren computerhulp haarlem',
    'thuishulp computer haarlem'
  ],
  openGraph: {
    title: 'ICT Student aan huis Haarlem | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Haarlem en omgeving. Haarlem Centrum, Heemstede, Bloemendaal, Zandvoort. Vanaf €53,50!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-haarlem'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan huis Haarlem | Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Haarlem. Vanaf €53,50!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-haarlem',
  },
}

export default function StudentAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

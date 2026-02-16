import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zoetermeer | Hulp met IT',
  description: 'ICT Student aan huis in Zoetermeer voor computerhulp. Betaalbare IT-studenten komen naar je toe. €14,50 per kwartier + €10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis zoetermeer',
    'student computerhulp zoetermeer',
    'betaalbare computerhulp zoetermeer',
    'IT student zoetermeer',
    'computer reparatie zoetermeer student',
    'betaalbare computer hulp zoetermeer',
    'studenten computer service zoetermeer',
    'zoetermeer student IT hulp',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend',
    'computerhulp rokkeveen',
    'computerhulp meerzicht',
    'computerhulp pijnacker',
    'computerhulp nootdorp'
  ],
  openGraph: {
    title: 'Student aan huis Zoetermeer | Hulp met IT',
    description: 'Student aan huis Zoetermeer: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zoetermeer | Hulp met IT',
    description: 'Student aan huis Zoetermeer: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-zoetermeer',
  },
}

export default function StudentAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

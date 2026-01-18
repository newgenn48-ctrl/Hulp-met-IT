import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Tilburg | Hulp Met IT',
  description: 'ICT Student aan huis in Tilburg voor computerhulp. Betaalbare IT-studenten van Tilburg University en Fontys komen naar je toe. Vanaf €53,50. Snel en vakkundig!',
  keywords: [
    'student aan huis tilburg',
    'student computerhulp tilburg',
    'betaalbare computerhulp tilburg',
    'IT student tilburg',
    'computer reparatie tilburg student',
    'betaalbare computer hulp tilburg',
    'studenten computer service tilburg',
    'tilburg student IT hulp',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp reeshof',
    'computerhulp berkel-enschot',
    'computerhulp goirle',
    'computerhulp oisterwijk'
  ],
  openGraph: {
    title: 'Student Aan Huis Tilburg',
    description: 'Student aan huis Tilburg: betaalbare computerhulp door IT-studenten van Tilburg University en Fontys. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Tilburg',
    description: 'Student aan huis Tilburg: betaalbare computerhulp door IT-studenten van Tilburg University en Fontys. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-tilburg',
  },
}

export default function StudentAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

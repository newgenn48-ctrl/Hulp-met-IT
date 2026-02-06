import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Nijmegen | Hulp Met IT',
  description: 'ICT Student aan huis in Nijmegen voor computerhulp. Betaalbare IT-studenten van Radboud Universiteit en HAN komen naar je toe. €14,50 per kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis nijmegen',
    'student computerhulp nijmegen',
    'betaalbare computerhulp nijmegen',
    'IT student nijmegen',
    'computer reparatie nijmegen student',
    'betaalbare computer hulp nijmegen',
    'studenten computer service nijmegen',
    'nijmegen student IT hulp',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'radboud universiteit student computerhulp',
    'HAN student IT hulp'
  ],
  openGraph: {
    title: 'Student Aan Huis Nijmegen',
    description: 'Student aan huis Nijmegen: betaalbare computerhulp door IT-studenten van Radboud en HAN. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Nijmegen',
    description: 'Student aan huis Nijmegen: betaalbare computerhulp door IT-studenten van Radboud en HAN. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-nijmegen',
  },
}

export default function StudentAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

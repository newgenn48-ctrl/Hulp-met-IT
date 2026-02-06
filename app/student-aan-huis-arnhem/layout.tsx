import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Arnhem | Hulp Met IT',
  description: 'ICT Student aan huis in Arnhem voor computerhulp. Betaalbare IT-studenten komen naar je toe. €14,50 per kwartier + €10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis arnhem',
    'student computerhulp arnhem',
    'betaalbare computerhulp arnhem',
    'IT student arnhem',
    'computer reparatie arnhem student',
    'betaalbare computer hulp arnhem',
    'studenten computer service arnhem',
    'arnhem student IT hulp',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp velp',
    'computerhulp oosterbeek',
    'computerhulp elst'
  ],
  openGraph: {
    title: 'Student Aan Huis Arnhem',
    description: 'Student aan huis Arnhem: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Arnhem',
    description: 'Student aan huis Arnhem: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-arnhem',
  },
}

export default function StudentAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nijmegen | Hulp Met IT',
  description: 'Student aan huis in Nijmegen voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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
    'nijmegen IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Nijmegen | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Nijmegen. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Nijmegen | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Nijmegen. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-nijmegen'
  }
}

export default function StudentAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
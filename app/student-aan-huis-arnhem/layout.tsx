import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Arnhem | Hulp Met IT',
  description: 'Student aan huis in Arnhem voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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
    'arnhem IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Arnhem | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Arnhem. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Arnhem | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Arnhem. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-arnhem'
  }
}

export default function StudentAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
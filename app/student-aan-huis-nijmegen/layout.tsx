import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Nijmegen | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Nijmegen? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
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
    url: '/student-aan-huis-nijmegen',
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
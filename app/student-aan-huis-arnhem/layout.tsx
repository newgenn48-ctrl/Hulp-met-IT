import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Arnhem | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Arnhem? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
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
    url: '/student-aan-huis-arnhem',
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
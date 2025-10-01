import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Tilburg | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Tilburg? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
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
    'tilburg IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Tilburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Tilburg. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-tilburg',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Tilburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Tilburg. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-tilburg'
  }
}

export default function StudentAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
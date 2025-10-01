import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Middelburg | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Middelburg? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
  keywords: [
    'student aan huis middelburg',
    'student computerhulp middelburg',
    'betaalbare computerhulp middelburg',
    'IT student middelburg',
    'computer reparatie middelburg student',
    'betaalbare computer hulp middelburg',
    'studenten computer service middelburg',
    'middelburg student IT hulp',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Middelburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Middelburg. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-middelburg',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Middelburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Middelburg. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-middelburg'
  }
}

export default function StudentAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
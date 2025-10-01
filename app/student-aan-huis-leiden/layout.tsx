import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Leiden | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Leiden? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
  keywords: [
    'student aan huis leiden',
    'student computerhulp leiden',
    'betaalbare computerhulp leiden',
    'IT student leiden',
    'computer reparatie leiden student',
    'betaalbare computer hulp leiden',
    'studenten computer service leiden',
    'leiden student IT hulp',
    'leiden computerhulp avond',
    'leiden IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Leiden | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Leiden. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-leiden',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Leiden | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Leiden. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-leiden'
  }
}

export default function StudentAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
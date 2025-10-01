import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Breda | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Breda? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
  keywords: [
    'student aan huis breda',
    'student computerhulp breda',
    'betaalbare computerhulp breda',
    'IT student breda',
    'computer reparatie breda student',
    'betaalbare computer hulp breda',
    'studenten computer service breda',
    'breda student IT hulp',
    'breda computerhulp avond',
    'breda IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Breda | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-breda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Breda | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-breda'
  }
}

export default function StudentAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
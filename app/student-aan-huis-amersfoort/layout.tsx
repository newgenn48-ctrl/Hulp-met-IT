import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Amersfoort | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Amersfoort? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
  keywords: [
    'student aan huis amersfoort',
    'student computerhulp amersfoort',
    'betaalbare computerhulp amersfoort',
    'IT student amersfoort',
    'computer reparatie amersfoort student',
    'betaalbare computer hulp amersfoort',
    'studenten computer service amersfoort',
    'amersfoort student IT hulp',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Amersfoort | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Amersfoort. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-amersfoort',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Amersfoort | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Amersfoort. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-amersfoort'
  }
}

export default function StudentAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
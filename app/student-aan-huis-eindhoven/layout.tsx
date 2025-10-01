import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Eindhoven | Betaalbare computerhulp thuis',
  description: 'Computerproblemen in Eindhoven? Onze IT-studenten komen naar je toe! Betaalbare hulp Snel, vakkundig en lokaal.',
  keywords: [
    'student aan huis eindhoven',
    'student computerhulp eindhoven',
    'betaalbare computerhulp eindhoven',
    'IT student eindhoven',
    'computer reparatie eindhoven student',
    'betaalbare computer hulp eindhoven',
    'studenten computer service eindhoven',
    'eindhoven student IT hulp',
    'eindhoven computerhulp avond',
    'eindhoven IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Eindhoven | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Eindhoven. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-eindhoven',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Eindhoven | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Eindhoven. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-eindhoven'
  }
}

export default function StudentAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
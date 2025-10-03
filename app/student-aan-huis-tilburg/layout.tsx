import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Tilburg | Hulp Met IT',
  description: 'Student aan huis in Tilburg voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
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
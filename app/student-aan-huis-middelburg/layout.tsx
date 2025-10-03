import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Middelburg | Hulp Met IT',
  description: 'Student aan huis in Middelburg voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
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
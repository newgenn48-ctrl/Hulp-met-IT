import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Haarlem | Betaalbare computerhulp thuis',
  description: 'Student aan huis Haarlem: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis haarlem',
    'student computerhulp haarlem',
    'betaalbare computerhulp haarlem',
    'IT student haarlem',
    'computer reparatie haarlem student',
    'betaalbare computer hulp haarlem',
    'studenten computer service haarlem',
    'haarlem student IT hulp',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Haarlem | IT-Student Computerhulp',
    description: 'Student aan huis Haarlem: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-haarlem',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Haarlem | IT-Student Computerhulp',
    description: 'Student aan huis Haarlem: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-haarlem',
  },
}

export default function StudentAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
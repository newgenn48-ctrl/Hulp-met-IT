import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Haarlem | Hulp Met IT',
  description: 'Student aan huis in Haarlem voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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
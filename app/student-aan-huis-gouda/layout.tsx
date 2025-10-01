import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Gouda | Betaalbare computerhulp thuis',
  description: 'Student aan huis Gouda: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis gouda',
    'student computerhulp gouda',
    'betaalbare computerhulp gouda',
    'IT student gouda',
    'computer reparatie gouda student',
    'betaalbare computer hulp gouda',
    'studenten computer service gouda',
    'gouda student IT hulp',
    'gouda computerhulp avond',
    'gouda IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Gouda | IT-Student Computerhulp',
    description: 'Student aan huis Gouda: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-gouda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Gouda | IT-Student Computerhulp',
    description: 'Student aan huis Gouda: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-gouda',
  },
}

export default function StudentAanHuisGoudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

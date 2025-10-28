import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Gouda | Hulp Met IT',
  description: 'Student aan huis in Gouda voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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

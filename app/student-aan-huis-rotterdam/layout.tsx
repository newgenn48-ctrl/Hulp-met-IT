import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Rotterdam | Hulp Met IT',
  description: 'Student aan huis in Rotterdam voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis rotterdam',
    'student computerhulp rotterdam',
    'betaalbare computerhulp rotterdam',
    'IT student rotterdam',
    'computer reparatie rotterdam student',
    'betaalbare computer hulp rotterdam',
    'studenten computer service rotterdam',
    'rotterdam student IT hulp',
    'rotterdam computerhulp avond',
    'rotterdam IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Rotterdam',
    description: 'Student aan huis Rotterdam: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Rotterdam',
    description: 'Student aan huis Rotterdam: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-rotterdam',
  },
}

export default function StudentAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
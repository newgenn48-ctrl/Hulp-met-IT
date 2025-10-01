import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Delft | Betaalbare computerhulp thuis',
  description: 'Student aan huis Delft: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis delft',
    'student computerhulp delft',
    'betaalbare computerhulp delft',
    'IT student delft',
    'computer reparatie delft student',
    'betaalbare computer hulp delft',
    'studenten computer service delft',
    'delft student IT hulp',
    'delft computerhulp avond',
    'delft IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Delft | IT-Student Computerhulp',
    description: 'Student aan huis Delft: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-delft',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Delft | IT-Student Computerhulp',
    description: 'Student aan huis Delft: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-delft',
  },
}

export default function StudentAanHuisDelftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
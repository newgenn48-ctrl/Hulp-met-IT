import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Schiedam | Betaalbare computerhulp thuis',
  description: 'Student aan huis Schiedam: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis schiedam',
    'student computerhulp schiedam',
    'betaalbare computerhulp schiedam',
    'IT student schiedam',
    'computer reparatie schiedam student',
    'betaalbare computer hulp schiedam',
    'studenten computer service schiedam',
    'schiedam student IT hulp',
    'schiedam computerhulp avond',
    'schiedam IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Schiedam | IT-Student Computerhulp',
    description: 'Student aan huis Schiedam: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-schiedam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Schiedam | IT-Student Computerhulp',
    description: 'Student aan huis Schiedam: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-schiedam',
  },
}

export default function StudentAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Zoetermeer | Betaalbare computerhulp thuis',
  description: 'Student aan huis Zoetermeer: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis zoetermeer',
    'student computerhulp zoetermeer',
    'betaalbare computerhulp zoetermeer',
    'IT student zoetermeer',
    'computer reparatie zoetermeer student',
    'betaalbare computer hulp zoetermeer',
    'studenten computer service zoetermeer',
    'zoetermeer student IT hulp',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Zoetermeer | IT-Student Computerhulp',
    description: 'Student aan huis Zoetermeer: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-zoetermeer',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Zoetermeer | IT-Student Computerhulp',
    description: 'Student aan huis Zoetermeer: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-zoetermeer',
  },
}

export default function StudentAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
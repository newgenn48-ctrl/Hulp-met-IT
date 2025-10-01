import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Katwijk | Betaalbare computerhulp thuis',
  description: 'Student aan huis Katwijk: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis katwijk',
    'student computerhulp katwijk',
    'betaalbare computerhulp katwijk',
    'IT student katwijk',
    'computer reparatie katwijk student',
    'betaalbare computer hulp katwijk',
    'studenten computer service katwijk',
    'katwijk student IT hulp',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Katwijk | IT-Student Computerhulp',
    description: 'Student aan huis Katwijk: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-katwijk',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Katwijk | IT-Student Computerhulp',
    description: 'Student aan huis Katwijk: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-katwijk',
  },
}

export default function StudentAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

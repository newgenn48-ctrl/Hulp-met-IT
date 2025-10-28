import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Katwijk | Hulp Met IT',
  description: 'Student aan huis in Katwijk voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Naarden | Hulp Met IT',
  description: 'ICT Student aan huis in Naarden voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis naarden',
    'student computerhulp naarden',
    'betaalbare computerhulp naarden',
    'IT student naarden',
    'computer reparatie naarden student',
    'betaalbare computer hulp naarden',
    'studenten computer service naarden',
    'naarden student IT hulp',
    'naarden computerhulp avond',
    'naarden IT hulp weekend',
    'computerhulp gooi',
    'student aan huis naarden-vesting'
  ],
  openGraph: {
    title: 'Student Aan Huis Naarden',
    description: 'Student aan huis Naarden: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Naarden',
    description: 'Student aan huis Naarden: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-naarden',
  },
}

export default function StudentAanHuisNaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

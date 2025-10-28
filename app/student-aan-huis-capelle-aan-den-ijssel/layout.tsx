import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Capelle aan den IJssel | Hulp Met IT',
  description: 'Student aan huis in Capelle aan den IJssel voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis capelle aan den ijssel',
    'student computerhulp capelle aan den ijssel',
    'betaalbare computerhulp capelle aan den ijssel',
    'IT student capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel student',
    'betaalbare computer hulp capelle aan den ijssel',
    'studenten computer service capelle aan den ijssel',
    'capelle aan den ijssel student IT hulp',
    'capelle aan den ijssel computerhulp avond',
    'capelle aan den ijssel IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Capelle aan den IJssel | IT-Student Computerhulp',
    description: 'Student aan huis Capelle aan den IJssel: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Capelle aan den IJssel | IT-Student Computerhulp',
    description: 'Student aan huis Capelle aan den IJssel: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-capelle-aan-den-ijssel',
  },
}

export default function StudentAanHuisCapelleAanDenIJsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

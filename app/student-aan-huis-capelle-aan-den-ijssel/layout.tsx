import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Capelle aan den IJssel | Betaalbare computerhulp thuis',
  description: 'Student aan huis Capelle aan den IJssel: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
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
    url: '/student-aan-huis-capelle-aan-den-ijssel',
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

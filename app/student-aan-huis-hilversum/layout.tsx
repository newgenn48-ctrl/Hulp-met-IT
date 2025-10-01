import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Hilversum | Betaalbare computerhulp thuis',
  description: 'Student aan huis Hilversum: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis hilversum',
    'student computerhulp hilversum',
    'betaalbare computerhulp hilversum',
    'IT student hilversum',
    'computer reparatie hilversum student',
    'betaalbare computer hulp hilversum',
    'studenten computer service hilversum',
    'hilversum student IT hulp',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Hilversum | IT-Student Computerhulp',
    description: 'Student aan huis Hilversum: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-hilversum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Hilversum | IT-Student Computerhulp',
    description: 'Student aan huis Hilversum: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-hilversum',
  },
}

export default function StudentAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

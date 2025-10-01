import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Enschede | Betaalbare computerhulp thuis',
  description: 'Student aan huis Enschede: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis enschede',
    'student computerhulp enschede',
    'betaalbare computerhulp enschede',
    'IT student enschede',
    'computer reparatie enschede student',
    'betaalbare computer hulp enschede',
    'studenten computer service enschede',
    'enschede student IT hulp',
    'enschede computerhulp avond',
    'enschede IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Enschede | IT-Student Computerhulp',
    description: 'Student aan huis Enschede: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-enschede',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Enschede | IT-Student Computerhulp',
    description: 'Student aan huis Enschede: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-enschede',
  },
}

export default function StudentAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

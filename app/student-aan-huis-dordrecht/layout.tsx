import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Dordrecht | Betaalbare computerhulp thuis',
  description: 'Student aan huis Dordrecht: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis dordrecht',
    'student computerhulp dordrecht',
    'betaalbare computerhulp dordrecht',
    'IT student dordrecht',
    'computer reparatie dordrecht student',
    'betaalbare computer hulp dordrecht',
    'studenten computer service dordrecht',
    'dordrecht student IT hulp',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Dordrecht | IT-Student Computerhulp',
    description: 'Student aan huis Dordrecht: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-dordrecht',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Dordrecht | IT-Student Computerhulp',
    description: 'Student aan huis Dordrecht: betaalbare computerhulp door IT-studenten. Bel nus!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-dordrecht',
  },
}

export default function StudentAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
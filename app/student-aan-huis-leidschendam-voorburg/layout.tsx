import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Leidschendam-Voorburg | Betaalbare computerhulp thuis',
  description: 'Student aan huis Leidschendam-Voorburg: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis leidschendam voorburg',
    'student computerhulp leidschendam voorburg',
    'betaalbare computerhulp leidschendam voorburg',
    'IT student leidschendam voorburg',
    'computer reparatie leidschendam voorburg student',
    'betaalbare computer hulp leidschendam voorburg',
    'studenten computer service leidschendam voorburg',
    'leidschendam voorburg student IT hulp',
    'leidschendam voorburg computerhulp avond',
    'leidschendam voorburg IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Leidschendam-Voorburg | IT-Student Computerhulp',
    description: 'Student aan huis Leidschendam-Voorburg: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-leidschendam-voorburg',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Leidschendam-Voorburg | IT-Student Computerhulp',
    description: 'Student aan huis Leidschendam-Voorburg: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-leidschendam-voorburg',
  },
}

export default function StudentAanHuisLeidschedamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Utrecht | Hulp Met IT',
  description: 'ICT Student aan huis in Utrecht voor computerhulp. Betaalbare IT-studenten komen naar je toe. €14,50 per kwartier + €10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis utrecht',
    'student computerhulp utrecht',
    'betaalbare computerhulp utrecht',
    'IT student utrecht',
    'computer reparatie utrecht student',
    'betaalbare computer hulp utrecht',
    'studenten computer service utrecht',
    'utrecht student IT hulp',
    'utrecht computerhulp avond',
    'utrecht IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Utrecht',
    description: 'Student aan huis Utrecht: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Utrecht',
    description: 'Student aan huis Utrecht: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-utrecht',
  },
}

export default function StudentAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
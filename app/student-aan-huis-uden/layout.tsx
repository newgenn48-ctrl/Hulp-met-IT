import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Uden | Hulp met IT',
  description: 'ICT Student aan huis in Uden voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis uden',
    'student computerhulp uden',
    'betaalbare computerhulp uden',
    'IT student uden',
    'computer reparatie uden student',
    'betaalbare computer hulp uden',
    'studenten computer service uden',
    'uden student IT hulp',
    'uden computerhulp avond',
    'uden IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Uden | Hulp met IT',
    description: 'Student aan huis Uden: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Uden | Hulp met IT',
    description: 'Student aan huis Uden: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-uden',
  },
}

export default function StudentAanHuisUdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

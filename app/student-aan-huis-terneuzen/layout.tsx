import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Terneuzen | Hulp met IT',
  description: 'ICT Student aan huis in Terneuzen voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis terneuzen',
    'student computerhulp terneuzen',
    'betaalbare computerhulp terneuzen',
    'IT student terneuzen',
    'computer reparatie terneuzen student',
    'betaalbare computer hulp terneuzen',
    'studenten computer service terneuzen',
    'terneuzen student IT hulp',
    'terneuzen computerhulp avond',
    'terneuzen IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Terneuzen | Hulp met IT',
    description: 'Student aan huis Terneuzen: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Terneuzen | Hulp met IT',
    description: 'Student aan huis Terneuzen: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-terneuzen',
  },
}

export default function StudentAanHuisTerneuzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

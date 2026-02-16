import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Roosendaal | Hulp met IT',
  description: 'ICT Student aan huis in Roosendaal voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis roosendaal',
    'student computerhulp roosendaal',
    'betaalbare computerhulp roosendaal',
    'IT student roosendaal',
    'computer reparatie roosendaal student',
    'betaalbare computer hulp roosendaal',
    'studenten computer service roosendaal',
    'roosendaal student IT hulp',
    'roosendaal computerhulp avond',
    'roosendaal IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Roosendaal | Hulp met IT',
    description: 'Student aan huis Roosendaal: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Roosendaal | Hulp met IT',
    description: 'Student aan huis Roosendaal: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-roosendaal',
  },
}

export default function StudentAanHuisRoosendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

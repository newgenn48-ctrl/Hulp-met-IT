import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Oosterhout | Hulp met IT',
  description: 'ICT Student aan huis in Oosterhout voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis oosterhout',
    'student computerhulp oosterhout',
    'betaalbare computerhulp oosterhout',
    'IT student oosterhout',
    'computer reparatie oosterhout student',
    'betaalbare computer hulp oosterhout',
    'studenten computer service oosterhout',
    'oosterhout student IT hulp',
    'oosterhout computerhulp avond',
    'oosterhout IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Oosterhout | Hulp met IT',
    description: 'Student aan huis Oosterhout: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Oosterhout | Hulp met IT',
    description: 'Student aan huis Oosterhout: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-oosterhout',
  },
}

export default function StudentAanHuisOosterhoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

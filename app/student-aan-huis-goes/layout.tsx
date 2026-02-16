import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Goes | Hulp met IT',
  description: 'ICT Student aan huis in Goes voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis goes',
    'student computerhulp goes',
    'betaalbare computerhulp goes',
    'IT student goes',
    'computer reparatie goes student',
    'betaalbare computer hulp goes',
    'studenten computer service goes',
    'goes student IT hulp',
    'goes computerhulp avond',
    'goes IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Goes | Hulp met IT',
    description: 'Student aan huis Goes: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Goes | Hulp met IT',
    description: 'Student aan huis Goes: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-goes',
  },
}

export default function StudentAanHuisGoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

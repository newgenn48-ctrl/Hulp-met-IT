import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Helmond | Hulp met IT',
  description: 'ICT Student aan huis in Helmond voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis helmond',
    'student computerhulp helmond',
    'betaalbare computerhulp helmond',
    'IT student helmond',
    'computer reparatie helmond student',
    'betaalbare computer hulp helmond',
    'studenten computer service helmond',
    'helmond student IT hulp',
    'helmond computerhulp avond',
    'helmond IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Helmond | Hulp met IT',
    description: 'Student aan huis Helmond: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Helmond | Hulp met IT',
    description: 'Student aan huis Helmond: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-helmond',
  },
}

export default function StudentAanHuisHelmondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Tilburg | Hulp met IT',
  description: 'ICT Student aan huis in Tilburg voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis tilburg',
    'student computerhulp tilburg',
    'betaalbare computerhulp tilburg',
    'IT student tilburg',
    'computer reparatie tilburg student',
    'betaalbare computer hulp tilburg',
    'studenten computer service tilburg',
    'tilburg student IT hulp',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp reeshof',
    'computerhulp berkel-enschot',
    'computerhulp goirle',
    'computerhulp oisterwijk'
  ],
  openGraph: {
    title: 'Student aan huis Tilburg | Hulp met IT',
    description: 'Student aan huis Tilburg: betaalbare computerhulp door IT-studenten van Tilburg University en Fontys. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Tilburg | Hulp met IT',
    description: 'Student aan huis Tilburg: betaalbare computerhulp door IT-studenten van Tilburg University en Fontys. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-tilburg',
  },
}

export default function StudentAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

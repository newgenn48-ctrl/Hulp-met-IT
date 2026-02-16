import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nijmegen | Hulp met IT',
  description: 'ICT Student aan huis in Nijmegen voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis nijmegen',
    'student computerhulp nijmegen',
    'betaalbare computerhulp nijmegen',
    'IT student nijmegen',
    'computer reparatie nijmegen student',
    'betaalbare computer hulp nijmegen',
    'studenten computer service nijmegen',
    'nijmegen student IT hulp',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'radboud universiteit student computerhulp',
    'HAN student IT hulp'
  ],
  openGraph: {
    title: 'Student aan huis Nijmegen | Hulp met IT',
    description: 'Student aan huis Nijmegen: betaalbare computerhulp door IT-studenten van Radboud en HAN. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Nijmegen | Hulp met IT',
    description: 'Student aan huis Nijmegen: betaalbare computerhulp door IT-studenten van Radboud en HAN. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-nijmegen',
  },
}

export default function StudentAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

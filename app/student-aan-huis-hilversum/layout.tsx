import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Hilversum | Hulp Met IT',
  description: 'ICT Student aan huis in Hilversum voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis hilversum',
    'student computerhulp hilversum',
    'betaalbare computerhulp hilversum',
    'IT student hilversum',
    'computer reparatie hilversum student',
    'betaalbare computer hulp hilversum',
    'studenten computer service hilversum',
    'hilversum student IT hulp',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Hilversum',
    description: 'Student aan huis Hilversum: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Hilversum',
    description: 'Student aan huis Hilversum: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-hilversum',
  },
}

export default function StudentAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

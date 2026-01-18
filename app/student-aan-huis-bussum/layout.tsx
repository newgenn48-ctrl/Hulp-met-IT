import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Bussum | Hulp Met IT',
  description: 'ICT Student aan huis in Bussum voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis bussum',
    'student computerhulp bussum',
    'betaalbare computerhulp bussum',
    'IT student bussum',
    'computer reparatie bussum student',
    'betaalbare computer hulp bussum',
    'studenten computer service bussum',
    'bussum student IT hulp',
    'bussum computerhulp avond',
    'bussum IT hulp weekend',
    'computerhulp gooi',
    'student aan huis gooi'
  ],
  openGraph: {
    title: 'Student Aan Huis Bussum',
    description: 'Student aan huis Bussum: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Bussum',
    description: 'Student aan huis Bussum: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-bussum',
  },
}

export default function StudentAanHuisBussumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Laren | Hulp Met IT',
  description: 'ICT Student aan huis in Laren voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis laren',
    'student computerhulp laren',
    'betaalbare computerhulp laren',
    'IT student laren',
    'computer reparatie laren student',
    'betaalbare computer hulp laren',
    'studenten computer service laren',
    'laren student IT hulp',
    'laren computerhulp avond',
    'laren IT hulp weekend',
    'computerhulp gooi',
    'student aan huis gooi'
  ],
  openGraph: {
    title: 'Student Aan Huis Laren',
    description: 'Student aan huis Laren: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Laren',
    description: 'Student aan huis Laren: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-laren',
  },
}

export default function StudentAanHuisLarenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

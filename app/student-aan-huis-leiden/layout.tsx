import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Leiden | Hulp Met IT',
  description: 'Student aan huis in Leiden voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis leiden',
    'student computerhulp leiden',
    'betaalbare computerhulp leiden',
    'IT student leiden',
    'computer reparatie leiden student',
    'betaalbare computer hulp leiden',
    'studenten computer service leiden',
    'leiden student IT hulp',
    'leiden computerhulp avond',
    'leiden IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Leiden | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Leiden. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Leiden | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Leiden. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-leiden'
  }
}

export default function StudentAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
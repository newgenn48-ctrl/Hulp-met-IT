import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Haag | Hulp Met IT',
  description: 'Student aan huis in Den Haag voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis den haag',
    'student computerhulp den haag',
    'betaalbare computerhulp den haag',
    'IT student den haag',
    'computer reparatie den haag student',
    'betaalbare computer hulp den haag',
    'studenten computer service den haag',
    'den haag student IT hulp',
    'den haag computerhulp avond',
    'den haag IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Den Haag | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Haag. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Den Haag | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Haag. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-den-haag'
  }
}

export default function StudentAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
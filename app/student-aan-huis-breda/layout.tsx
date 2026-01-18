import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Breda | Computerhulp aan Huis | Hulp met IT',
  description: 'Student aan huis in Breda voor computerhulp. Betaalbare IT-studenten van Avans Hogeschool en NHTV komen naar je toe. Vanaf €53,50. Breda Centrum, Princenhage, Ginneken en omgeving.',
  keywords: [
    'student aan huis breda',
    'student computerhulp breda',
    'betaalbare computerhulp breda',
    'IT student breda',
    'computer reparatie breda student',
    'computerhulp breda centrum',
    'computerhulp princenhage',
    'computerhulp ginneken',
    'avans hogeschool student hulp',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp oosterhout',
    'computerhulp etten-leur'
  ],
  openGraph: {
    title: 'Student aan Huis Breda | Betaalbare Computerhulp',
    description: 'IT-studenten van Avans Hogeschool en NHTV komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp in Breda Centrum, Princenhage, Ginneken en omgeving.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Breda | Betaalbare Computerhulp',
    description: 'IT-studenten van Avans Hogeschool en NHTV komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-breda'
  }
}

export default function StudentAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

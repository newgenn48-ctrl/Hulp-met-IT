import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Breda | Hulp met IT',
  description: 'ICT Student aan huis in Breda voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
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
    title: 'Student aan huis Breda | Hulp met IT',
    description: 'IT-studenten van Avans Hogeschool en NHTV komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp in Breda Centrum, Princenhage, Ginneken en omgeving.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Breda | Hulp met IT',
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

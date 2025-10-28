import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Alphen aan den Rijn | Hulp Met IT',
  description: 'Student aan huis in Alphen aan den Rijn voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis alphen aan den rijn',
    'student computerhulp alphen aan den rijn',
    'betaalbare computerhulp alphen aan den rijn',
    'IT student alphen aan den rijn',
    'computer reparatie alphen aan den rijn student',
    'betaalbare computer hulp alphen aan den rijn',
    'studenten computer service alphen aan den rijn',
    'alphen aan den rijn student IT hulp',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Alphen aan den Rijn | IT-Student Computerhulp',
    description: 'Student aan huis Alphen aan den Rijn: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Alphen aan den Rijn | IT-Student Computerhulp',
    description: 'Student aan huis Alphen aan den Rijn: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-alphen-aan-den-rijn',
  },
}

export default function StudentAanHuisAlphenAanDenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

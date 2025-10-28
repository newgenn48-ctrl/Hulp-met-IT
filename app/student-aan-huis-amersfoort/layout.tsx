import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Amersfoort | Hulp Met IT',
  description: 'Student aan huis in Amersfoort voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: [
    'student aan huis amersfoort',
    'student computerhulp amersfoort',
    'betaalbare computerhulp amersfoort',
    'IT student amersfoort',
    'computer reparatie amersfoort student',
    'betaalbare computer hulp amersfoort',
    'studenten computer service amersfoort',
    'amersfoort student IT hulp',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Amersfoort | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Amersfoort. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Amersfoort | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Amersfoort. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-amersfoort'
  }
}

export default function StudentAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
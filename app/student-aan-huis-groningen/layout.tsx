import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Groningen | Hulp Met IT',
  description: 'Student aan huis in Groningen voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis groningen',
    'student computerhulp groningen',
    'betaalbare computerhulp groningen',
    'IT student groningen',
    'computer reparatie groningen student',
    'betaalbare computer hulp groningen',
    'studenten computer service groningen',
    'groningen student IT hulp',
    'groningen computerhulp avond',
    'groningen IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Groningen | IT-Student Computerhulp',
    description: 'Student aan huis Groningen: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-groningen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Groningen | IT-Student Computerhulp',
    description: 'Student aan huis Groningen: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-groningen',
  },
}

export default function StudentAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

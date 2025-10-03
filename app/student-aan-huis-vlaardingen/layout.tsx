import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vlaardingen | Hulp Met IT',
  description: 'Student aan huis in Vlaardingen voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis vlaardingen',
    'student computerhulp vlaardingen',
    'betaalbare computerhulp vlaardingen',
    'IT student vlaardingen',
    'computer reparatie vlaardingen student',
    'betaalbare computer hulp vlaardingen',
    'studenten computer service vlaardingen',
    'vlaardingen student IT hulp',
    'vlaardingen computerhulp avond',
    'vlaardingen IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Vlaardingen | IT-Student Computerhulp',
    description: 'Student aan huis Vlaardingen: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-vlaardingen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Vlaardingen | IT-Student Computerhulp',
    description: 'Student aan huis Vlaardingen: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-vlaardingen',
  },
}

export default function StudentAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

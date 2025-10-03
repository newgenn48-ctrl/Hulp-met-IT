import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zwolle | Hulp Met IT',
  description: 'Student aan huis in Zwolle voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis zwolle',
    'student computerhulp zwolle',
    'betaalbare computerhulp zwolle',
    'IT student zwolle',
    'computer reparatie zwolle student',
    'betaalbare computer hulp zwolle',
    'studenten computer service zwolle',
    'zwolle student IT hulp',
    'zwolle computerhulp avond',
    'zwolle IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Zwolle | IT-Student Computerhulp',
    description: 'Student aan huis Zwolle: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-zwolle',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Zwolle | IT-Student Computerhulp',
    description: 'Student aan huis Zwolle: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-zwolle',
  },
}

export default function StudentAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Waalwijk | Hulp met IT',
  description: 'ICT Student aan huis in Waalwijk voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis waalwijk',
    'student computerhulp waalwijk',
    'betaalbare computerhulp waalwijk',
    'IT student waalwijk',
    'computer reparatie waalwijk student',
    'betaalbare computer hulp waalwijk',
    'studenten computer service waalwijk',
    'waalwijk student IT hulp',
    'waalwijk computerhulp avond',
    'waalwijk IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Waalwijk | Hulp met IT',
    description: 'Student aan huis Waalwijk: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Waalwijk | Hulp met IT',
    description: 'Student aan huis Waalwijk: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-waalwijk',
  },
}

export default function StudentAanHuisWaalwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

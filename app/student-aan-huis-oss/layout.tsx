import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Oss | Hulp met IT',
  description: 'ICT Student aan huis in Oss voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis oss',
    'student computerhulp oss',
    'betaalbare computerhulp oss',
    'IT student oss',
    'computer reparatie oss student',
    'betaalbare computer hulp oss',
    'studenten computer service oss',
    'oss student IT hulp',
    'oss computerhulp avond',
    'oss IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Oss | Hulp met IT',
    description: 'Student aan huis Oss: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Oss | Hulp met IT',
    description: 'Student aan huis Oss: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-oss',
  },
}

export default function StudentAanHuisOssLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

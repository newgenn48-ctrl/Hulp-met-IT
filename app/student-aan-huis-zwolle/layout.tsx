import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zwolle | Hulp met IT',
  description: 'ICT Student aan huis in Zwolle voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
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
    'zwolle IT hulp weekend',
    'hogeschool windesheim student',
    'computerhulp stadshagen',
    'IT hulp kampen',
    'computerhulp hardenberg'
  ],
  openGraph: {
    title: 'Student aan huis Zwolle | Hulp met IT',
    description: 'Student aan huis Zwolle: betaalbare computerhulp door IT-studenten van Hogeschool Windesheim. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zwolle | Hulp met IT',
    description: 'Student aan huis Zwolle: betaalbare computerhulp door IT-studenten van Hogeschool Windesheim. Bel ons!',
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

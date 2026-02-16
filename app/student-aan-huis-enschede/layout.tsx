import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Enschede | Hulp met IT',
  description: 'ICT Student aan huis in Enschede voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis enschede',
    'student computerhulp enschede',
    'betaalbare computerhulp enschede',
    'IT student enschede',
    'computer reparatie enschede student',
    'betaalbare computer hulp enschede',
    'studenten computer service enschede',
    'enschede student IT hulp',
    'enschede computerhulp avond',
    'enschede IT hulp weekend',
    'computerhulp twente',
    'IT student twente',
    'universiteit twente student computerhulp',
    'saxion student computerhulp'
  ],
  openGraph: {
    title: 'Student aan huis Enschede | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Enschede en omgeving. €14,50 per kwartier. Ook in Hengelo, Oldenzaal en Almelo!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Enschede | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Enschede en omgeving. €14,50 per kwartier. Ook in Hengelo, Oldenzaal en Almelo!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-enschede',
  },
}

export default function StudentAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

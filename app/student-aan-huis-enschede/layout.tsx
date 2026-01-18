import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Enschede | Hulp Met IT',
  description: 'ICT Student aan huis in Enschede voor computerhulp. Betaalbare IT-studenten van Universiteit Twente en Saxion komen naar je toe. Vanaf €53,50. Snel en vakkundig!',
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
    title: 'ICT Student aan huis Enschede | Hulp Met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Enschede en omgeving. Vanaf €53,50. Ook in Hengelo, Oldenzaal en Almelo!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan huis Enschede | Hulp Met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Enschede en omgeving. Vanaf €53,50. Ook in Hengelo, Oldenzaal en Almelo!',
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

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Katwijk | Computerhulp aan Huis | Hulp Met IT',
  description: 'ICT Student aan huis in Katwijk voor betaalbare computerhulp. Studenten van Universiteit Leiden en Hogeschool Leiden komen bij u thuis. Vanaf €53,50. Ook in Katwijk aan Zee, Rijnsburg, Leiden, Oegstgeest, Noordwijk en omgeving.',
  keywords: [
    'student aan huis katwijk',
    'student computerhulp katwijk',
    'betaalbare computerhulp katwijk',
    'IT student katwijk',
    'computer reparatie katwijk student',
    'betaalbare computer hulp katwijk',
    'studenten computer service katwijk',
    'katwijk student IT hulp',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend',
    'computerhulp katwijk aan zee',
    'computerhulp rijnsburg',
    'computerhulp leiden student',
    'computerhulp oegstgeest',
    'computerhulp noordwijk',
    'computerhulp wassenaar'
  ],
  openGraph: {
    title: 'ICT Student aan Huis Katwijk | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Katwijk en omgeving. Studenten van Universiteit Leiden en Hogeschool Leiden. Vanaf €53,50.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-katwijk'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan Huis Katwijk | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Katwijk en omgeving. Studenten van Universiteit Leiden en Hogeschool Leiden. Vanaf €53,50.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-katwijk',
  },
}

export default function StudentAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

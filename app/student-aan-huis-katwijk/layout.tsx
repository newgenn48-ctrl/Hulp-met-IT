import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Katwijk | Hulp met IT',
  description: 'ICT Student aan huis in Katwijk voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
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
    title: 'Student aan huis Katwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Katwijk en omgeving. Studenten van Universiteit Leiden en Hogeschool Leiden. €14,50 per kwartier.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-katwijk'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Katwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Katwijk en omgeving. Studenten van Universiteit Leiden en Hogeschool Leiden. €14,50 per kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-katwijk',
  },
}

export default function StudentAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

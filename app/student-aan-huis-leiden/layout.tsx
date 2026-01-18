import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Leiden | Hulp Met IT',
  description: 'ICT Student aan huis in Leiden voor computerhulp. Betaalbare IT-studenten van Universiteit Leiden en Hogeschool Leiden komen naar je toe. Vanaf €53,50. Snel en vakkundig!',
  keywords: [
    'student aan huis leiden',
    'student computerhulp leiden',
    'betaalbare computerhulp leiden',
    'IT student leiden',
    'computer reparatie leiden student',
    'betaalbare computer hulp leiden',
    'studenten computer service leiden',
    'leiden student IT hulp',
    'leiden computerhulp avond',
    'leiden IT hulp weekend',
    'computerhulp oegstgeest',
    'computerhulp voorschoten',
    'computerhulp leiderdorp'
  ],
  openGraph: {
    title: 'ICT Student aan huis Leiden',
    description: 'Student aan huis Leiden: betaalbare computerhulp door IT-studenten van Universiteit Leiden en Hogeschool Leiden. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan huis Leiden',
    description: 'Student aan huis Leiden: betaalbare computerhulp door IT-studenten van Universiteit Leiden en Hogeschool Leiden. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-leiden',
  },
}

export default function StudentAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

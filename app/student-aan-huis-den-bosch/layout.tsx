import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Bosch | Hulp Met IT',
  description: 'Student aan huis in Den Bosch voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis den bosch',
    'student computerhulp den bosch',
    'betaalbare computerhulp den bosch',
    'IT student den bosch',
    'computer reparatie den bosch student',
    'betaalbare computer hulp den bosch',
    'studenten computer service den bosch',
    'den bosch student IT hulp',
    'den bosch computerhulp avond',
    'den bosch IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Den Bosch | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Bosch. Betaalbare tarieven, vakkundige hulp.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-den-bosch',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Den Bosch | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Bosch. Betaalbare tarieven, vakkundige hulp.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-den-bosch'
  }
}

export default function StudentAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
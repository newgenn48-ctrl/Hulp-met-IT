import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Bosch | Hulp met IT',
  description: "ICT Student aan huis in 's-Hertogenbosch voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.",
  keywords: [
    'student aan huis den bosch',
    "student aan huis 's-hertogenbosch",
    'student computerhulp den bosch',
    'betaalbare computerhulp den bosch',
    'IT student den bosch',
    'computer reparatie den bosch student',
    'betaalbare computer hulp den bosch',
    "studenten computer service 's-hertogenbosch",
    'den bosch student IT hulp',
    'den bosch computerhulp avond',
    'den bosch IT hulp weekend',
    'computerhulp rosmalen',
    'computerhulp vught'
  ],
  openGraph: {
    title: 'Student aan huis Den Bosch | Hulp met IT',
    description: "Student aan huis in 's-Hertogenbosch: betaalbare computerhulp door IT-studenten. Bel ons!",
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Den Bosch | Hulp met IT',
    description: "Student aan huis in 's-Hertogenbosch: betaalbare computerhulp door IT-studenten. Bel ons!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-den-bosch',
  },
}

export default function StudentAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

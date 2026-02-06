import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Dordrecht | Hulp Met IT',
  description: 'ICT Student aan huis in Dordrecht voor computerhulp. Betaalbare IT-studenten van Da Vinci College komen naar je toe. €14,50 per kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis dordrecht',
    'student computerhulp dordrecht',
    'betaalbare computerhulp dordrecht',
    'IT student dordrecht',
    'computer reparatie dordrecht student',
    'betaalbare computer hulp dordrecht',
    'studenten computer service dordrecht',
    'dordrecht student IT hulp',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend',
    'da vinci college student computerhulp',
    'computerhulp zwijndrecht',
    'computerhulp papendrecht',
    'computerhulp sliedrecht'
  ],
  openGraph: {
    title: 'ICT Student aan huis Dordrecht | Hulp Met IT',
    description: 'Betaalbare computerhulp in Dordrecht door IT-studenten. Snel, vakkundig en vriendelijk bij u thuis.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan huis Dordrecht | Hulp Met IT',
    description: 'Betaalbare computerhulp in Dordrecht door IT-studenten. Snel, vakkundig en vriendelijk bij u thuis.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-dordrecht',
  },
}

export default function StudentAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

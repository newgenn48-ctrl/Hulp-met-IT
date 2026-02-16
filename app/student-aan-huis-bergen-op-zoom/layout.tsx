import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bergen op Zoom | Hulp met IT',
  description: 'ICT Student aan huis in Bergen op Zoom voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis bergen-op-zoom',
    'student computerhulp bergen-op-zoom',
    'betaalbare computerhulp bergen-op-zoom',
    'IT student bergen-op-zoom',
    'computer reparatie bergen-op-zoom student',
    'betaalbare computer hulp bergen-op-zoom',
    'studenten computer service bergen-op-zoom',
    'bergen-op-zoom student IT hulp',
    'bergen-op-zoom computerhulp avond',
    'bergen-op-zoom IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Bergen op Zoom | Hulp met IT',
    description: 'Student aan huis Bergen op Zoom: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bergen op Zoom | Hulp met IT',
    description: 'Student aan huis Bergen op Zoom: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-bergen-op-zoom',
  },
}

export default function StudentAanHuisBergenOpZoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

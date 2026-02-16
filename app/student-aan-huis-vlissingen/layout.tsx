import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vlissingen | Hulp met IT',
  description: 'ICT Student aan huis in Vlissingen voor computerhulp. Betaalbare IT-studenten komen naar u toe. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Snel en vakkundig!',
  keywords: [
    'student aan huis vlissingen',
    'student computerhulp vlissingen',
    'betaalbare computerhulp vlissingen',
    'IT student vlissingen',
    'computer reparatie vlissingen student',
    'betaalbare computer hulp vlissingen',
    'studenten computer service vlissingen',
    'vlissingen student IT hulp',
    'vlissingen computerhulp avond',
    'vlissingen IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan huis Vlissingen | Hulp met IT',
    description: 'Student aan huis Vlissingen: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Vlissingen | Hulp met IT',
    description: 'Student aan huis Vlissingen: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-vlissingen',
  },
}

export default function StudentAanHuisVlissingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

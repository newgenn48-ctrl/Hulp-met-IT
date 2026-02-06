import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Alphen aan den Rijn | Hulp Met IT',
  description: 'ICT Student aan huis in Alphen aan den Rijn voor computerhulp. Betaalbare IT-studenten komen naar je toe in Alphen Centrum, Ridderveld, De Baronie en omgeving. €14,50 per kwartier. Snel en vakkundig!',
  keywords: [
    'student aan huis alphen aan den rijn',
    'student computerhulp alphen aan den rijn',
    'betaalbare computerhulp alphen aan den rijn',
    'IT student alphen aan den rijn',
    'computer reparatie alphen aan den rijn student',
    'betaalbare computer hulp alphen aan den rijn',
    'studenten computer service alphen aan den rijn',
    'alphen aan den rijn student IT hulp',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp boskoop',
    'IT hulp hazerswoude',
    'student aan huis benthuizen'
  ],
  openGraph: {
    title: 'ICT Student aan huis Alphen aan den Rijn | Hulp Met IT',
    description: 'Student aan huis Alphen aan den Rijn: betaalbare computerhulp door IT-studenten. Ook in Boskoop, Hazerswoude en omgeving. Bel ons!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan huis Alphen aan den Rijn | Hulp Met IT',
    description: 'Student aan huis Alphen aan den Rijn: betaalbare computerhulp door IT-studenten. Ook in Boskoop, Hazerswoude en omgeving. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-alphen-aan-den-rijn',
  },
}

export default function StudentAanHuisAlphenAanDenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

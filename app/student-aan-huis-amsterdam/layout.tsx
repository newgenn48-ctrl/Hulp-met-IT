import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Amsterdam | Betaalbare computerhulp thuis',
  description: 'Student aan huis Amsterdam: betaalbare computerhulp door IT-studenten. Ook avonden/weekenden. Bel ons!',
  keywords: [
    'student aan huis amsterdam',
    'student computerhulp amsterdam',
    'betaalbare computerhulp amsterdam',
    'IT student amsterdam',
    'computer reparatie amsterdam student',
    'betaalbare computer hulp amsterdam',
    'studenten computer service amsterdam',
    'amsterdam student IT hulp',
    'amsterdam computerhulp avond',
    'amsterdam IT hulp weekend'
  ],
  openGraph: {
    title: 'Student Aan Huis Amsterdam | IT-Student Computerhulp',
    description: 'Student aan huis Amsterdam: betaalbare computerhulp door IT-studenten. Bel ons!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-amsterdam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Amsterdam | IT-Student Computerhulp',
    description: 'Student aan huis Amsterdam: betaalbare computerhulp door IT-studenten. Bel ons!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-amsterdam',
  },
}

export default function StudentAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
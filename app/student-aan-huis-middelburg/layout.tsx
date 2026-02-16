import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Middelburg | Hulp met IT',
  description: 'ICT Student aan huis in Middelburg voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis middelburg',
    'student computerhulp middelburg',
    'betaalbare computerhulp middelburg',
    'IT student middelburg',
    'computer reparatie middelburg student',
    'betaalbare computer hulp middelburg',
    'studenten computer service middelburg',
    'middelburg student IT hulp',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend',
    'computerhulp vlissingen',
    'computerhulp zeeland',
    'computerhulp goes',
    'computerhulp veere',
    'computerhulp domburg',
    'HZ University student computerhulp'
  ],
  openGraph: {
    title: 'Student aan huis Middelburg | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Middelburg en heel Zeeland. Studenten van HZ University of Applied Sciences. €14,50 per kwartier.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-middelburg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Middelburg | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten in Middelburg en heel Zeeland. Studenten van HZ University of Applied Sciences. €14,50 per kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-middelburg',
  },
}

export default function StudentAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

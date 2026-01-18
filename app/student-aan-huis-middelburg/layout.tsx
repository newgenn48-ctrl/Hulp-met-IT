import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Middelburg | Computerhulp aan Huis | Hulp Met IT',
  description: 'ICT Student aan huis in Middelburg voor betaalbare computerhulp. Studenten van HZ University of Applied Sciences komen bij u thuis. Vanaf €53,50. Ook in Vlissingen, Veere, Goes, Domburg, Oostkapelle en heel Zeeland.',
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
    title: 'ICT Student aan Huis Middelburg | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Middelburg en heel Zeeland. Studenten van HZ University of Applied Sciences. Vanaf €53,50.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-middelburg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan Huis Middelburg | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten in Middelburg en heel Zeeland. Studenten van HZ University of Applied Sciences. Vanaf €53,50.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-middelburg',
  },
}

export default function StudentAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

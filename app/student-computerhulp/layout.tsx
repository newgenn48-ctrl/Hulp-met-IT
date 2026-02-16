import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Computerhulp aan Huis | Hulp met IT',
  description: 'Student computerhulp aan huis. HBO-opgeleide ICT-studenten helpen met al uw computerproblemen. Betaalbaar, vriendelijk en vakkundig. Vanaf €14,50/kwartier.',
  keywords: [
    'student computerhulp',
    'studenten hulp aan huis',
    'student computer hulp',
    'ICT student hulp',
    'betaalbare computerhulp student',
    'student IT hulp',
    'computerhulp door studenten',
    'student aan huis computer',
    'HBO student computerhulp',
    'studenten computerhulp aan huis'
  ],
  alternates: { canonical: '/student-computerhulp' },
  openGraph: {
    title: 'Student Computerhulp - Betaalbare IT Hulp aan Huis',
    description: 'HBO-opgeleide ICT-studenten helpen met al uw computerproblemen aan huis.',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/student-computerhulp',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Computerhulp aan Huis',
    description: 'Betaalbare computerhulp door HBO-opgeleide ICT-studenten.',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

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
    'studenten computerhulp aan huis',
    'goedkope computerhulp student',
    'ict student aan huis',
    'student pc hulp',
    'betaalbare IT hulp student',
    'student laptop reparatie',
    'computerhulp jong en vakkundig'
  ],
  alternates: { canonical: '/student-computerhulp' },
  openGraph: {
    title: 'Student Computerhulp - Betaalbare IT Hulp aan Huis',
    description: 'HBO-opgeleide ICT-studenten helpen met al uw computerproblemen aan huis.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Student computerhulp aan huis - Hulp met IT'
      }
    ],
    url: 'https://hulpmetit.nl/student-computerhulp',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Computerhulp aan Huis',
    description: 'Betaalbare computerhulp door HBO-opgeleide ICT-studenten.',
    images: ['/og-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

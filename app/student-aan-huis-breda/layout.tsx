import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Breda | Hulp met IT',
  description: 'ICT Student aan huis in Breda voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Breda Centrum, Breda Noord, Breda Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis breda',
    'computerhulp breda',
    'ict hulp breda',
    'computer reparatie breda',
    'laptop hulp breda',
    'it student breda',
    'betaalbare computerhulp breda',
    'computer problemen breda',
    'wifi problemen breda',
    'internet hulp breda',
    'computerhulp breda centrum',
    'ict hulp breda noord',
    'computer reparatie breda oost',
    'laptop hulp breda west',
    'student computerhulp breda zuid',
    'it hulp prinsenbeek',
    'it service breda',
    'laptop reparatie breda',
    'it hulp aan huis breda'
  ],
  openGraph: {
    title: 'Student aan huis Breda | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Breda. Wij komen bij u thuis in Breda en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-breda',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Breda - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Breda | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Breda. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-breda'
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
  }
}

export default function StudentAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

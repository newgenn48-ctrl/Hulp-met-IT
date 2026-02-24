import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Rotterdam | Hulp met IT',
  description: 'ICT Student aan huis in Rotterdam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rotterdam Centrum, Rotterdam Noord, Rotterdam Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis rotterdam',
    'computerhulp rotterdam',
    'ict hulp rotterdam',
    'computer reparatie rotterdam',
    'laptop hulp rotterdam',
    'it student rotterdam',
    'betaalbare computerhulp rotterdam',
    'computer problemen rotterdam',
    'wifi problemen rotterdam',
    'internet hulp rotterdam',
    'computerhulp rotterdam centrum',
    'ict hulp rotterdam noord',
    'computer reparatie rotterdam oost',
    'laptop hulp rotterdam west',
    'student computerhulp rotterdam zuid',
    'it hulp kralingen-crooswijk',
    'it service rotterdam',
    'laptop reparatie rotterdam',
    'it hulp aan huis rotterdam'
  ],
  openGraph: {
    title: 'Student aan huis Rotterdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rotterdam. Wij komen bij u thuis in Rotterdam en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-rotterdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Rotterdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Rotterdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rotterdam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-rotterdam'
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

export default function StudentAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

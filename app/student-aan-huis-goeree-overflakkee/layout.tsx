import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Goeree-Overflakkee | Hulp met IT',
  description: 'ICT Student aan huis in Goeree-Overflakkee voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Middelharnis, Sommelsdijk, Ouddorp en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis goeree-overflakkee',
    'computerhulp goeree-overflakkee',
    'ict hulp goeree-overflakkee',
    'computer reparatie goeree-overflakkee',
    'laptop hulp goeree-overflakkee',
    'it student goeree-overflakkee',
    'betaalbare computerhulp goeree-overflakkee',
    'computer problemen goeree-overflakkee',
    'wifi problemen goeree-overflakkee',
    'internet hulp goeree-overflakkee',
    'computerhulp middelharnis',
    'ict hulp sommelsdijk',
    'computer reparatie ouddorp',
    'laptop hulp goedereede',
    'student computerhulp dirksland',
    'it hulp stellendam',
    'it service goeree-overflakkee',
    'laptop reparatie goeree-overflakkee',
    'it hulp aan huis goeree-overflakkee'
  ],
  openGraph: {
    title: 'Student aan huis Goeree-Overflakkee | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goeree-Overflakkee. Wij komen bij u thuis in Goeree-Overflakkee en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-goeree-overflakkee',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Goeree-Overflakkee - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Goeree-Overflakkee | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goeree-Overflakkee. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-goeree-overflakkee'
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

export default function StudentAanHuisGoereeOverflakkeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

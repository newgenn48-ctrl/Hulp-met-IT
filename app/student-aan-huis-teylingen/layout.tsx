import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Teylingen | Hulp met IT',
  description: 'ICT Student aan huis in Teylingen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Sassenheim, Voorhout, Warmond en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis teylingen',
    'computerhulp teylingen',
    'ict hulp teylingen',
    'computer reparatie teylingen',
    'laptop hulp teylingen',
    'it student teylingen',
    'betaalbare computerhulp teylingen',
    'computer problemen teylingen',
    'wifi problemen teylingen',
    'internet hulp teylingen',
    'computerhulp sassenheim',
    'ict hulp voorhout',
    'computer reparatie warmond',
    'laptop hulp sassenheim-noord',
    'student computerhulp sassenheim-zuid',
    'it hulp voorhout-west',
    'it service teylingen',
    'laptop reparatie teylingen',
    'it hulp aan huis teylingen'
  ],
  openGraph: {
    title: 'Student aan huis Teylingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Teylingen. Wij komen bij u thuis in Teylingen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-teylingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Teylingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Teylingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Teylingen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-teylingen'
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

export default function StudentAanHuisTeylingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Houten | Hulp met IT',
  description: 'ICT Student aan huis in Houten voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Houten Centrum, Houten Noord, Houten Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis houten',
    'computerhulp houten',
    'ict hulp houten',
    'computer reparatie houten',
    'laptop hulp houten',
    'it student houten',
    'betaalbare computerhulp houten',
    'computer problemen houten',
    'wifi problemen houten',
    'internet hulp houten',
    'computerhulp houten centrum',
    'ict hulp houten noord',
    'computer reparatie houten zuid',
    'laptop hulp het oude dorp',
    'student computerhulp castellum',
    'it hulp schalkwijk',
    'it service houten',
    'laptop reparatie houten',
    'it hulp aan huis houten'
  ],
  openGraph: {
    title: 'Student aan huis Houten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Houten. Wij komen bij u thuis in Houten en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-houten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Houten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Houten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Houten. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-houten'
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

export default function StudentAanHuisHoutenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

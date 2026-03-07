import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Woensdrecht | Hulp met IT',
  description: 'ICT Student aan huis in Woensdrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hoogerheide, Huijbergen, Putte en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis woensdrecht',
    'computerhulp woensdrecht',
    'ict hulp woensdrecht',
    'computer reparatie woensdrecht',
    'laptop hulp woensdrecht',
    'it student woensdrecht',
    'betaalbare computerhulp woensdrecht',
    'computer problemen woensdrecht',
    'wifi problemen woensdrecht',
    'internet hulp woensdrecht',
    'computerhulp hoogerheide',
    'ict hulp huijbergen',
    'computer reparatie putte',
    'laptop hulp ossendrecht',
    'student computerhulp woensdrecht dorp',
    'it hulp calfven',
    'it service woensdrecht',
    'laptop reparatie woensdrecht',
    'it hulp aan huis woensdrecht'
  ],
  openGraph: {
    title: 'Student aan huis Woensdrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Woensdrecht. Wij komen bij u thuis in Woensdrecht en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-woensdrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Woensdrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Woensdrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Woensdrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-woensdrecht'
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

export default function StudentAanHuisWoensdrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

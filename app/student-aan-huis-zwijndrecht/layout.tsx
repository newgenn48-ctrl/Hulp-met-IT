import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zwijndrecht | Hulp met IT',
  description: 'ICT Student aan huis in Zwijndrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zwijndrecht Centrum, Walburg, Nederhoven en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zwijndrecht',
    'computerhulp zwijndrecht',
    'ict hulp zwijndrecht',
    'computer reparatie zwijndrecht',
    'laptop hulp zwijndrecht',
    'it student zwijndrecht',
    'betaalbare computerhulp zwijndrecht',
    'computer problemen zwijndrecht',
    'wifi problemen zwijndrecht',
    'internet hulp zwijndrecht',
    'computerhulp zwijndrecht centrum',
    'ict hulp walburg',
    'computer reparatie nederhoven',
    'laptop hulp ontwikkeling',
    'student computerhulp kort ambacht',
    'it hulp heer oudelands ambacht',
    'it service zwijndrecht',
    'laptop reparatie zwijndrecht',
    'it hulp aan huis zwijndrecht'
  ],
  openGraph: {
    title: 'Student aan huis Zwijndrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zwijndrecht. Wij komen bij u thuis in Zwijndrecht en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zwijndrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zwijndrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zwijndrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zwijndrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zwijndrecht'
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

export default function StudentAanHuisZwijndrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

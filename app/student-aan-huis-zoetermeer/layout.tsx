import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zoetermeer | Hulp met IT',
  description: 'ICT Student aan huis in Zoetermeer voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zoetermeer Centrum, Zoetermeer Noord, Zoetermeer Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zoetermeer',
    'computerhulp zoetermeer',
    'ict hulp zoetermeer',
    'computer reparatie zoetermeer',
    'laptop hulp zoetermeer',
    'it student zoetermeer',
    'betaalbare computerhulp zoetermeer',
    'computer problemen zoetermeer',
    'wifi problemen zoetermeer',
    'internet hulp zoetermeer',
    'computerhulp zoetermeer centrum',
    'ict hulp zoetermeer noord',
    'computer reparatie zoetermeer oost',
    'laptop hulp zoetermeer west',
    'student computerhulp zoetermeer zuid',
    'it hulp oosterheem',
    'it service zoetermeer',
    'laptop reparatie zoetermeer',
    'it hulp aan huis zoetermeer'
  ],
  openGraph: {
    title: 'Student aan huis Zoetermeer | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zoetermeer. Wij komen bij u thuis in Zoetermeer en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zoetermeer',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zoetermeer - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zoetermeer | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zoetermeer. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zoetermeer'
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

export default function StudentAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

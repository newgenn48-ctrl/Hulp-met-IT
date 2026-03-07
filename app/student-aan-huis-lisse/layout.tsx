import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Lisse | Hulp met IT',
  description: 'ICT Student aan huis in Lisse voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Lisse Centrum, Poelpolder, Meer en Dorp en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis lisse',
    'computerhulp lisse',
    'ict hulp lisse',
    'computer reparatie lisse',
    'laptop hulp lisse',
    'it student lisse',
    'betaalbare computerhulp lisse',
    'computer problemen lisse',
    'wifi problemen lisse',
    'internet hulp lisse',
    'computerhulp lisse centrum',
    'ict hulp poelpolder',
    'computer reparatie meer en dorp',
    'laptop hulp keukenhof-omgeving',
    'student computerhulp lisserbroek',
    'it hulp heereweg-gebied',
    'it service lisse',
    'laptop reparatie lisse',
    'it hulp aan huis lisse'
  ],
  openGraph: {
    title: 'Student aan huis Lisse | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Lisse. Wij komen bij u thuis in Lisse en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-lisse',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Lisse - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Lisse | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Lisse. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-lisse'
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

export default function StudentAanHuisLisseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

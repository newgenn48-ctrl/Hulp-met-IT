import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Heiloo | Hulp met IT',
  description: 'ICT Student aan huis in Heiloo voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Heiloo, Ypestein, Zuiderloo en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis heiloo',
    'computerhulp heiloo',
    'ict hulp heiloo',
    'computer reparatie heiloo',
    'laptop hulp heiloo',
    'it student heiloo',
    'betaalbare computerhulp heiloo',
    'computer problemen heiloo',
    'wifi problemen heiloo',
    'internet hulp heiloo',
    'computerhulp heiloo',
    'ict hulp ypestein',
    'computer reparatie zuiderloo',
    'laptop hulp heiloo-centrum',
    'student computerhulp heiloo-oost',
    'it hulp heiloo-west',
    'it service heiloo',
    'laptop reparatie heiloo',
    'it hulp aan huis heiloo'
  ],
  openGraph: {
    title: 'Student aan huis Heiloo | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heiloo. Wij komen bij u thuis in Heiloo en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-heiloo',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Heiloo - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Heiloo | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Heiloo. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-heiloo'
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

export default function StudentAanHuisHeilooLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

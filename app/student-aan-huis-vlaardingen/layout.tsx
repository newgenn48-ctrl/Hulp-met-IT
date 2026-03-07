import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vlaardingen | Hulp met IT',
  description: 'ICT Student aan huis in Vlaardingen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vlaardingen Centrum, Vlaardingen Noord, Vlaardingen Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis vlaardingen',
    'computerhulp vlaardingen',
    'ict hulp vlaardingen',
    'computer reparatie vlaardingen',
    'laptop hulp vlaardingen',
    'it student vlaardingen',
    'betaalbare computerhulp vlaardingen',
    'computer problemen vlaardingen',
    'wifi problemen vlaardingen',
    'internet hulp vlaardingen',
    'computerhulp vlaardingen centrum',
    'ict hulp vlaardingen noord',
    'computer reparatie vlaardingen oost',
    'laptop hulp vlaardingen west',
    'student computerhulp vlaardingen zuid',
    'it hulp westwijk',
    'it service vlaardingen',
    'laptop reparatie vlaardingen',
    'it hulp aan huis vlaardingen'
  ],
  openGraph: {
    title: 'Student aan huis Vlaardingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vlaardingen. Wij komen bij u thuis in Vlaardingen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-vlaardingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Vlaardingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Vlaardingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vlaardingen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-vlaardingen'
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

export default function StudentAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

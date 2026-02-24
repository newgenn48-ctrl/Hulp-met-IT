import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zwolle | Hulp met IT',
  description: 'ICT Student aan huis in Zwolle voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zwolle Centrum, Zwolle Noord, Zwolle Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zwolle',
    'computerhulp zwolle',
    'ict hulp zwolle',
    'computer reparatie zwolle',
    'laptop hulp zwolle',
    'it student zwolle',
    'betaalbare computerhulp zwolle',
    'computer problemen zwolle',
    'wifi problemen zwolle',
    'internet hulp zwolle',
    'computerhulp zwolle centrum',
    'ict hulp zwolle noord',
    'computer reparatie zwolle oost',
    'laptop hulp zwolle west',
    'student computerhulp zwolle zuid',
    'it hulp stadshagen',
    'it service zwolle',
    'laptop reparatie zwolle',
    'it hulp aan huis zwolle'
  ],
  openGraph: {
    title: 'Student aan huis Zwolle | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zwolle. Wij komen bij u thuis in Zwolle en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zwolle',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zwolle - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zwolle | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zwolle. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zwolle'
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

export default function StudentAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

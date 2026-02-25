import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Aalsmeer | Hulp met IT',
  description: 'ICT Student aan huis in Aalsmeer voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Aalsmeer, Kudelstaart, Aalsmeer-Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis aalsmeer',
    'computerhulp aalsmeer',
    'ict hulp aalsmeer',
    'computer reparatie aalsmeer',
    'laptop hulp aalsmeer',
    'it student aalsmeer',
    'betaalbare computerhulp aalsmeer',
    'computer problemen aalsmeer',
    'wifi problemen aalsmeer',
    'internet hulp aalsmeer',
    'computerhulp aalsmeer',
    'ict hulp kudelstaart',
    'computer reparatie aalsmeer-oost',
    'laptop hulp aalsmeer-west',
    'student computerhulp hornmeer',
    'it hulp stommeer',
    'it service aalsmeer',
    'laptop reparatie aalsmeer',
    'it hulp aan huis aalsmeer'
  ],
  openGraph: {
    title: 'Student aan huis Aalsmeer | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Aalsmeer. Wij komen bij u thuis in Aalsmeer en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-aalsmeer',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Aalsmeer - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Aalsmeer | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Aalsmeer. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-aalsmeer'
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

export default function StudentAanHuisAalsmeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

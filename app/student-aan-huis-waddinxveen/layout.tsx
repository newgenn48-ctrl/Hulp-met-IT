import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Waddinxveen | Hulp met IT',
  description: 'ICT Student aan huis in Waddinxveen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Waddinxveen Centrum, Vondelwijk, Zuidpunt en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis waddinxveen',
    'computerhulp waddinxveen',
    'ict hulp waddinxveen',
    'computer reparatie waddinxveen',
    'laptop hulp waddinxveen',
    'it student waddinxveen',
    'betaalbare computerhulp waddinxveen',
    'computer problemen waddinxveen',
    'wifi problemen waddinxveen',
    'internet hulp waddinxveen',
    'computerhulp waddinxveen centrum',
    'ict hulp vondelwijk',
    'computer reparatie zuidpunt',
    'laptop hulp groenswaard',
    'student computerhulp triangel',
    'it hulp bomenwijk',
    'it service waddinxveen',
    'laptop reparatie waddinxveen',
    'it hulp aan huis waddinxveen'
  ],
  openGraph: {
    title: 'Student aan huis Waddinxveen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Waddinxveen. Wij komen bij u thuis in Waddinxveen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-waddinxveen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Waddinxveen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Waddinxveen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Waddinxveen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-waddinxveen'
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

export default function StudentAanHuisWaddinxveenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

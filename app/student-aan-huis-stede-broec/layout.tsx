import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Stede Broec | Hulp met IT',
  description: 'ICT Student aan huis in Stede Broec voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bovenkarspel, Grootebroek, Lutjebroek en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis stede broec',
    'computerhulp stede broec',
    'ict hulp stede broec',
    'computer reparatie stede broec',
    'laptop hulp stede broec',
    'it student stede broec',
    'betaalbare computerhulp stede broec',
    'computer problemen stede broec',
    'wifi problemen stede broec',
    'internet hulp stede broec',
    'computerhulp bovenkarspel',
    'ict hulp grootebroek',
    'computer reparatie lutjebroek',
    'laptop hulp stede broec-centrum',
    'it service stede broec',
    'laptop reparatie stede broec',
    'it hulp aan huis stede broec'
  ],
  openGraph: {
    title: 'Student aan huis Stede Broec | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Stede Broec. Wij komen bij u thuis in Stede Broec en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-stede-broec',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Stede Broec - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Stede Broec | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Stede Broec. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-stede-broec'
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

export default function StudentAanHuisStedeBroecLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

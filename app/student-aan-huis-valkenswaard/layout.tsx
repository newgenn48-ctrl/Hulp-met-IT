import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Valkenswaard | Hulp met IT',
  description: 'ICT Student aan huis in Valkenswaard voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Valkenswaard Centrum, Dommelen, Borkel en Schaft en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis valkenswaard',
    'computerhulp valkenswaard',
    'ict hulp valkenswaard',
    'computer reparatie valkenswaard',
    'laptop hulp valkenswaard',
    'it student valkenswaard',
    'betaalbare computerhulp valkenswaard',
    'computer problemen valkenswaard',
    'wifi problemen valkenswaard',
    'internet hulp valkenswaard',
    'computerhulp valkenswaard centrum',
    'ict hulp dommelen',
    'computer reparatie borkel en schaft',
    'laptop hulp geenhoven',
    'student computerhulp lage heide',
    'it hulp de belleman',
    'it service valkenswaard',
    'laptop reparatie valkenswaard',
    'it hulp aan huis valkenswaard'
  ],
  openGraph: {
    title: 'Student aan huis Valkenswaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Valkenswaard. Wij komen bij u thuis in Valkenswaard en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-valkenswaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Valkenswaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Valkenswaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Valkenswaard. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-valkenswaard'
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

export default function StudentAanHuisValkenswaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

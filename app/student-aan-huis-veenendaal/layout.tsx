import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Veenendaal | Hulp met IT',
  description: 'ICT Student aan huis in Veenendaal voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Veenendaal Centrum, Veenendaal Noord, Veenendaal Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis veenendaal',
    'computerhulp veenendaal',
    'ict hulp veenendaal',
    'computer reparatie veenendaal',
    'laptop hulp veenendaal',
    'it student veenendaal',
    'betaalbare computerhulp veenendaal',
    'computer problemen veenendaal',
    'wifi problemen veenendaal',
    'internet hulp veenendaal',
    'computerhulp veenendaal centrum',
    'ict hulp veenendaal noord',
    'computer reparatie veenendaal oost',
    'laptop hulp veenendaal west',
    'student computerhulp dragonder',
    'it hulp de engelenburg',
    'it service veenendaal',
    'laptop reparatie veenendaal',
    'it hulp aan huis veenendaal'
  ],
  openGraph: {
    title: 'Student aan huis Veenendaal | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veenendaal. Wij komen bij u thuis in Veenendaal en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-veenendaal',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Veenendaal - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Veenendaal | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veenendaal. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-veenendaal'
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

export default function StudentAanHuisVeenendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

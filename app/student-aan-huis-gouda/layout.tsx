import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Gouda | Hulp met IT',
  description: 'ICT Student aan huis in Gouda voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Gouda Centrum, Gouda Noord, Gouda Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis gouda',
    'computerhulp gouda',
    'ict hulp gouda',
    'computer reparatie gouda',
    'laptop hulp gouda',
    'it student gouda',
    'betaalbare computerhulp gouda',
    'computer problemen gouda',
    'wifi problemen gouda',
    'internet hulp gouda',
    'computerhulp gouda centrum',
    'ict hulp gouda noord',
    'computer reparatie gouda oost',
    'laptop hulp gouda west',
    'student computerhulp gouda zuid',
    'it hulp korte akkeren',
    'it service gouda',
    'laptop reparatie gouda',
    'it hulp aan huis gouda'
  ],
  openGraph: {
    title: 'Student aan huis Gouda | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gouda. Wij komen bij u thuis in Gouda en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-gouda',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Gouda - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Gouda | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gouda. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-gouda'
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

export default function StudentAanHuisGoudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

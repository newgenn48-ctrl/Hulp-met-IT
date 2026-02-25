import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Albrandswaard | Hulp met IT',
  description: 'ICT Student aan huis in Albrandswaard voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Poortugaal, Rhoon, Portland en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis albrandswaard',
    'computerhulp albrandswaard',
    'ict hulp albrandswaard',
    'computer reparatie albrandswaard',
    'laptop hulp albrandswaard',
    'it student albrandswaard',
    'betaalbare computerhulp albrandswaard',
    'computer problemen albrandswaard',
    'wifi problemen albrandswaard',
    'internet hulp albrandswaard',
    'computerhulp poortugaal',
    'ict hulp rhoon',
    'computer reparatie portland',
    'laptop hulp rhoon centrum',
    'student computerhulp poortugaal centrum',
    'it hulp albrandswaard-west',
    'it service albrandswaard',
    'laptop reparatie albrandswaard',
    'it hulp aan huis albrandswaard'
  ],
  openGraph: {
    title: 'Student aan huis Albrandswaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Albrandswaard. Wij komen bij u thuis in Albrandswaard en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-albrandswaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Albrandswaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Albrandswaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Albrandswaard. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-albrandswaard'
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

export default function StudentAanHuisAlbrandswaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

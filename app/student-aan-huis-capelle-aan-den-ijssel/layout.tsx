import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Capelle aan den IJssel | Hulp met IT',
  description: 'ICT Student aan huis in Capelle aan den IJssel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Capelle Centrum, Capelle Noord, Capelle Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis capelle aan den ijssel',
    'computerhulp capelle aan den ijssel',
    'ict hulp capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel',
    'laptop hulp capelle aan den ijssel',
    'it student capelle aan den ijssel',
    'betaalbare computerhulp capelle aan den ijssel',
    'computer problemen capelle aan den ijssel',
    'wifi problemen capelle aan den ijssel',
    'internet hulp capelle aan den ijssel',
    'computerhulp capelle centrum',
    'ict hulp capelle noord',
    'computer reparatie capelle oost',
    'laptop hulp capelle west',
    'student computerhulp capelle zuid',
    'it hulp capelsebrug',
    'it service capelle',
    'laptop reparatie capelle',
    'computer problemen capelle'
  ],
  openGraph: {
    title: 'Student aan huis Capelle aan den IJssel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Capelle aan den IJssel. Wij komen bij u thuis in Capelle aan den IJssel en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-capelle-aan-den-ijssel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Capelle aan den IJssel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Capelle aan den IJssel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Capelle aan den IJssel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-capelle-aan-den-ijssel'
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

export default function StudentAanHuisCapelleAanDenIjsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

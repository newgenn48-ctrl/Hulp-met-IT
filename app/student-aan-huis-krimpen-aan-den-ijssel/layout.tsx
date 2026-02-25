import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Krimpen aan den IJssel | Hulp met IT',
  description: 'ICT Student aan huis in Krimpen aan den IJssel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Krimpen Centrum, Langeland, Oud Krimpen en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis krimpen aan den ijssel',
    'computerhulp krimpen aan den ijssel',
    'ict hulp krimpen aan den ijssel',
    'computer reparatie krimpen aan den ijssel',
    'laptop hulp krimpen aan den ijssel',
    'it student krimpen aan den ijssel',
    'betaalbare computerhulp krimpen aan den ijssel',
    'computer problemen krimpen aan den ijssel',
    'wifi problemen krimpen aan den ijssel',
    'internet hulp krimpen aan den ijssel',
    'computerhulp krimpen centrum',
    'ict hulp langeland',
    'computer reparatie oud krimpen',
    'laptop hulp stormpolder',
    'student computerhulp laning',
    'it hulp kortland',
    'it service krimpen aan den ijssel',
    'laptop reparatie krimpen aan den ijssel',
    'it hulp aan huis krimpen aan den ijssel'
  ],
  openGraph: {
    title: 'Student aan huis Krimpen aan den IJssel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Krimpen aan den IJssel. Wij komen bij u thuis in Krimpen aan den IJssel en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-krimpen-aan-den-ijssel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Krimpen aan den IJssel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Krimpen aan den IJssel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Krimpen aan den IJssel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-krimpen-aan-den-ijssel'
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

export default function StudentAanHuisKrimpenAanDenIjsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

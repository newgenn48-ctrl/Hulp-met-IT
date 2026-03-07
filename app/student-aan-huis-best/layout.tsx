import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Best | Hulp met IT',
  description: 'ICT Student aan huis in Best voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Best Centrum, Best Noord, Best Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis best',
    'computerhulp best',
    'ict hulp best',
    'computer reparatie best',
    'laptop hulp best',
    'it student best',
    'betaalbare computerhulp best',
    'computer problemen best',
    'wifi problemen best',
    'internet hulp best',
    'computerhulp best centrum',
    'ict hulp best noord',
    'computer reparatie best zuid',
    'laptop hulp aarle',
    'student computerhulp naastenbest',
    'it hulp de vleut',
    'it service best',
    'laptop reparatie best',
    'it hulp aan huis best'
  ],
  openGraph: {
    title: 'Student aan huis Best | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Best. Wij komen bij u thuis in Best en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-best',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Best - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Best | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Best. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-best'
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

export default function StudentAanHuisBestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

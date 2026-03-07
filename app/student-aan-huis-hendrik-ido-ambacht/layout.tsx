import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hendrik-Ido-Ambacht | Hulp met IT',
  description: 'ICT Student aan huis in Hendrik-Ido-Ambacht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hendrik-Ido-Ambacht Centrum, Volgerlanden, Sandelingen-Ambacht en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hendrik-ido-ambacht',
    'computerhulp hendrik-ido-ambacht',
    'ict hulp hendrik-ido-ambacht',
    'computer reparatie hendrik-ido-ambacht',
    'laptop hulp hendrik-ido-ambacht',
    'it student hendrik-ido-ambacht',
    'betaalbare computerhulp hendrik-ido-ambacht',
    'computer problemen hendrik-ido-ambacht',
    'wifi problemen hendrik-ido-ambacht',
    'internet hulp hendrik-ido-ambacht',
    'computerhulp hendrik-ido-ambacht centrum',
    'ict hulp volgerlanden',
    'computer reparatie sandelingen-ambacht',
    'laptop hulp boveneind',
    'student computerhulp oostendam',
    'it hulp de volgerlanden-west',
    'it service hendrik-ido-ambacht',
    'laptop reparatie hendrik-ido-ambacht',
    'it hulp aan huis hendrik-ido-ambacht'
  ],
  openGraph: {
    title: 'Student aan huis Hendrik-Ido-Ambacht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hendrik-Ido-Ambacht. Wij komen bij u thuis in Hendrik-Ido-Ambacht en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hendrik-ido-ambacht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hendrik-Ido-Ambacht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hendrik-Ido-Ambacht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hendrik-Ido-Ambacht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hendrik-ido-ambacht'
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

export default function StudentAanHuisHendrikIdoAmbachtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

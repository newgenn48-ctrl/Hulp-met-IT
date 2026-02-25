import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Edam-Volendam | Hulp met IT',
  description: 'ICT Student aan huis in Edam-Volendam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Edam, Volendam, Zeevang en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis edam-volendam',
    'computerhulp edam-volendam',
    'ict hulp edam-volendam',
    'computer reparatie edam-volendam',
    'laptop hulp edam-volendam',
    'it student edam-volendam',
    'betaalbare computerhulp edam-volendam',
    'computer problemen edam-volendam',
    'wifi problemen edam-volendam',
    'internet hulp edam-volendam',
    'computerhulp edam',
    'ict hulp volendam',
    'computer reparatie zeevang',
    'laptop hulp kwadijk',
    'student computerhulp oosthuizen',
    'it hulp warder',
    'it service edam-volendam',
    'laptop reparatie edam-volendam',
    'it hulp aan huis edam-volendam'
  ],
  openGraph: {
    title: 'Student aan huis Edam-Volendam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Edam-Volendam. Wij komen bij u thuis in Edam-Volendam en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-edam-volendam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Edam-Volendam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Edam-Volendam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Edam-Volendam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-edam-volendam'
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

export default function StudentAanHuisEdamVolendamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

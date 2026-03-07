import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Goirle | Hulp met IT',
  description: 'ICT Student aan huis in Goirle voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Goirle Centrum, Riel, Goirle Noord en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis goirle',
    'computerhulp goirle',
    'ict hulp goirle',
    'computer reparatie goirle',
    'laptop hulp goirle',
    'it student goirle',
    'betaalbare computerhulp goirle',
    'computer problemen goirle',
    'wifi problemen goirle',
    'internet hulp goirle',
    'computerhulp goirle centrum',
    'ict hulp riel',
    'computer reparatie goirle noord',
    'laptop hulp goirle zuid',
    'student computerhulp boerdonk',
    'it hulp abcoven',
    'it service goirle',
    'laptop reparatie goirle',
    'it hulp aan huis goirle'
  ],
  openGraph: {
    title: 'Student aan huis Goirle | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goirle. Wij komen bij u thuis in Goirle en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-goirle',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Goirle - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Goirle | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goirle. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-goirle'
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

export default function StudentAanHuisGoirleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

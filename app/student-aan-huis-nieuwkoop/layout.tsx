import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nieuwkoop | Hulp met IT',
  description: 'ICT Student aan huis in Nieuwkoop voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Nieuwkoop, Ter Aar, Noorden en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis nieuwkoop',
    'computerhulp nieuwkoop',
    'ict hulp nieuwkoop',
    'computer reparatie nieuwkoop',
    'laptop hulp nieuwkoop',
    'it student nieuwkoop',
    'betaalbare computerhulp nieuwkoop',
    'computer problemen nieuwkoop',
    'wifi problemen nieuwkoop',
    'internet hulp nieuwkoop',
    'computerhulp nieuwkoop',
    'ict hulp ter aar',
    'computer reparatie noorden',
    'laptop hulp zevenhoven',
    'student computerhulp nieuwveen',
    'it hulp langeraar',
    'it service nieuwkoop',
    'laptop reparatie nieuwkoop',
    'it hulp aan huis nieuwkoop'
  ],
  openGraph: {
    title: 'Student aan huis Nieuwkoop | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nieuwkoop. Wij komen bij u thuis in Nieuwkoop en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-nieuwkoop',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Nieuwkoop - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Nieuwkoop | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nieuwkoop. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-nieuwkoop'
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

export default function StudentAanHuisNieuwkoopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

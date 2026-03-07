import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leiderdorp | Hulp met IT',
  description: 'Computerhulp aan huis in Leiderdorp door HBO-opgeleide ICT-studenten. Hulp in Leiderdorp Centrum, Bloemerd, Buitenhof en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis leiderdorp',
    'computer reparatie leiderdorp',
    'laptop reparatie leiderdorp',
    'ICT student leiderdorp',
    'pc hulp leiderdorp',
    'computer student leiderdorp',
    'leiderdorp computerhulp avond',
    'leiderdorp IT hulp weekend',
    'computerhulp leiderdorp spoed',
    'betaalbare IT hulp leiderdorp',
    'wifi problemen leiderdorp',
    'internet hulp leiderdorp',
    'printer installatie leiderdorp',
    'virus verwijderen leiderdorp',
    'computerhulp leiderdorp centrum',
    'ict hulp bloemerd',
    'computer reparatie buitenhof',
    'laptop hulp de houtkamp',
    'pc hulp elisabethhof',
    'it hulp ouderzorg',
    'computerhulp leiderdorp',
    'it service leiderdorp',
    'computer problemen leiderdorp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leiderdorp | Hulp met IT',
    description: 'Computerhulp aan huis in Leiderdorp door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-leiderdorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Leiderdorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leiderdorp | Hulp met IT',
    description: 'Computerhulp aan huis in Leiderdorp. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leiderdorp'
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

export default function ComputerhulpAanHuisLeiderdorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

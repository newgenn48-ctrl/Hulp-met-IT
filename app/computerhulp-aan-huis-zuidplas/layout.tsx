import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zuidplas | Hulp met IT',
  description: 'Computerhulp aan huis in Zuidplas door HBO-opgeleide ICT-studenten. Hulp in Nieuwerkerk aan den IJssel, Moordrecht, Zevenhuizen en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zuidplas',
    'computer reparatie zuidplas',
    'laptop reparatie zuidplas',
    'ICT student zuidplas',
    'pc hulp zuidplas',
    'computer student zuidplas',
    'zuidplas computerhulp avond',
    'zuidplas IT hulp weekend',
    'computerhulp zuidplas spoed',
    'betaalbare IT hulp zuidplas',
    'wifi problemen zuidplas',
    'internet hulp zuidplas',
    'printer installatie zuidplas',
    'virus verwijderen zuidplas',
    'computerhulp nieuwerkerk aan den ijssel',
    'ict hulp moordrecht',
    'computer reparatie zevenhuizen',
    'laptop hulp moerkapelle',
    'pc hulp oud verlaat',
    'it hulp westergouwe',
    'computerhulp zuidplas',
    'it service zuidplas',
    'computer problemen zuidplas'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zuidplas | Hulp met IT',
    description: 'Computerhulp aan huis in Zuidplas door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zuidplas',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zuidplas - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zuidplas | Hulp met IT',
    description: 'Computerhulp aan huis in Zuidplas. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zuidplas'
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

export default function ComputerhulpAanHuisZuidplasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

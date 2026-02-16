import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Bosch | Hulp Met IT',
  description: 'Computerhulp aan huis in Den Bosch voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis den bosch',
    'computer reparatie den bosch',
    'laptop reparatie den bosch',
    'ICT student den bosch',
    'pc hulp den bosch',
    'computer student den bosch',
    'den bosch computerhulp avond',
    'den bosch IT hulp weekend',
    'computerhulp den bosch spoed',
    'betaalbare IT hulp den bosch'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Den Bosch | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Den Bosch door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Bosch | ICT Student aan Huis',
    description: 'Computerhulp aan huis Den Bosch. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-bosch',
  },
}

export default function ComputerhulpAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

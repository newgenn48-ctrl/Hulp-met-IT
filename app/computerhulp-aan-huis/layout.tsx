import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis - Snel Geholpen | Hulp met IT',
  description: 'Computerhulp aan huis door HBO-opgeleide ICT-studenten. Vanaf €14,50 per kwartier + €10 voorrijkosten. 7 dagen per week. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis',
    'computer reparatie aan huis',
    'laptop reparatie thuis',
    'ICT student aan huis',
    'computerhulp thuis',
    'computer service aan huis',
    'pc hulp thuis',
    'computerhulp studenten',
    'computer hulp aan huis',
    'IT ondersteuning thuis',
    'pc reparatie thuis',
    'laptop hulp aan huis',
    'thuishulp computer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis - ICT Student aan Huis',
    description: 'Computerhulp aan huis door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis',
  },
}

export default function ComputerhulpAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

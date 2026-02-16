import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Goes | Hulp Met IT',
  description: 'Computerhulp aan huis in Goes voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis goes',
    'computer reparatie goes',
    'laptop reparatie goes',
    'ICT student goes',
    'pc hulp goes',
    'computer student goes',
    'goes computerhulp avond',
    'goes IT hulp weekend',
    'computerhulp goes spoed',
    'betaalbare IT hulp goes'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Goes | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Goes door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Goes | ICT Student aan Huis',
    description: 'Computerhulp aan huis Goes. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-goes',
  },
}

export default function ComputerhulpAanHuisGoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Laren | Hulp Met IT',
  description: 'Computerhulp aan huis in Laren voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis laren',
    'computer reparatie laren',
    'laptop reparatie laren',
    'ICT student laren',
    'pc hulp laren',
    'computer student laren',
    'laren computerhulp avond',
    'laren IT hulp weekend',
    'computerhulp laren spoed',
    'betaalbare IT hulp laren'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Laren | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Laren door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Laren | ICT Student aan Huis',
    description: 'Computerhulp aan huis Laren. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-laren',
  },
}

export default function ComputerhulpAanHuisLarenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

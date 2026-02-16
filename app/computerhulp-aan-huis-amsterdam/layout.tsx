import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amsterdam | Hulp Met IT',
  description: 'Computerhulp aan huis in Amsterdam voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis amsterdam',
    'computer reparatie amsterdam',
    'laptop reparatie amsterdam',
    'ICT student amsterdam',
    'pc hulp amsterdam',
    'computer student amsterdam',
    'amsterdam computerhulp avond',
    'amsterdam IT hulp weekend',
    'computerhulp amsterdam spoed',
    'betaalbare IT hulp amsterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amsterdam | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Amsterdam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amsterdam | ICT Student aan Huis',
    description: 'Computerhulp aan huis Amsterdam. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amsterdam',
  },
}

export default function ComputerhulpAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

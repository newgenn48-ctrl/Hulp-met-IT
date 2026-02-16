import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Oss | Hulp Met IT',
  description: 'Computerhulp aan huis in Oss voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis oss',
    'computer reparatie oss',
    'laptop reparatie oss',
    'ICT student oss',
    'pc hulp oss',
    'computer student oss',
    'oss computerhulp avond',
    'oss IT hulp weekend',
    'computerhulp oss spoed',
    'betaalbare IT hulp oss'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Oss | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Oss door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Oss | ICT Student aan Huis',
    description: 'Computerhulp aan huis Oss. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-oss',
  },
}

export default function ComputerhulpAanHuisOssLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

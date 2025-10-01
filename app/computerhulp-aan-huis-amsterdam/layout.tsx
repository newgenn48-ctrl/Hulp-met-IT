import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Amsterdam | Specialist komt naar u',
  description: 'Computerhulp aan huis in Amsterdam ✓ Ervaren specialisten ✓ Heel Amsterdam ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis amsterdam',
    'computer reparatie amsterdam',
    'laptop reparatie amsterdam',
    'pc hulp amsterdam',
    'IT hulp amsterdam',
    'computer specialist amsterdam',
    'amsterdam computerhulp avond',
    'amsterdam IT hulp weekend',
    'computerhulp amsterdam spoed',
    'betaalbare IT hulp amsterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Amsterdam | Computer Specialist',
    description: 'Computerhulp aan huis in heel Amsterdam ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-amsterdam-og.webp'],
    url: '/computerhulp-aan-huis-amsterdam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Amsterdam | Computer Specialist',
    description: 'Computerhulp aan huis Amsterdam ✓ Specialist komt bij u ✓ Heel Amsterdam ✓ Transparante tarieven',
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
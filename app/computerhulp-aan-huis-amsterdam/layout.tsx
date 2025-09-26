import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Aan Huis Amsterdam | IT-Specialist Amsterdam | Computer Reparatie',
  description: 'Computerhulp aan huis in Amsterdam ✓ Ervaren specialisten ✓ Heel Amsterdam ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis amsterdam',
    'computer reparatie amsterdam',
    'laptop reparatie amsterdam',
    'pc hulp amsterdam',
    'virus verwijdering amsterdam',
    'computerhulp amsterdam centrum',
    'computerhulp amsterdam noord',
    'computerhulp amsterdam zuid',
    'computer specialist amsterdam',
    'IT hulp amsterdam'
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
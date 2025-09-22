import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis | Hulp met IT | Specialist komt bij u thuis',
  description: 'Computer reparatie aan huis in heel Nederland ✓ Laptop reparatie thuis ✓ Virus verwijdering ✓ PC hulp specialist komt bij u ✓ Transparante tarieven vanaf €51,97',
  keywords: [
    'computerhulp aan huis',
    'computer reparatie thuis',
    'laptop reparatie aan huis',
    'pc hulp thuis',
    'computer specialist aan huis',
    'virus verwijdering computer',
    'windows problemen oplossen thuis',
    'computer traag maken sneller',
    'internet problemen oplossen aan huis',
    'computer installatie thuis',
    'hardware reparatie aan huis',
    'software installatie thuis',
    'computer beveiliging thuis',
    'IT ondersteuning aan huis Nederland'
  ],
  openGraph: {
    title: 'Computer Reparatie aan Huis Nederland | PC Hulp Thuis',
    description: 'Computer specialist komt bij u thuis ✓ Laptop reparatie ✓ Virus verwijdering ✓ Alle computerproblemen opgelost ✓ Heel Nederland',
    images: ['/images/computerhulp-landing-og.webp'],
    url: '/computerhulp-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Reparatie aan Huis | PC Specialist komt bij u',
    description: 'Laptop reparatie thuis ✓ Virus verwijdering ✓ Windows problemen ✓ Computer specialist Nederland',
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
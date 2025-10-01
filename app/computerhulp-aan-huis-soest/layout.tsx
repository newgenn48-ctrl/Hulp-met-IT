import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Soest | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Soest. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Soest, pc hulp Soest, laptop reparatie Soest, computer problemen Soest, IT hulp Soest',
  openGraph: {
    title: 'Computerhulp aan Huis Soest',
    description: 'Professionele computerhulp aan huis in Soest. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-soest',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SoestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

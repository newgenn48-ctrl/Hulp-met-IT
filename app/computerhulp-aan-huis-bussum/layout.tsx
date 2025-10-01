import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Bussum | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Bussum. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Bussum, pc hulp Bussum, laptop reparatie Bussum, computer problemen Bussum, IT hulp Bussum',
  openGraph: {
    title: 'Computerhulp aan Huis Bussum',
    description: 'Professionele computerhulp aan huis in Bussum. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bussum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BussumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

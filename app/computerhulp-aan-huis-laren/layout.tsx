import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Laren | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Laren. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Laren, pc hulp Laren, laptop reparatie Laren, computer problemen Laren, IT hulp Laren',
  openGraph: {
    title: 'Computerhulp aan Huis Laren',
    description: 'Professionele computerhulp aan huis in Laren. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-laren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function LarenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

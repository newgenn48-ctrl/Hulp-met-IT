import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Naarden | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Naarden. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Naarden, pc hulp Naarden, laptop reparatie Naarden, computer problemen Naarden, IT hulp Naarden',
  openGraph: {
    title: 'Computerhulp aan Huis Naarden',
    description: 'Professionele computerhulp aan huis in Naarden. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-naarden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function NaardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

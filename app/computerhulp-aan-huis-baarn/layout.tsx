import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Baarn | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Baarn. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Baarn, pc hulp Baarn, laptop reparatie Baarn, computer problemen Baarn, IT hulp Baarn',
  openGraph: {
    title: 'Computerhulp aan Huis Baarn',
    description: 'Professionele computerhulp aan huis in Baarn. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-baarn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BaarnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Blaricum | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Blaricum. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Blaricum, pc hulp Blaricum, laptop reparatie Blaricum, computer problemen Blaricum, IT hulp Blaricum',
  openGraph: {
    title: 'Computerhulp aan Huis Blaricum',
    description: 'Professionele computerhulp aan huis in Blaricum. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-blaricum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BlaricumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

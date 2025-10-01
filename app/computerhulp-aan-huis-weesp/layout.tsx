import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Weesp | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Weesp. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Weesp, pc hulp Weesp, laptop reparatie Weesp, computer problemen Weesp, IT hulp Weesp',
  openGraph: {
    title: 'Computerhulp aan Huis Weesp',
    description: 'Professionele computerhulp aan huis in Weesp. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-weesp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function WeespLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Huizen | Specialist komt naar u',
  description: 'Professionele computerhulp aan huis in Huizen. Ervaren studenten helpen met computer, laptop, internet en printer problemen. Snel, betaalbaar en deskundig.',
  keywords: 'computerhulp Huizen, pc hulp Huizen, laptop reparatie Huizen, computer problemen Huizen, IT hulp Huizen',
  openGraph: {
    title: 'Computerhulp aan Huis Huizen',
    description: 'Professionele computerhulp aan huis in Huizen. Ervaren studenten helpen met al uw computer en IT problemen.',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-huizen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function HuizenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

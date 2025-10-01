import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Windows 11 Overstap | Deadline oktober 2025',
  description: 'Windows 10 stopt op 14 oktober 2025! Professionele Windows 11 overstap door IT-studenten. Backup, installatie en nazorg vanaf €51,97. Plan nu je upgrade.',
  keywords: [
    'Windows 11 overstap',
    'Windows 10 naar Windows 11',
    'Windows 11 installatie',
    'Windows 11 upgrade service',
    'Windows 10 support eindigt',
    'Windows 11 migratie',
    'Windows 11 hulp',
    'computer upgrade service',
    'Windows 11 installatie service',
    'IT student Windows 11'
  ],
  openGraph: {
    title: 'Windows 11 Overstap Service | Zorgeloos Upgraden',
    description: 'Windows 10 stopt binnenkort! Professionele Windows 11 upgrade door IT-studenten. Backup, installatie en nazorg.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/windows-11-overstap'
  }
}

export default function Windows11OverstapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
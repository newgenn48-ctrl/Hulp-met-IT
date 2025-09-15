import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hulp met IT - Computerhulp aan Huis',
    short_name: 'Hulp met IT',
    description: 'Snelle, betrouwbare computerhulp aan huis door gekwalificeerde IT-studenten',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0ea5e9',
    categories: ['business', 'productivity', 'utilities'],
    lang: 'nl',
    orientation: 'portrait-primary',
    icons: []
  }
}
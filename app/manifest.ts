import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hulp met IT',
    short_name: 'Hulp met IT',
    description: 'Snelle, betrouwbare computerhulp aan huis door gekwalificeerde IT-specialisten',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#334155',
    categories: ['business', 'productivity', 'utilities'],
    lang: 'nl',
    orientation: 'portrait-primary',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/icon', sizes: '192x192', type: 'image/png' },
      { src: '/icon', sizes: '512x512', type: 'image/png' },
    ]
  }
}
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hulp met IT',
    short_name: 'Hulp met IT',
    description: 'Computerhulp aan huis door vriendelijke studenten. Rustig, geduldig en op uw tempo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2557a7',
    categories: ['business', 'productivity', 'utilities'],
    lang: 'nl',
    orientation: 'portrait-primary',
    icons: [
      { src: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ]
  }
}
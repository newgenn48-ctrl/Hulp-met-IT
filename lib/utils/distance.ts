import cities from '@/lib/data/cities.json'

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371 // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

export function getNearbyCities(
  currentSlug: string,
  maxCount: number = 5
): { name: string; slug: string; region: string; distance: number }[] {
  const current = cities.find((c) => c.slug === currentSlug)
  if (!current) return []

  return cities
    .filter((c) => c.slug !== currentSlug)
    .map((c) => ({
      name: c.name,
      slug: c.slug,
      region: c.region,
      distance: haversineDistance(
        current.coordinates.lat,
        current.coordinates.lng,
        c.coordinates.lat,
        c.coordinates.lng
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxCount)
}

// components/seo/ClarityAnalytics.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import clarity from '@microsoft/clarity'

export function ClarityAnalytics() {
  const projectId = 't9cgdd8rlz' // Your Clarity project ID
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Clarity
    if (process.env.NODE_ENV === 'production' && projectId) {
      clarity.init(projectId)
    }
  }, [projectId])

  useEffect(() => {
    // Track route changes
    if (process.env.NODE_ENV === 'production' && projectId) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
      clarity.setTag('page', url)
    }
  }, [pathname, searchParams, projectId])

  // Only run in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return null // The npm package handles script injection automatically
}

'use client'

import { useEffect } from 'react'

export function WebVitals() {
  useEffect(() => {
    // Only load Web Vitals in production
    if (process.env.NODE_ENV !== 'production') return

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function sendToAnalytics(metric: any) {
        // Send to Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          })
        }
      }

      getCLS(sendToAnalytics)
      getFID(sendToAnalytics)
      getFCP(sendToAnalytics)
      getLCP(sendToAnalytics)
      getTTFB(sendToAnalytics)
    })
  }, [])

  return null
}
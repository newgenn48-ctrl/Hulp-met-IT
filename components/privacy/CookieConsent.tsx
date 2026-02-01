'use client'

import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
    // Disable analytics if declined
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-primary-200 p-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-secondary-700">
          <p>
            We gebruiken cookies voor website functionaliteit en analytics.
            Door verder te gaan ga je akkoord met ons{' '}
            <a href="/privacy" className="text-primary-800 hover:text-primary-900 font-medium underline transition-colors">
              privacybeleid
            </a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={declineCookies}
            className="px-5 py-2.5 text-sm text-secondary-600 hover:text-secondary-800 border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
          >
            Afwijzen
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 shadow-md hover:shadow-lg transition-all"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
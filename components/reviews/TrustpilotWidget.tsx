'use client'

/**
 * Trustpilot Widget Component
 *
 * SETUP INSTRUCTIES:
 * 1. Maak een Trustpilot Business account aan op https://business.trustpilot.com
 * 2. Claim je bedrijf (Hulp met IT)
 * 3. Ga naar "Integrations" en kies "TrustBox"
 * 4. Kies een widget type (bijv. "Mini" of "Horizontal")
 * 5. Kopieer de "data-template-id" en "data-businessunit-id"
 * 6. Vervang de placeholder waardes hieronder
 * 7. Uncomment de TrustBox div
 */

import { useEffect } from 'react'
import { Star } from 'lucide-react'

export function TrustpilotWidget() {
  useEffect(() => {
    // Load Trustpilot widget script
    // Uncomment wanneer Trustpilot account is geclaimd
    /*
    const script = document.createElement('script')
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
    */
  }, [])

  return (
    <div className="trustpilot-widget-container">
      {/* PLACEHOLDER - Verwijder dit wanneer Trustpilot actief is */}
      <div className="card-3d text-center p-6">
        <div className="flex justify-center mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-6 h-6 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        <p className="text-secondary-700 text-sm">
          Reviews worden verzameld via Trustpilot
        </p>
        <p className="text-secondary-600 text-xs mt-2">
          Zodra we reviews hebben, worden deze hier automatisch getoond
        </p>
      </div>

      {/* TRUSTPILOT WIDGET - Uncomment en vul in wanneer account actief is */}
      {/*
      <div
        className="trustpilot-widget"
        data-locale="nl-NL"
        data-template-id="YOUR_TEMPLATE_ID_HERE"  // Bijv: "5419b6ffb0d04a076446a9af"
        data-businessunit-id="YOUR_BUSINESS_ID_HERE"  // Te vinden in Trustpilot dashboard
        data-style-height="150px"
        data-style-width="100%"
        data-theme="light"
        data-stars="4,5"  // Toon alleen 4 en 5 sterren reviews
      >
        <a
          href="https://nl.trustpilot.com/review/hulpmetit.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
      */}
    </div>
  )
}

/**
 * VOLGENDE STAPPEN:
 *
 * 1. Trustpilot Account Setup:
 *    - Ga naar https://business.trustpilot.com/signup
 *    - Maak account aan met info@hulpmetit.nl
 *    - Verifieer je bedrijf (KVK nummer vereist)
 *
 * 2. Reviews Verzamelen:
 *    - Automatische emails na afspraak (via Trustpilot)
 *    - Of handmatig link sturen: https://nl.trustpilot.com/evaluate/hulpmetit.nl
 *
 * 3. Widget Configureren:
 *    - In Trustpilot dashboard → Integrations → TrustBox
 *    - Kies widget type (aanbevolen: "Mini" voor sidebar, "Horizontal" voor homepage)
 *    - Kopieer de IDs en plak in deze component
 *
 * 4. Testen:
 *    - Check of widget correct laadt
 *    - Test op mobiel en desktop
 *    - Zorg dat widget responsive is
 */

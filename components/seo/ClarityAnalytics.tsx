// components/seo/ClarityAnalytics.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

export function ClarityAnalytics() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This effect will run when the route changes
    if (process.env.NODE_ENV === 'production' && projectId && typeof window.clarity === 'function') {
      const url = pathname + searchParams.toString()
      window.clarity('set', 'page', url)
    }
  }, [pathname, searchParams, projectId])

  if (process.env.NODE_ENV !== 'production' || !projectId) {
    return null
  }

  return (
    <Script
      id="clarity-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  )
}

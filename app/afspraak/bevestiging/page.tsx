import Link from 'next/link'
import Script from 'next/script'
import { Phone, ArrowRight } from 'lucide-react'

export default function BevestigingPage() {
  return (
    <>
      {/* Google Ads conversion tracking */}
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-16646363193/M6a5CMyYl_wbELmwzYE-',
              'value': 1.0,
              'currency': 'EUR'
            });
          `,
        }}
      />

      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-professional border border-secondary-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-secondary-900 mb-3">
              Afspraak aangevraagd!
            </h1>

            <p className="text-secondary-600 mb-8">
              U ontvangt binnen enkele minuten een bevestiging per e-mail.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors shadow-primary"
              >
                Terug naar Home
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31858005006"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel 085-8005006
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

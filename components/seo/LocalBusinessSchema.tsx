'use client'

export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hulp met IT",
    "description": "Vriendelijke computerhulp aan huis door ervaren IT-specialisten",
    "url": "https://hulpmetit.nl",
    "telephone": "+31-6-42827860",
    "email": "info@hulpmetit.nl",
    "priceRange": "€13.99 per kwartier",
    "serviceArea": {
      "@type": "Country",
      "name": "Nederland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computerhulp aan huis",
            "description": "Professionele computer ondersteuning aan huis"
          },
          "price": "13.99",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "13.99",
            "priceCurrency": "EUR",
            "unitCode": "C62",
            "unitText": "per kwartier"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Windows 11 overstap",
            "description": "Professionele upgrade van Windows 10 naar Windows 11"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop ondersteuning",
            "description": "Hulp met laptop problemen en onderhoud"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "247",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-6-42827860",
      "contactType": "customer service",
      "availableLanguage": "Dutch"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Hulp+met+IT"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
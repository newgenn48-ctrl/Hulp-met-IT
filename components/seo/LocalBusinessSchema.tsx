'use client'

export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hulp met IT",
    "description": "Betaalbare computerhulp aan huis door ervaren IT-specialisten in heel Nederland",
    "url": "https://hulpmetit.nl",
    "telephone": "+31-6-42827860",
    "email": "info@hulpmetit.nl",
    "priceRange": "€53,50 - €65,50",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL",
      "addressRegion": "Nederland"
    },
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
            "name": "Standaard Computerhulp aan huis",
            "description": "Professionele computerhulp aan huis - €10 voorrijkosten + €14,50 per kwartier daarna"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "53.50",
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "3",
              "unitText": "kwartier"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spoedhulp Computerhulp",
            "description": "Spoedservice binnen 24 uur - €10 voorrijkosten + €18,50 per kwartier daarna"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "65.50",
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "3",
              "unitText": "kwartier"
            }
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
            "name": "Laptop en computer ondersteuning",
            "description": "Hulp met laptop en computer problemen en onderhoud"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "22:00"
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
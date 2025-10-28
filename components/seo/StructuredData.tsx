import { CONTACT_INFO, BUSINESS_INFO, PRICING, SERVICE_HOURS } from '@/lib/constants'

interface StructuredDataProps {
  breadcrumbs?: Array<{ name: string; url: string }>
  serviceName?: string
}

export function StructuredData({ breadcrumbs = [], serviceName: _serviceName }: StructuredDataProps = {}) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.NAME,
    "alternateName": BUSINESS_INFO.FULL_NAME,
    "description": BUSINESS_INFO.DESCRIPTION,
    "url": BUSINESS_INFO.WEBSITE_URL,
    "telephone": CONTACT_INFO.PHONE,
    "email": CONTACT_INFO.EMAIL,
    "image": "https://hulpmetit.nl/og-image.webp",
    "logo": "https://hulpmetit.nl/og-image.webp",
    // Social media links worden toegevoegd zodra accounts actief zijn
    // "sameAs": [
    //   "https://www.facebook.com/hulpmetit",
    //   "https://www.instagram.com/hulpmetit",
    //   "https://nl.linkedin.com/company/hulpmetit"
    // ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Hulp Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standaard Computerhulp aan huis",
            "description": "Professionele computerhulp aan huis - €10 voorrijkosten + €14,50 per kwartier daarna",
            "serviceType": "ComputerRepair"
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
            "description": "Spoedservice binnen 24 uur - €10 voorrijkosten + €18,50 per kwartier daarna",
            "serviceType": "ComputerRepair"
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
            "name": "WiFi en internet problemen oplossen",
            "description": "WiFi en internetproblemen snel opgelost - vanaf €53,50",
            "serviceType": "NetworkSupport"
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
        }
      ]
    },
    "serviceArea": [
      {
        "@type": "Country",
        "name": "Nederland"
      },
      {
        "@type": "City",
        "name": "Amsterdam"
      },
      {
        "@type": "City",
        "name": "Rotterdam"
      },
      {
        "@type": "City",
        "name": "Den Haag"
      },
      {
        "@type": "City",
        "name": "Utrecht"
      },
      {
        "@type": "City",
        "name": "Eindhoven"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL",
      "addressRegion": "Nederland"
    },
    "priceRange": PRICING.PRICE_RANGE,
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": SERVICE_HOURS.OPENING_HOURS,
    "foundingDate": BUSINESS_INFO.FOUNDED_YEAR,
    "slogan": "Betaalbare computerhulp aan huis - vanaf €53,50 (€10 voorrijkosten + 3 x €14,50)"
  }

  // Organization schema for better brand recognition
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hulp met IT",
    "url": "https://hulpmetit.nl",
    "logo": "https://hulpmetit.nl/og-image.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-6-42827860",
      "contactType": "customer service",
      "availableLanguage": "Dutch"
    },
    // Social media links worden toegevoegd zodra accounts actief zijn
    // "sameAs": [
    //   "https://www.facebook.com/hulpmetit",
    //   "https://www.instagram.com/hulpmetit",
    //   "https://nl.linkedin.com/company/hulpmetit"
    // ]
  }

  const breadcrumbData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://hulpmetit.nl${crumb.url}`
    }))
  } : null

  // Let individual pages handle their own FAQPage schemas to avoid duplicates
  const schemas: any[] = [localBusinessData, organizationData]
  if (breadcrumbData) {
    schemas.push(breadcrumbData)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
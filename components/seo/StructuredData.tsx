import { CONTACT_INFO, BUSINESS_INFO, PRICING, SERVICE_HOURS, SEO_DEFAULTS } from '@/lib/constants'

interface StructuredDataProps {
  page?: 'home' | 'faq' | 'service'
  breadcrumbs?: Array<{ name: string; url: string }>
  serviceName?: string
}

export function StructuredData({ page = 'home', breadcrumbs = [], serviceName: _serviceName }: StructuredDataProps = {}) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.NAME,
    "alternateName": BUSINESS_INFO.FULL_NAME,
    "description": BUSINESS_INFO.DESCRIPTION,
    "url": BUSINESS_INFO.WEBSITE_URL,
    "telephone": CONTACT_INFO.PHONE,
    "email": CONTACT_INFO.EMAIL,
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
            "name": "Computerhulp aan huis",
            "description": "Betaalbare computerhulp door ervaren IT-specialisten - €13,99 per kwartier + €10 voorrijkosten",
            "serviceType": "ComputerRepair"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "13.99",
            "priceCurrency": "EUR",
            "unitText": "per kwartier",
            "additionalProperty": {
              "@type": "PropertyValue",
              "name": "Voorrijkosten",
              "value": "10.00",
              "unitCode": "EUR"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop reparatie aan huis",
            "description": "Laptop reparatie en onderhoud door specialisten - €13,99 per kwartier + €10 voorrijkosten",
            "serviceType": "LaptopRepair"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "13.99",
            "priceCurrency": "EUR",
            "unitText": "per kwartier",
            "additionalProperty": {
              "@type": "PropertyValue",
              "name": "Voorrijkosten",
              "value": "10.00",
              "unitCode": "EUR"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WiFi en internet problemen oplossen",
            "description": "WiFi en internetproblemen snel opgelost - €13,99 per kwartier + €10 voorrijkosten",
            "serviceType": "NetworkSupport"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "13.99",
            "priceCurrency": "EUR",
            "unitText": "per kwartier",
            "additionalProperty": {
              "@type": "PropertyValue",
              "name": "Voorrijkosten",
              "value": "10.00",
              "unitCode": "EUR"
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": PRICING.PRICE_RANGE,
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": SERVICE_HOURS.OPENING_HOURS,
    "foundingDate": BUSINESS_INFO.FOUNDED_YEAR,
    "slogan": "Betaalbare computerhulp aan huis - €13,99 per kwartier + €10 voorrijkosten"
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoeveel kost jullie computerhulp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze tarieven zijn €13,99 per kwartier plus €10,- eenmalige voorrijkosten. Minimale duur is 15 minuten (€23,99 totaal). We spreken altijd vooraf af wat het gaat kosten, zodat u geen verrassingen krijgt."
        }
      },
      {
        "@type": "Question", 
        "name": "Wanneer kunnen jullie langskomen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meestal kunnen we binnen 24-48 uur bij u zijn. Voor spoedhulp proberen we binnen 24 uur te komen. We bellen altijd vooraf om een afspraak te maken die u uitkomt."
        }
      },
      {
        "@type": "Question",
        "name": "Wat voor computerproblemen lossen jullie op?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle soorten! Computer installatie, problemen oplossen, onderhoud, e-mail setup, printer doet het niet, internet problemen, WhatsApp installeren, programma's uitleggen - eigenlijk alles wat met computers te maken heeft."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe weten we zeker dat jullie betrouwbaar zijn?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We hebben meer dan 10 jaar ervaring met alle soorten computerproblemen. Onze specialisten zijn ervaren en betrouwbaar. Bent u niet tevreden? Dan krijgt u uw geld terug."
        }
      },
      {
        "@type": "Question",
        "name": "Helpen jullie ook ouderen met hun computer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, heel graag! Veel van onze klanten zijn 50+. We zijn geduldig, nemen de tijd en leggen alles stap voor stap uit. We snappen dat technologie soms ingewikkeld kan zijn."
        }
      }
    ]
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

  const schemas: any[] = [localBusinessData, organizationData]
  if (page === 'faq' || page === 'home') {
    schemas.push(faqData)
  }
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
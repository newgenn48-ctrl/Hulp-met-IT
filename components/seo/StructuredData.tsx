interface StructuredDataProps {
  page?: 'home' | 'faq' | 'service'
  breadcrumbs?: Array<{ name: string; url: string }>
  serviceName?: string
}

export function StructuredData({ page = 'home', breadcrumbs = [], serviceName }: StructuredDataProps = {}) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hulp met IT",
    "alternateName": "Hulp met IT - Computerhulp aan Huis",
    "description": "Snelle en betrouwbare IT-ondersteuning aan huis door gekwalificeerde studenten in heel Nederland",
    "url": "https://hulpmetit.nl",
    "telephone": "+31642827860",
    "email": "info@hulpmetit.nl",
    "sameAs": [
      "https://www.facebook.com/hulpmetit",
      "https://www.instagram.com/hulpmetit",
      "https://nl.linkedin.com/company/hulpmetit"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Hulp Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer reparatie aan huis",
            "description": "Professionele computer reparatie door gekwalificeerde IT-specialisten",
            "serviceType": "Computer Repair"
          },
          "price": "35",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Laptop service aan huis",
            "description": "Laptop reparatie en onderhoud door experts",
            "serviceType": "Laptop Repair"
          },
          "price": "45", 
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internet en WiFi problemen oplossen",
            "description": "WiFi en internetproblemen snel en efficiënt opgelost",
            "serviceType": "Network Support"
          },
          "price": "40",
          "priceCurrency": "EUR"
        }
      ]
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Nederland"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "€35-€75",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": "Mo-Su 08:00-22:00",
    "foundingDate": "2020",
    "slogan": "Snelle IT-hulp aan huis door studenten"
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
          "text": "Een bezoek kost €41,97 voor 45 minuten (minimum) plus €10,- reiskosten. Totaal dus €51,97. Extra tijd is €13,99 per kwartier. We spreken altijd vooraf af wat het gaat kosten, zodat u geen verrassingen krijgt."
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

  const schemas: any[] = [localBusinessData]
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
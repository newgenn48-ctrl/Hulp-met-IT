import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', url: '/' },
    ...items
  ]

  // Generate schema.org structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://hulpmetit.nl${item.url}`
    }))
  }

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto container-padding py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
                )}

                {index === 0 ? (
                  <Link
                    href={item.url}
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    {item.name}
                  </Link>
                ) : index === allItems.length - 1 ? (
                  <span className="text-slate-600 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
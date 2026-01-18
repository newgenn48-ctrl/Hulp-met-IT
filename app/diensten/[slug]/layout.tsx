import { Metadata } from 'next'
import services from '@/lib/data/services.json'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const service = services.find((s) => s.slug === resolvedParams.slug) as any

  if (!service) {
    return {
      title: 'Dienst niet gevonden | Hulp met IT',
    }
  }

  const metaTitle = service.metaTitle || `${service.name} aan Huis | Hulp met IT`
  const metaDescription = service.metaDescription || `${service.description} ✓ Transparante tarieven vanaf €53,50 ✓ Binnen 48 uur geholpen ✓ 10+ jaar ervaring`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/diensten/${resolvedParams.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: service.description,
      url: `https://hulpmetit.nl/diensten/${resolvedParams.slug}`,
      type: 'article',
      locale: 'nl_NL',
      siteName: 'Hulp met IT',
    },
    other: {
      'page-type': 'service',
    },
  }
}

export default function ServiceLayout({ children }: LayoutProps) {
  return <>{children}</>
}

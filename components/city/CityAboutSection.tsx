import { ScrollReveal } from '@/components/ui/ScrollReveal'
import cities from '@/lib/data/cities.json'

interface CityAboutSectionProps {
  citySlug: string
  pageType: 'computerhulp' | 'student'
}

export function CityAboutSection({ citySlug, pageType }: CityAboutSectionProps) {
  const city = cities.find(c => c.slug === citySlug)
  if (!city) return null

  const heading = pageType === 'computerhulp'
    ? `Waarom kiezen voor computerhulp aan huis in ${city.name}?`
    : `Waarom kiezen voor een student aan huis in ${city.name}?`

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div>
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
              {pageType === 'computerhulp' ? `Computerhulp ${city.name}` : `Student aan huis ${city.name}`}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              {heading}
            </h2>
            <p className="text-secondary-600 text-lg leading-relaxed mb-4">
              {city.longDescription}
            </p>
            <p className="text-secondary-600 leading-relaxed">
              {pageType === 'computerhulp'
                ? `Wij helpen mensen in ${city.name} en omgeving, 7 dagen per week. Onze studenten kennen de buurt en leggen alles rustig en geduldig uit.`
                : `In ${city.name} staan onze studenten 7 dagen per week voor u klaar. U krijgt persoonlijke hulp van iemand die alles rustig uitlegt in gewone taal.`
              }
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

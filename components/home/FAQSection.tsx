'use client'

import { useState } from 'react'
import { Plus, Minus, Phone } from 'lucide-react'

const faqs = [
  {
    question: "Hoeveel kost jullie computerhulp?",
    answer: "Een bezoek kost €41,97 voor 45 minuten (minimum) plus €10,- reiskosten. Totaal dus €51,97. Extra tijd is €13,99 per kwartier. We spreken altijd vooraf af wat het gaat kosten, zodat u geen verrassingen krijgt."
  },
  {
    question: "Wanneer kunnen jullie langskomen?",
    answer: "Meestal kunnen we binnen 24-48 uur bij u zijn. Voor spoedhulp proberen we binnen 24 uur te komen. We bellen altijd vooraf om een afspraak te maken die u uitkomt."
  },
  {
    question: "Wat voor computerproblemen lossen jullie op?",
    answer: "Alle soorten! Computer installatie, problemen oplossen, onderhoud, e-mail setup, printer doet het niet, internet problemen, WhatsApp installeren, programma's uitleggen - eigenlijk alles wat met computers te maken heeft."
  },
  {
    question: "Moeten wij de computer naar jullie brengen?",
    answer: "Nee, wij komen bij u thuis! We nemen al onze apparatuur mee en lossen het probleem ter plekke op. U hoeft niets mee te nemen of op te halen."
  },
  {
    question: "Hoe weten we zeker dat jullie betrouwbaar zijn?",
    answer: "We hebben meer dan 10 jaar ervaring met alle soorten computerproblemen. Onze specialisten zijn ervaren en betrouwbaar. Bent u niet tevreden? Dan krijgt u uw geld terug."
  },
  {
    question: "Wat als het probleem te moeilijk is?",
    answer: "Dat komt bijna nooit voor, maar als we het echt niet kunnen oplossen betaalt u alleen de reiskosten (€10,-). We komen dan ook kosteloos terug om het alsnog op te lossen."
  },
  {
    question: "Kunnen jullie ook uitleggen hoe alles werkt?",
    answer: "Natuurlijk! We nemen alle tijd om rustig uit te leggen hoe alles werkt. We leren u graag hoe u zelf eenvoudige dingen kunt doen. Dat hoort bij onze service."
  },
  {
    question: "Helpen jullie ook ouderen met hun computer?",
    answer: "Ja, heel graag! Veel van onze klanten zijn 50+. We zijn geduldig, nemen de tijd en leggen alles stap voor stap uit. We snappen dat technologie soms ingewikkeld kan zijn."
  }
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  const handleClick = () => {
    onToggle()
  }

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <div
        onClick={handleClick}
        className="w-full py-6 px-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200 group cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-white pr-8 group-hover:text-primary-300 transition-colors">
          {question}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary-400" />
          ) : (
            <Plus className="w-4 h-4 text-primary-400" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="px-4 pb-6">
          <div className="bg-white/5 rounded-lg p-6 ml-4">
            <p className="text-lg text-neural-200 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index
    setOpenIndex(newIndex)
  }

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
            Heeft u vragen over onze service? Hier vindt u antwoorden op de meest gestelde vragen.
          </p>
          <p className="text-lg text-neural-400 max-w-3xl mx-auto mt-4">
            Klik op een vraag om het antwoord te zien.
          </p>
        </div>

        <div className="card-3d overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="card-3d max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Nog andere vragen?
            </h3>
            <p className="text-neural-300 mb-6">
              Bel ons gerust voor een vrijblijvend gesprek. We helpen u graag verder!
            </p>
            <a href="tel:+31642827860" className="btn-cta">
              <Phone className="w-5 h-5 mr-2" />
              Direct bellen: 06-42827860
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
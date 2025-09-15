'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Hoeveel kost jullie computerhulp?",
    answer: "Een bezoek kost €41,97 voor 45 minuten (minimum) plus €10,- reiskosten. Totaal dus €51,97. Extra tijd is €13,99 per kwartier."
  },
  {
    question: "Wanneer kunnen jullie langskomen?",
    answer: "Meestal kunnen we binnen 24-48 uur bij u zijn. Voor spoedhulp proberen we binnen 24 uur te komen."
  },
  {
    question: "Wat voor problemen lossen jullie op?",
    answer: "Computer installatie, problemen oplossen, onderhoud, e-mail setup, printer problemen, internet issues, WhatsApp installeren - eigenlijk alles!"
  }
]

export function SimpleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-neural-300">
            Klik op een vraag om het antwoord te zien.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-3d">
              <div 
                className="p-6 cursor-pointer"
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index)
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className="text-primary-400 text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-lg text-neutral-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
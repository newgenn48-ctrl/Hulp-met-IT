import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid - Hulp met IT',
  description: 'Privacybeleid en gegevensbescherming bij Hulp met IT. Lees hoe we omgaan met je persoonlijke gegevens.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neural-900 via-neural-800 to-primary-900">
      <section className="hero-section relative z-10">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
              Privacybeleid
            </h1>
            <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
              Jouw privacy is belangrijk voor ons. Lees hier hoe we omgaan met je persoonlijke gegevens.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Welke gegevens verzamelen we?</h2>
              <div className="text-neutral-300 space-y-3">
                <p><strong>Contactgegevens:</strong> Naam, e-mailadres, telefoonnummer en adres wanneer je een afspraak maakt.</p>
                <p><strong>Technische gegevens:</strong> IP-adres, browsertype en website gebruik voor veiligheid en verbetering.</p>
                <p><strong>Communicatie:</strong> Berichten die je ons stuurt via het contactformulier of e-mail.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Waarvoor gebruiken we je gegevens?</h2>
              <div className="text-neutral-300 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Het plannen en uitvoeren van IT-diensten</li>
                  <li>Communicatie over afspraken en diensten</li>
                  <li>Verbetering van onze website en diensten</li>
                  <li>Veiligheid en fraudepreventie</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cookies en tracking</h2>
              <div className="text-neutral-300 space-y-3">
                <p><strong>Functionele cookies:</strong> Noodzakelijk voor het functioneren van de website.</p>
                <p><strong>Analytics cookies:</strong> Google Analytics en Microsoft Clarity voor website verbetering (alleen met toestemming).</p>
                <p><strong>reCAPTCHA:</strong> Google reCAPTCHA voor bescherming tegen spam (noodzakelijk voor veiligheid).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Delen van gegevens</h2>
              <div className="text-neutral-300 space-y-3">
                <p>We delen je gegevens <strong>nooit</strong> met derden voor marketing doeleinden.</p>
                <p>Delen is alleen toegestaan voor:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Technische dienstverleners (hosting, e-mail)</li>
                  <li>Wettelijke verplichting</li>
                  <li>Bescherming van onze rechten</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Jouw rechten</h2>
              <div className="text-neutral-300 space-y-3">
                <p>Onder de AVG heb je recht op:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Inzage in je gegevens</li>
                  <li>Correctie van onjuiste gegevens</li>
                  <li>Verwijdering van je gegevens</li>
                  <li>Beperking van verwerking</li>
                  <li>Dataportabiliteit</li>
                  <li>Bezwaar tegen verwerking</li>
                </ul>
                <p className="mt-4">
                  <strong>Contact:</strong> Neem contact op via{' '}
                  <a href="mailto:info@hulpmetit.nl" className="text-primary-400 hover:underline">
                    info@hulpmetit.nl
                  </a>{' '}
                  voor het uitoefenen van je rechten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Beveiliging</h2>
              <div className="text-neutral-300 space-y-3">
                <p>We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>SSL-versleuteling voor gegevensoverdracht</li>
                  <li>Beveiligde servers en databases</li>
                  <li>Toegangscontrole en logging</li>
                  <li>Regelmatige security updates</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Bewaarperiode</h2>
              <div className="text-neutral-300 space-y-3">
                <p><strong>Klantgegevens:</strong> 7 jaar na laatste contact (voor belastingdoeleinden)</p>
                <p><strong>Website logs:</strong> 1 jaar</p>
                <p><strong>Analytics:</strong> 26 maanden (Google Analytics standaard)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact en klachten</h2>
              <div className="text-neutral-300 space-y-3">
                <p><strong>Hulp met IT</strong><br />
                E-mail: info@hulpmetit.nl<br />
                Telefoon: 06-42827860</p>

                <p>Klachten over gegevensverwerking kun je indienen bij de{' '}
                  <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener" className="text-primary-400 hover:underline">
                    Autoriteit Persoonsgegevens
                  </a>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Wijzigingen</h2>
              <div className="text-neutral-300">
                <p>We kunnen dit privacybeleid aanpassen. Wijzigingen worden op deze pagina gepubliceerd.</p>
                <p className="mt-2"><strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL')}</p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  )
}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Hulp met IT',
  description: 'Algemene voorwaarden voor IT-dienstverlening van Hulp met IT. Lees onze voorwaarden voor computerhulp aan huis.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-section relative z-10">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              Laatst gewijzigd: 28 oktober 2025
            </p>
          </div>

          <div className="card-3d space-y-8 text-secondary-700">

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">1. Bedrijfsgegevens</h2>
              <div className="space-y-2">
                <p><strong>Handelsnaam:</strong> Hulp met IT</p>
                <p><strong>KvK nummer:</strong> 91310318</p>
                <p><strong>BTW nummer:</strong> NL865613461B01</p>
                <p><strong>Telefoonnummer:</strong> +31 (0)6 42827860</p>
                <p><strong>E-mailadres:</strong> info@hulpmetit.nl</p>
                <p><strong>Website:</strong> https://hulpmetit.nl</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">2. Toepasselijkheid</h2>
              <div className="space-y-3">
                <p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, diensten en werkzaamheden van Hulp met IT.</p>
                <p>Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.</p>
                <p>Afwijkingen op deze voorwaarden zijn alleen geldig indien deze schriftelijk door Hulp met IT zijn bevestigd.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">3. Diensten</h2>
              <div className="space-y-3">
                <p>Hulp met IT biedt de volgende diensten aan:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Computerhulp aan huis</li>
                  <li>Printer installatie en hulp</li>
                  <li>Internet en WiFi installatie</li>
                  <li>E-mail configuratie</li>
                  <li>Tablet en smartphone hulp</li>
                  <li>Computer uitleg en lessen</li>
                  <li>Andere IT-gerelateerde diensten</li>
                </ul>
                <p className="mt-4">Alle diensten worden uitgevoerd met de zorgvuldigheid die van een professionele IT-dienstverlener mag worden verwacht.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">4. Prijzen en Betaling</h2>
              <div className="space-y-3">
                <p><strong>Standaard tarieven (geldig vanaf 28 oktober 2025):</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Uurtarief: €14,50 per kwartier (€58,00 per uur)</li>
                  <li>Voorrijkosten: €10,00 (eenmalig per bezoek)</li>
                  <li>Minimum afname: 3 kwartier</li>
                  <li>Spoedhulp (binnen 24 uur): €18,50 per kwartier</li>
                  <li>Alle prijzen zijn inclusief 21% BTW</li>
                </ul>

                <p className="mt-4"><strong>Betaling:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Betaling geschiedt direct na afloop van de werkzaamheden</li>
                  <li>Betaling kan contant, per pin of via bankoverschrijving</li>
                  <li>Bij bankoverschrijving dient betaling binnen 14 dagen te geschieden</li>
                  <li>Bij niet tijdige betaling kunnen incassokosten in rekening worden gebracht</li>
                </ul>

                <p className="mt-4"><strong>Kostenopgave:</strong></p>
                <p>Voor aanvang van de werkzaamheden wordt, indien mogelijk, een indicatie gegeven van de verwachte kosten. Hulp met IT zal u informeren indien blijkt dat de werkzaamheden langer duren dan geschat.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">5. Afspraken</h2>
              <div className="space-y-3">
                <p><strong>Planning:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Afspraken worden gemaakt via telefoon, e-mail of het online formulier</li>
                  <li>Hulp met IT bevestigt de afspraak schriftelijk of telefonisch</li>
                  <li>Standaard afspraken: binnen 24-48 uur</li>
                  <li>Spoedhulp: binnen 24 uur (mits beschikbaarheid)</li>
                </ul>

                <p className="mt-4"><strong>Annulering door klant:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kosteloos tot 24 uur voor de afspraak</li>
                  <li>Binnen 24 uur: €25 annuleringskosten</li>
                  <li>Bij no-show (niet thuis zonder afmelding): volledige minimumkosten (3 kwartier + voorrijkosten)</li>
                </ul>

                <p className="mt-4"><strong>Annulering door Hulp met IT:</strong></p>
                <p>Hulp met IT behoudt zich het recht voor afspraken te annuleren bij overmacht. In dat geval wordt zo spoedig mogelijk een nieuwe afspraak ingepland zonder extra kosten.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">6. Aansprakelijkheid</h2>
              <div className="space-y-3">
                <p><strong>Zorgvuldigheid:</strong></p>
                <p>Hulp met IT werkt met de grootst mogelijke zorgvuldigheid. Alle werkzaamheden worden uitgevoerd door ervaren technici.</p>

                <p className="mt-4"><strong>Beperking aansprakelijkheid:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Hulp met IT is niet aansprakelijk voor schade aan apparatuur die het gevolg is van reeds bestaande defecten</li>
                  <li>Hulp met IT is niet aansprakelijk voor dataverlies. Klanten wordt geadviseerd altijd back-ups te maken</li>
                  <li>De aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat voor de betreffende opdracht in rekening is gebracht</li>
                  <li>Hulp met IT is niet aansprakelijk voor indirecte schade, zoals gederfde omzet of winstderving</li>
                </ul>

                <p className="mt-4"><strong>Verzekering:</strong></p>
                <p>Hulp met IT beschikt over een beroepsaansprakelijkheidsverzekering.</p>

                <p className="mt-4"><strong>Data en Privacy:</strong></p>
                <p>Alle persoonlijke gegevens en bestanden worden vertrouwelijk behandeld. Hulp met IT zal nooit zonder toestemming bestanden bekijken, kopiëren of verwijderen, tenzij dit noodzakelijk is voor de uitvoering van de werkzaamheden.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">7. Garantie</h2>
              <div className="space-y-3">
                <p><strong>Tevredenheidsgarantie:</strong></p>
                <p>Als u niet tevreden bent met de geleverde dienst, kunt u dit binnen 24 uur na afloop van de werkzaamheden melden. Hulp met IT zal dan kosteloos terugkomen om het probleem alsnog op te lossen, of het volledige bedrag terugbetalen.</p>

                <p className="mt-4"><strong>Garantie op werkzaamheden:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Garantie op uitgevoerde werkzaamheden: 30 dagen</li>
                  <li>Bij hardware installaties: garantie volgens fabrikant</li>
                  <li>Garantie vervalt bij wijzigingen door derden of bij onjuist gebruik</li>
                </ul>

                <p className="mt-4"><strong>Geen garantie op:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Problemen veroorzaakt door virussen of malware na het bezoek</li>
                  <li>Problemen veroorzaakt door updates van derden (Microsoft, Apple, etc.)</li>
                  <li>Hardware defecten die niet het gevolg zijn van de uitgevoerde werkzaamheden</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">8. Herroepingsrecht</h2>
              <div className="space-y-3">
                <p>Conform de Wet Koop op Afstand heeft u als consument een herroepingsrecht van 14 dagen na het afsluiten van de overeenkomst.</p>

                <p className="mt-3"><strong>ECHTER:</strong> Bij diensten die op uw uitdrukkelijk verzoek worden gestart voordat de herroepingstermijn is verstreken, vervalt het herroepingsrecht zodra de dienst volledig is uitgevoerd.</p>

                <p className="mt-3">Door een afspraak te maken waarbij u verzoekt dat wij direct komen (binnen de herroepingstermijn van 14 dagen), stemt u ermee in dat u uw herroepingsrecht verliest zodra wij de dienst volledig hebben uitgevoerd.</p>

                <p className="mt-3"><strong>Annulering vóór uitvoering:</strong></p>
                <p>Als u de afspraak annuleert voordat wij zijn begonnen met de werkzaamheden, zie dan artikel 5 (Afspraken) voor de annuleringsvoorwaarden.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">9. Klachten</h2>
              <div className="space-y-3">
                <p><strong>Klachtenprocedure:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Klachten kunt u indienen via e-mail: info@hulpmetit.nl of telefonisch: 06-42827860</li>
                  <li>Hulp met IT reageert binnen 5 werkdagen op uw klacht</li>
                  <li>Hulp met IT streeft ernaar klachten binnen 14 dagen op te lossen</li>
                  <li>Als de klacht gegrond is, zal Hulp met IT een passende oplossing bieden</li>
                </ul>

                <p className="mt-4"><strong>Geschillenregeling:</strong></p>
                <p>Als we er samen niet uitkomen, kunt u zich wenden tot een erkende geschillencommissie of de rechter. Wij geven de voorkeur aan een minnelijke oplossing.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">10. Privacy</h2>
              <div className="space-y-3">
                <p>Voor de verwerking van uw persoons gegevens verwijzen wij naar ons <a href="/privacy" className="text-primary-600 hover:underline">privacybeleid</a>.</p>

                <p className="mt-3"><strong>Vertrouwelijkheid:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Hulp met IT behandelt alle klantgegevens vertrouwelijk</li>
                  <li>Gegevens worden niet gedeeld met derden zonder toestemming</li>
                  <li>Toegang tot uw apparaten gebeurt alleen met uw toestemming en in uw bijzijn</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">11. Intellectueel Eigendom</h2>
              <div className="space-y-3">
                <p>Alle rechten met betrekking tot geleverde software, documentatie en adviezen berusten bij Hulp met IT en/of de oorspronkelijke rechthebbenden.</p>
                <p>Het is niet toegestaan om door Hulp met IT verstrekte documenten, software of kennis te verveelvoudigen of te verspreiden zonder toestemming.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">12. Overmacht</h2>
              <div className="space-y-3">
                <p>Hulp met IT is niet gehouden tot het nakomen van enige verplichting indien zij daartoe verhinderd is als gevolg van overmacht.</p>

                <p className="mt-3"><strong>Onder overmacht wordt verstaan:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ziekte van de technicus</li>
                  <li>Extreme weersomstandigheden</li>
                  <li>Storing van vervoersmiddelen</li>
                  <li>Andere onvoorziene omstandigheden buiten de macht van Hulp met IT</li>
                </ul>

                <p className="mt-3">Bij overmacht zal zo spoedig mogelijk contact met u worden opgenomen om een nieuwe afspraak in te plannen.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">13. Toepasselijk Recht</h2>
              <div className="space-y-3">
                <p>Op deze voorwaarden is Nederlands recht van toepassing.</p>
                <p>Geschillen zullen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij partijen overeenkomen het geschil door een onafhankelijke derde te laten beslechten.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">14. Wijzigingen</h2>
              <div className="space-y-3">
                <p>Hulp met IT behoudt zich het recht voor deze algemene voorwaarden te wijzigen.</p>
                <p>Wijzigingen worden van kracht na publicatie op de website.</p>
                <p>De meest actuele versie is altijd te vinden op: <a href="https://hulpmetit.nl/algemene-voorwaarden" className="text-primary-600 hover:underline">https://hulpmetit.nl/algemene-voorwaarden</a></p>
              </div>
            </section>

            <section className="bg-primary-50 -m-6 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">Contact</h2>
              <div className="space-y-2">
                <p><strong>Voor vragen over deze algemene voorwaarden kunt u contact opnemen:</strong></p>
                <p>📞 Telefoon: <a href="tel:+31642827860" className="text-primary-600 hover:underline">06-42827860</a></p>
                <p>📧 E-mail: <a href="mailto:info@hulpmetit.nl" className="text-primary-600 hover:underline">info@hulpmetit.nl</a></p>
                <p>🌐 Website: <a href="https://hulpmetit.nl" className="text-primary-600 hover:underline">https://hulpmetit.nl</a></p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  )
}

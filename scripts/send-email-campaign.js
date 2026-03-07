#!/usr/bin/env node
/**
 * Email Campaign Script - Hulp met IT
 * Stuurt emails één voor één met throttling om spam-flags te voorkomen.
 *
 * Gebruik:
 *   node scripts/send-email-campaign.js --test     (alleen test-adressen)
 *   node scripts/send-email-campaign.js --send     (alle adressen)
 */

const nodemailer = require('nodemailer')
const fs = require('fs')
const envFile = fs.readFileSync('.env.local', 'utf8')
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) process.env[match[1].trim()] = match[2].trim()
})

// === CONFIGURATIE ===
const DELAY_BETWEEN_EMAILS_MS = 5000 // 5 seconden tussen elke mail
const BATCH_SIZE = 50 // 50 mails per batch
const BATCH_PAUSE_MS = 5 * 60 * 1000 // 5 minuten pauze tussen batches
const FROM_NAME = 'Hulp met IT'
const FROM_EMAIL = process.env.SMTP_USER
const SUBJECT = 'Wist u dat wij ook helpen met online veiligheid?'
const CSV_FILE = 'mailadressen_hulpmetit.csv'
const LOG_FILE = 'email-campaign-log.json'

// === TEST ADRESSEN ===
const TEST_EMAILS = [
  'koniana2@gmail.com',
  'info@computerhulpzh.nl',
  'newgenn48@gmail.com',
  'computerhulpzh@gmail.com'
]

// === CSV INLEZEN ===
function loadEmailsFromCSV() {
  const csv = fs.readFileSync(CSV_FILE, 'utf8')
  const lines = csv.split(/\r?\n/).slice(1) // skip header
  const emails = lines
    .map(line => line.trim().toLowerCase())
    .filter(email => {
      if (!email) return false
      if (email.startsWith('-')) return false
      if (!email.includes('@')) return false
      if (!email.includes('.')) return false
      return true
    })
  // Verwijder duplicaten
  return [...new Set(emails)]
}

// === VOORTGANG OPSLAAN (hervat na crash) ===
function loadProgress() {
  try {
    return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'))
  } catch {
    return { sent: [], failed: [], lastIndex: 0 }
  }
}

function saveProgress(progress) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(progress, null, 2))
}

// === EMAIL TEMPLATE ===
function getEmailHtml() {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Phishing bescherming - Hulp met IT</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f5f4; color: #1c1917;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2557a7 0%, #3a6fb5 100%); padding: 32px 24px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0 0 8px 0;">Hulp met IT</h1>
      <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 0;">Professionele IT-ondersteuning aan huis</p>
    </div>

    <!-- Content -->
    <div style="padding: 32px 24px;">
      <p style="font-size: 16px; line-height: 1.7; color: #292524; margin: 0 0 20px 0;">Beste klant,</p>

      <p style="font-size: 15px; line-height: 1.7; color: #44403c; margin: 0 0 20px 0;">
        Phishing wordt steeds slimmer. Oplichters sturen niet meer alleen &ldquo;vage&rdquo; mails, maar berichten die levensecht lijken&mdash;zeker als ze (deels) echte gegevens gebruiken uit datalekken. Het recente datalek bij het grote telecombedrijf Odido laat zien hoe criminelen met gelekte klantgegevens overtuigende nepberichten kunnen maken, waardoor mensen sneller klikken of gegevens invullen.
      </p>

      <!-- Waarom gevaarlijk -->
      <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; border-radius: 8px; padding: 20px; margin: 24px 0;">
        <h2 style="font-size: 16px; font-weight: 700; color: #991b1b; margin: 0 0 12px 0;">Waarom dit zo gevaarlijk is</h2>
        <ul style="margin: 0; padding: 0 0 0 20px; color: #44403c; font-size: 14px; line-height: 1.8;">
          <li>Berichten lijken persoonlijk en betrouwbaar (spearphishing).</li>
          <li>E&eacute;n klik kan leiden tot account-overname, betaalfraude of identiteitsmisbruik.</li>
          <li>Je merkt het vaak pas als er al schade is.</li>
        </ul>
      </div>

      <p style="font-size: 15px; line-height: 1.7; color: #44403c; margin: 0 0 24px 0;">
        Daarom bieden wij bij Hulp met IT een praktische aanpak: je apparaten en netwerk beter beveiligen &eacute;n jou een duidelijke methode geven om phishing te herkennen.
      </p>

      <!-- Scheidingslijn -->
      <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 28px 0;">

      <!-- Wat wij doen -->
      <h2 style="font-size: 18px; font-weight: 700; color: #1c1917; margin: 0 0 16px 0;">Wat wij voor je doen</h2>

      <div style="background-color: #f0fdf4; border-radius: 8px; padding: 20px; margin: 0 0 16px 0;">
        <p style="font-size: 15px; font-weight: 600; color: #166534; margin: 0 0 8px 0;">&#10003; Hulp met IT APK (APK-filter + beveiligingscontrole)</p>
        <p style="font-size: 14px; color: #44403c; line-height: 1.6; margin: 0;">
          We voeren een complete check uit van je laptop/pc en (indien nodig) je wifi/router: updates, malwarecontrole, veilige instellingen, wachtwoordhygi&euml;ne, back-ups en de belangrijkste beveiligingspunten.
        </p>
      </div>

      <div style="background-color: #f0fdf4; border-radius: 8px; padding: 20px; margin: 0 0 16px 0;">
        <p style="font-size: 15px; font-weight: 600; color: #166534; margin: 0 0 8px 0;">&#10003; Persoonlijke filter op maat (zelfgemaakte technische oplossing)</p>
        <p style="font-size: 14px; color: #44403c; line-height: 1.6; margin: 0;">
          We stellen een persoonlijke filter in die past bij jouw situatie&mdash;denk aan strengere blokkades voor verdachte afzenders/links, betere spam- en phishingfilters en slimme instellingen om risico&rsquo;s te verminderen.
        </p>
      </div>

      <div style="background-color: #f0fdf4; border-radius: 8px; padding: 20px; margin: 0 0 16px 0;">
        <p style="font-size: 15px; font-weight: 600; color: #166534; margin: 0 0 8px 0;">&#10003; Consultancy (duidelijk advies, zonder jargon)</p>
        <p style="font-size: 14px; color: #44403c; line-height: 1.6; margin: 0;">
          Je krijgt heldere uitleg: wat is het grootste risico bij jou, wat moet je direct aanpassen, en hoe hou je het daarna veilig.
        </p>
      </div>

      <!-- Scheidingslijn -->
      <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 28px 0;">

      <!-- Betaal nooit te veel -->
      <h2 style="font-size: 18px; font-weight: 700; color: #1c1917; margin: 0 0 12px 0;">Betaal nooit te veel &mdash; maar ook nooit te weinig voor cybersecurity</h2>
      <p style="font-size: 15px; line-height: 1.7; color: #44403c; margin: 0 0 16px 0;">
        Veel mensen betalen &oacute;f te veel voor ingewikkelde pakketten die ze niet nodig hebben, &oacute;f te weinig waardoor ze eigenlijk onvoldoende beschermd zijn.
      </p>
      <p style="font-size: 15px; line-height: 1.7; color: #44403c; margin: 0 0 24px 0;">
        Onze HBO-studenten met expertise in cybersecurity komen bij u thuis langs en kijken precies naar wat u &eacute;cht nodig hebt. Niet meer, niet minder. Persoonlijke IT-hulp aan huis, zonder onnodige kosten.
      </p>

      <!-- Scheidingslijn -->
      <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 28px 0;">

      <!-- Gratis flyer -->
      <div style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 24px 0;">
        <p style="font-size: 15px; font-weight: 700; color: #92400e; margin: 0 0 8px 0;">&#127873; Gratis bij een afspraak: onze informatieflyer &ldquo;Phishing altijd een stapje voor&rdquo; met praktische checklist en stappenplan.</p>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin: 32px 0;">
        <p style="font-size: 15px; color: #44403c; margin: 0 0 16px 0; font-weight: 600;">Wil je een APK + beveiligingscheck plannen?</p>
        <p style="font-size: 14px; color: #57534e; margin: 0 0 20px 0;">
          Reply met je voorkeursdag/tijd en om welk apparaat het gaat (pc/laptop, telefoon/tablet of wifi/router). Dan plannen we snel een moment.
        </p>
        <a href="mailto:info@hulpmetit.nl?subject=APK%20%2B%20beveiligingscheck%20plannen" style="display: inline-block; background: linear-gradient(135deg, #e8960e, #d97706); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">
          Afspraak plannen via e-mail
        </a>
        <p style="margin: 12px 0 0 0;">
          <a href="tel:+31858005006" style="color: #3a6fb5; font-size: 14px; text-decoration: none; font-weight: 500;">
            Of bel direct: 085-8005006
          </a>
        </p>
      </div>

      <!-- Afsluiting -->
      <p style="font-size: 15px; line-height: 1.7; color: #44403c; margin: 24px 0 0 0;">Met vriendelijke groet,</p>
      <p style="font-size: 15px; font-weight: 600; color: #1c1917; margin: 4px 0 0 0;">Hulp met IT</p>
      <p style="font-size: 14px; color: #44403c; margin: 4px 0 0 0;">&#128222; 085-8005006</p>
      <p style="font-size: 14px; color: #44403c; margin: 2px 0 0 0;">&#9993;&#65039; info@hulpmetit.nl</p>
      <p style="font-size: 14px; color: #44403c; margin: 2px 0 0 0;">&#127760; hulpmetit.nl</p>
    </div>

    <!-- Footer -->
    <div style="background-color: #1c1917; padding: 24px; text-align: center;">
      <p style="color: #d6d3d1; font-size: 14px; margin: 0 0 4px 0; font-weight: 600;">Hulp met IT</p>
      <p style="color: #a8a29e; font-size: 13px; margin: 0 0 4px 0;">KvK: 91310318 &nbsp;|&nbsp; BTW: NL865613461B01</p>
      <p style="color: #a8a29e; font-size: 13px; margin: 0 0 16px 0;">&#128222; 085-8005006 &nbsp;|&nbsp; &#9993;&#65039; info@hulpmetit.nl &nbsp;|&nbsp; &#127760; hulpmetit.nl</p>
      <p style="color: #78716c; font-size: 11px; margin: 0;">
        Je ontvangt deze mail omdat je eerder contact hebt gehad met Hulp met IT.<br>
        Wil je geen mails meer ontvangen? <a href="mailto:info@hulpmetit.nl?subject=Uitschrijven" style="color: #a8a29e; text-decoration: underline;">Schrijf je hier uit</a>.
      </p>
    </div>
  </div>
</body>
</html>`
}

// === SMTP SETUP ===
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// === VERZEND LOGICA ===
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function sendCampaignEmail(to) {
  const mailOptions = {
    from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
    to,
    subject: SUBJECT,
    html: getEmailHtml(),
    replyTo: FROM_EMAIL,
    headers: {
      'List-Unsubscribe': `<mailto:info@hulpmetit.nl?subject=Uitschrijven>`,
      'X-Mailer': 'Hulp met IT Nieuwsbrief'
    }
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log(`  ✅ ${to} — verzonden (${result.messageId})`)
    return { success: true, email: to }
  } catch (error) {
    const isQuotaError = error.message.includes('Exceeding quota') || error.message.includes('421 4.7.0')
    console.log(`  ❌ ${to} — FOUT: ${error.message}`)
    return { success: false, email: to, error: error.message, quota: isQuotaError }
  }
}

async function main() {
  const mode = process.argv[2]

  if (!mode || (mode !== '--test' && mode !== '--send' && mode !== '--resume')) {
    console.log('Gebruik:')
    console.log('  node scripts/send-email-campaign.js --test     (4 test-adressen)')
    console.log('  node scripts/send-email-campaign.js --send     (start productie-verzending)')
    console.log('  node scripts/send-email-campaign.js --resume   (hervat na onderbreking)')
    process.exit(1)
  }

  let emails
  let startIndex = 0

  if (mode === '--test') {
    emails = TEST_EMAILS
  } else {
    emails = loadEmailsFromCSV()
    if (mode === '--resume') {
      const progress = loadProgress()
      const alreadySent = new Set(progress.sent)
      // Alleen permanent mislukte overslaan (niet quota-fouten)
      const permanentFailed = new Set(progress.failed
        .filter(f => !f.error.includes('Exceeding quota') && !f.error.includes('421 4.7.0'))
        .map(f => f.email))
      // Verwijder quota-fouten uit de log zodat ze opnieuw geprobeerd worden
      progress.failed = progress.failed.filter(f => !f.error.includes('Exceeding quota') && !f.error.includes('421 4.7.0'))
      saveProgress(progress)
      emails = emails.filter(e => !alreadySent.has(e) && !permanentFailed.has(e))
      console.log(`\n🔄 Hervatting: ${progress.sent.length} al verzonden, ${progress.failed.length} permanent mislukt, ${emails.length} resterend`)
    }
  }

  const totalBatches = Math.ceil(emails.length / BATCH_SIZE)
  const estimatedMinutes = Math.round((emails.length * DELAY_BETWEEN_EMAILS_MS / 1000 / 60) + ((totalBatches - 1) * BATCH_PAUSE_MS / 1000 / 60))

  console.log(`\n📧 Email Campagne - Hulp met IT`)
  console.log(`   Modus: ${mode === '--test' ? 'TEST' : 'PRODUCTIE'}`)
  console.log(`   Aantal: ${emails.length} ontvangers`)
  console.log(`   Batches: ${totalBatches} x ${BATCH_SIZE} mails`)
  console.log(`   Delay: ${DELAY_BETWEEN_EMAILS_MS / 1000}s tussen mails, ${BATCH_PAUSE_MS / 1000 / 60}min tussen batches`)
  console.log(`   Geschatte duur: ~${estimatedMinutes} minuten`)
  console.log(`   Onderwerp: ${SUBJECT}`)
  console.log(`   Van: ${FROM_NAME} <${FROM_EMAIL}>\n`)

  // Verify SMTP
  try {
    await transporter.verify()
    console.log('✅ SMTP verbinding OK\n')
  } catch (error) {
    console.error('❌ SMTP verbinding mislukt:', error.message)
    process.exit(1)
  }

  const progress = mode === '--resume' ? loadProgress() : { sent: [], failed: [], lastIndex: 0 }
  let batchCount = 0

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i]
    const globalIndex = i + 1

    // Batch pauze
    if (i > 0 && i % BATCH_SIZE === 0) {
      batchCount++
      const pauseMin = BATCH_PAUSE_MS / 1000 / 60
      console.log(`\n⏸️  Batch ${batchCount} klaar (${BATCH_SIZE} mails). Pauze van ${pauseMin} minuten...`)
      console.log(`   Voortgang: ${progress.sent.length} verzonden, ${progress.failed.length} mislukt, ${emails.length - i} resterend`)
      saveProgress(progress)
      await sleep(BATCH_PAUSE_MS)
      console.log(`▶️  Batch ${batchCount + 1} gestart\n`)
      // Herconnect SMTP na pauze
      try {
        await transporter.verify()
      } catch {
        console.log('   ⚠️ SMTP herverbinden...')
        await sleep(5000)
        await transporter.verify()
      }
    }

    console.log(`[${globalIndex}/${emails.length}] Verzenden naar ${email}...`)

    const result = await sendCampaignEmail(email)
    if (result.success) {
      progress.sent.push(email)
    } else if (result.quota) {
      // Quota bereikt: sla op en stop
      console.log(`\n⛔ SMTP quota bereikt (max 200 mails per 24 uur). Gestopt.`)
      console.log(`   Verzonden: ${progress.sent.length}, Resterend: ${emails.length - i}`)
      console.log(`   Hervat morgen met: node scripts/send-email-campaign.js --resume`)
      saveProgress(progress)
      process.exit(0)
    } else {
      progress.failed.push({ email, error: result.error })
    }
    progress.lastIndex = i

    // Sla voortgang op elke 10 mails
    if (i % 10 === 0) saveProgress(progress)

    // Throttle (niet na de laatste)
    if (i < emails.length - 1) {
      await sleep(DELAY_BETWEEN_EMAILS_MS)
    }
  }

  // Bewaar eindresultaat
  saveProgress(progress)

  console.log(`\n📊 Eindresultaat:`)
  console.log(`   ✅ Verzonden: ${progress.sent.length}`)
  console.log(`   ❌ Mislukt: ${progress.failed.length}`)
  if (progress.failed.length > 0) {
    console.log(`   Mislukte adressen:`)
    progress.failed.forEach(e => console.log(`      - ${e.email}: ${e.error}`))
  }
  console.log(`\n   Log opgeslagen in ${LOG_FILE}`)
  console.log()
}

main().catch(console.error)

# reCAPTCHA Enterprise Setup Guide

## 🔒 reCAPTCHA Enterprise Implementation

Je website gebruikt nu **Google reCAPTCHA Enterprise** voor geavanceerde bot bescherming. Dit biedt betere beveiliging dan standaard reCAPTCHA v2 met risk analysis en actie-gebaseerde verificatie.

## 📋 Setup Stappen

### 1. Google Cloud Project Setup

1. **Ga naar Google Cloud Console**: https://console.cloud.google.com/
2. **Maak een nieuw project** of selecteer een bestaand project
3. **Activeer reCAPTCHA Enterprise API**:
   - Ga naar "APIs & Services" → "Library"
   - Zoek naar "reCAPTCHA Enterprise API"
   - Klik "Enable"

### 2. reCAPTCHA Site Key Maken

1. **Ga naar reCAPTCHA Enterprise Console**: https://console.cloud.google.com/security/recaptcha
2. **Klik "CREATE KEY"**
3. **Configureer je site key**:
   - **Display name**: "Hulp met IT Appointment Form"
   - **Platform type**: "Website"
   - **Domains**: Voeg je domeinen toe:
     - `hulpmetit.nl`
     - `www.hulpmetit.nl`
     - `localhost` (voor development)
   - **Integration type**: "Score-based (recommended)"
   - **Actions**: Voeg deze acties toe:
     - `APPOINTMENT_SUBMIT`
     - `LOGIN` (optioneel voor toekomstige functies)

### 3. API Key Genereren

1. **Ga naar "APIs & Services" → "Credentials"**
2. **Klik "CREATE CREDENTIALS" → "API Key"**
3. **Kopieer de gegenereerde API key**
4. **Optioneel**: Restrict de API key tot reCAPTCHA Enterprise API voor extra beveiliging

### 4. Environment Variabelen Configureren

Voeg deze variabelen toe aan je `.env.local` bestand:

```bash
# reCAPTCHA Enterprise Configuration
NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY=6LcAoMsrAAAAAPXVkbbuFWkT_E7nCw-8zNT6Se8W
RECAPTCHA_ENTERPRISE_PROJECT_ID=your-google-cloud-project-id
RECAPTCHA_ENTERPRISE_API_KEY=your-google-cloud-api-key

# Fallback reCAPTCHA v2 (optioneel)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_v2_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_v2_secret_key
```

**Vervang de volgende waarden**:
- `your-google-cloud-project-id`: Je Google Cloud Project ID
- `your-google-cloud-api-key`: De API key die je hebt gegenereerd
- Site key is al correct ingesteld: `6LcAoMsrAAAAAPXVkbbuFWkT_E7nCw-8zNT6Se8W`

## 🔧 Technische Details

### Hoe het Werkt

1. **Script Loading**: reCAPTCHA Enterprise script wordt geladen via `next/script`
2. **Invisible Execution**: Bij form submit wordt automatisch een token gegenereerd
3. **Server Verificatie**: Token wordt geverifieerd met Google's Assessment API
4. **Risk Analysis**: Google analyseert het risico en geeft een score (0.0-1.0)
5. **Action Verification**: Controleert of de actie overeenkomt met `APPOINTMENT_SUBMIT`

### Score Interpretatie

- **0.9 - 1.0**: Zeer waarschijnlijk een echte gebruiker
- **0.7 - 0.9**: Waarschijnlijk een echte gebruiker
- **0.3 - 0.7**: Verdacht, mogelijk een bot
- **0.0 - 0.3**: Zeer waarschijnlijk een bot

**Huidige drempelwaarde**: 0.5 (configureerbaar in `lib/validation.ts`)

### Fallback Mechanisme

Het systeem heeft een ingebouwd fallback mechanisme:

1. **Eerste keuze**: reCAPTCHA Enterprise (als API keys geconfigureerd zijn)
2. **Fallback**: reCAPTCHA v2 (als Enterprise niet beschikbaar is)
3. **Development**: Geen verificatie in development mode

## 📊 Monitoring & Analytics

### Security Logging

Alle reCAPTCHA Enterprise assessments worden gelogd met:

```json
{
  "event": "RECAPTCHA_ENTERPRISE_ASSESSMENT",
  "details": {
    "valid": true,
    "action": "APPOINTMENT_SUBMIT",
    "expectedAction": "APPOINTMENT_SUBMIT",
    "actionMatches": true,
    "score": 0.8,
    "passed": true
  },
  "ip": "192.168.1.1",
  "timestamp": "2025-01-16T10:30:00.000Z"
}
```

### Google Cloud Monitoring

In Google Cloud Console kun je:

- **Assessment Volume** bekijken
- **Score Distribution** analyseren
- **Attack Patterns** identificeren
- **Custom Alerts** instellen

## 🚀 Testing

### Development Testing

In development mode wordt reCAPTCHA Enterprise automatisch overgeslagen voor eenvoudiger testen.

### Production Testing

1. **Deploy naar staging/productie**
2. **Test het formulier**
3. **Controleer logs** voor RECAPTCHA_ENTERPRISE_ASSESSMENT events
4. **Verificeer in Google Cloud Console** dat assessments verschijnen

### Manual Testing

```bash
# Test API endpoint met curl
curl -X POST http://localhost:3000/api/appointment \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User",...,"recaptchaToken":"test-token"}'
```

## 🔍 Troubleshooting

### Veel Voorkomende Problemen

#### 1. "reCAPTCHA Enterprise niet geladen"
- **Oorzaak**: Script loading mislukt
- **Oplossing**: Controleer internet verbinding en browser console

#### 2. "reCAPTCHA Enterprise verificatie mislukt"
- **Oorzaak**: Onjuiste API keys of project configuratie
- **Oplossing**: Controleer environment variabelen en Google Cloud setup

#### 3. Lage reCAPTCHA Scores
- **Oorzaak**: Verdachte gebruikersgedrag of bot traffic
- **Oplossing**: Analyseer traffic patterns in Google Cloud Console

#### 4. "Project niet gevonden" fout
- **Oorzaak**: Onjuiste PROJECT_ID
- **Oplossing**: Controleer Google Cloud Project ID in environment variabelen

### Debug Commands

```bash
# Check environment variabelen
echo $RECAPTCHA_ENTERPRISE_PROJECT_ID
echo $RECAPTCHA_ENTERPRISE_API_KEY

# Test TypeScript compilation
npm run type-check

# Test linting
npm run lint

# Test build process
npm run build
```

## 📚 Bronnen

- [reCAPTCHA Enterprise Documentation](https://cloud.google.com/recaptcha-enterprise/docs)
- [reCAPTCHA Enterprise Console](https://console.cloud.google.com/security/recaptcha)
- [Google Cloud Console](https://console.cloud.google.com/)
- [reCAPTCHA Best Practices](https://developers.google.com/recaptcha/docs/v3)

## 💡 Tips voor Optimale Beveiliging

1. **Monitor Scores**: Houd scores bij en pas drempelwaarden aan indien nodig
2. **Multiple Actions**: Gebruik verschillende acties voor verschillende formulieren
3. **Rate Limiting**: Combineer met bestaande rate limiting voor extra bescherming
4. **Log Analysis**: Analyseer logs regelmatig voor aanvalspatronen
5. **Regular Updates**: Houd Google Cloud configuratie up-to-date

---

**Status**: ✅ Volledig geïmplementeerd en production-ready!
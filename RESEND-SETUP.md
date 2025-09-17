# 📧 Resend Email Setup - Hulp met IT

## 🚨 URGENT: Email Fix Gedeployed

Je website draait nu op **Resend** voor email delivery. Dit lost definitief de Gmail DKIM problemen op!

## ⚡ Quick Setup (5 minuten)

### 1. **Maak Resend Account**
- Ga naar: https://resend.com
- Sign up met je email
- Verify je account

### 2. **Voeg Domain Toe**
- In Resend dashboard: **Domains** → **Add Domain**
- Voer in: `hulpmetit.nl`
- Klik **Add Domain**

### 3. **DNS Records Instellen**
Resend toont je DNS records. Voeg deze toe in **TransIP DNS**:

```
Type: TXT
Name: resend._domainkey.hulpmetit.nl
Value: [Lange string die Resend geeft]

Type: MX
Name: hulpmetit.nl
Value: feedback-smtp.eu-west-1.amazonses.com
Priority: 10
```

### 4. **API Key Maken**
- In Resend: **API Keys** → **Create API Key**
- Name: `Hulp met IT Production`
- Permission: **Send access**
- Copy de key (begint met `re_`)

### 5. **Vercel Environment Variabele**
- Ga naar Vercel dashboard
- Open je project **hulpmetit-nextgen**
- Settings → **Environment Variables**
- Add new:
  ```
  Name: RESEND_API_KEY
  Value: re_jouw_echte_api_key_hier
  Environment: Production
  ```
- Save en **redeploy**

## ✅ Verification

1. **Domain Status**: In Resend dashboard moet domain status **"Verified"** zijn
2. **Test**: Vul afspraak formulier in op je website
3. **Result**:
   - ✅ Klant krijgt bevestigingsmail
   - ✅ Jij krijgt admin notification
   - ✅ Geen bounced emails meer

## 📊 Resend Benefits

- **3,000 emails/maand gratis**
- **99.9% deliverability** (Gmail, Outlook, etc.)
- **Real-time analytics**
- **Automatic DKIM/SPF** setup
- **No bounced emails**

## 🔧 Troubleshooting

**Domain niet verified?**
- Check DNS propagation (kan 24u duren)
- Verify DNS records in TransIP

**Emails nog niet werkend?**
- Check Vercel environment variable
- Redeploy project na API key toevoegen

**Need help?**
- Resend docs: https://resend.com/docs
- Check Vercel logs voor errors

---

**Status**: 🟡 Wachten op API key configuratie
**ETA**: ~2-5 minuten na API key setup

*Setup guide gegenereerd: ${new Date().toLocaleDateString('nl-NL')}*
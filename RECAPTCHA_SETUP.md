# reCAPTCHA v3 Setup Guide

## 🔒 reCAPTCHA v3 Implementation

Je website gebruikt nu **Google reCAPTCHA v3** voor geavanceerde bot bescherming met invisible user experience.

## 📋 Configuratie Details

### **Site Key (Public)**
```
6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy
```

### **Secret Key (Server)**
```
6Lcd3csrAAAAAKpQ7D4xdPl6e0qXCFhdUt9tg2a2
```

## 🔧 Environment Variables

Voeg deze variabelen toe aan je `.env.local` bestand:

```bash
# reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy
RECAPTCHA_SECRET_KEY=6Lcd3csrAAAAAKpQ7D4xdPl6e0qXCFhdUt9tg2a2
```

## 🚀 Technische Implementatie

### **Frontend (Invisible)**
- **Script Loading**: `https://www.google.com/recaptcha/api.js?render=SITE_KEY`
- **Execution**: Automatisch uitgevoerd bij form submit
- **Action**: `APPOINTMENT_SUBMIT` voor appointment formulier
- **User Experience**: Volledig invisible, geen user interaction

### **Backend Verificatie**
- **API Endpoint**: `https://www.google.com/recaptcha/api/siteverify`
- **Method**: POST met secret key en token
- **Score Analysis**: reCAPTCHA v3 geeft score tussen 0.0-1.0
- **Threshold**: 0.5 (configureerbaar)

### **Score Interpretatie**
- **0.9 - 1.0**: Zeer waarschijnlijk een echte gebruiker ✅
- **0.7 - 0.9**: Waarschijnlijk een echte gebruiker ✅
- **0.5 - 0.7**: Neutraal gebied (huidige threshold) ⚠️
- **0.3 - 0.5**: Verdacht, mogelijk een bot ❌
- **0.0 - 0.3**: Zeer waarschijnlijk een bot ❌

## 🔄 Hoe het Werkt

### **1. Script Loading**
```html
<script src="https://www.google.com/recaptcha/api.js?render=6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy"></script>
```

### **2. Token Generation**
```javascript
const token = await grecaptcha.execute('6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy', {
  action: 'APPOINTMENT_SUBMIT'
})
```

### **3. Server Verification**
```javascript
const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `secret=6Lcd3csrAAAAAKpQ7D4xdPl6e0qXCFhdUt9tg2a2&response=${token}`
})
```

### **4. Score Analysis**
```javascript
const data = await response.json()
const score = data.score || 0
const isValid = data.success && score >= 0.5
```

## 📊 Monitoring & Logging

### **Security Events**
Alle reCAPTCHA verificaties worden gelogd:

```json
{
  "event": "RECAPTCHA_VERIFICATION_SUCCESS",
  "details": {
    "score": 0.8,
    "action": "APPOINTMENT_SUBMIT",
    "success": true,
    "hostname": "hulpmetit.nl"
  },
  "ip": "192.168.1.1",
  "timestamp": "2025-01-16T10:30:00.000Z"
}
```

### **Google Admin Console**
- **URL**: https://www.google.com/recaptcha/admin
- **Site Overview**: Traffic volume en score verdeling
- **Alerts**: Configureer waarschuwingen voor verdachte activiteit

## 🧪 Testing

### **Development Mode**
- reCAPTCHA wordt **automatisch overgeslagen** in development
- `NODE_ENV !== 'production'` = geen verificatie vereist

### **Production Testing**
1. Deploy naar staging/productie
2. Test appointment formulier
3. Controleer browser console voor reCAPTCHA token
4. Verificeer server logs voor RECAPTCHA_VERIFICATION events

### **Manual Testing**
```bash
# Test API endpoint
curl -X POST https://hulpmetit.nl/api/appointment \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "06-12345678",
    "address": "Test 123",
    "postalCode": "1234 AB",
    "city": "Amsterdam",
    "serviceType": "computerhulp",
    "urgency": "normal",
    "problemDescription": "Test probleem voor reCAPTCHA",
    "recaptchaToken": "test-token-from-frontend"
  }'
```

## 🛠️ Troubleshooting

### **Veel Voorkomende Problemen**

#### 1. "reCAPTCHA niet geladen"
**Symptomen**: Console error over grecaptcha undefined
**Oplossingen**:
- Controleer internet verbinding
- Verificeer dat script correct ingeladen wordt
- Check browser ad-blockers

#### 2. "reCAPTCHA verificatie mislukt"
**Symptomen**: Server retourneert 400 error
**Oplossingen**:
- Controleer RECAPTCHA_SECRET_KEY in environment
- Verificeer dat site key overeenkomt
- Check server logs voor details

#### 3. Lage reCAPTCHA Scores
**Symptomen**: Legitieme gebruikers worden geblokkeerd
**Oplossingen**:
- Verlaag threshold in `lib/validation.ts`
- Analyseer traffic patterns in Google Admin
- Overweeg verschillende thresholds per action

#### 4. Site Key Mismatch
**Symptomen**: "Invalid site key" error
**Oplossingen**:
- Verificeer dat domain toegevoegd is in Google Admin
- Check NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable
- Ensure localhost toegevoegd voor development

### **Debug Commands**
```bash
# Check environment variables
echo $NEXT_PUBLIC_RECAPTCHA_SITE_KEY
echo $RECAPTCHA_SECRET_KEY

# Test compilation
npm run type-check
npm run lint
npm run build

# Check reCAPTCHA loading in browser
# Open Developer Tools → Console
# Type: window.grecaptcha
```

## ⚙️ Configuratie Aanpassingen

### **Score Threshold Wijzigen**
Bestand: `lib/validation.ts`
```typescript
// Huidige threshold: 0.5
const scoreThreshold = 0.5

// Voor striktere beveiliging:
const scoreThreshold = 0.7

// Voor minder strikt (meer false positives):
const scoreThreshold = 0.3
```

### **Verschillende Actions Toevoegen**
```typescript
// In formulier componenten
const token = await executeRecaptcha('LOGIN')        // Voor login
const token = await executeRecaptcha('CONTACT')      // Voor contact form
const token = await executeRecaptcha('NEWSLETTER')   // Voor newsletter signup
```

### **Custom Domein Toevoegen**
1. Ga naar https://www.google.com/recaptcha/admin
2. Selecteer je site key
3. Voeg nieuwe domain toe onder "Domains"

## 📚 Resources

- **reCAPTCHA Admin Console**: https://www.google.com/recaptcha/admin
- **reCAPTCHA Documentation**: https://developers.google.com/recaptcha/docs/v3
- **Score Interpretation Guide**: https://developers.google.com/recaptcha/docs/v3#interpreting_the_score
- **Best Practices**: https://developers.google.com/recaptcha/docs/v3#best_practices

## ✅ Implementation Status

- ✅ **reCAPTCHA v3 Script Loading**
- ✅ **Invisible Token Generation**
- ✅ **Server-side Verification**
- ✅ **Score-based Analysis**
- ✅ **Security Logging**
- ✅ **Error Handling**
- ✅ **Development Mode Bypass**
- ✅ **Production Ready**

---

**Status**: 🚀 **Volledig geïmplementeerd en production-ready!**

Je nieuwe reCAPTCHA credentials zijn geactiveerd en het systeem gebruikt nu:
- **Site Key**: `6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy`
- **Secret Key**: `6Lcd3csrAAAAAKpQ7D4xdPl6e0qXCFhdUt9tg2a2`
# 🚀 Vercel Deployment Guide voor Hulp met IT

## 📋 Pre-deployment Checklist

### ✅ Environment Variables (Vercel Dashboard)
Voeg deze variabelen toe in je Vercel project settings:

**📧 Email Configuration (REQUIRED)**
```
SMTP_HOST=smtp.transip.email
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@hulpmetit.nl
SMTP_PASS=[JE_VEILIGE_SMTP_WACHTWOORD]
```

**🔒 reCAPTCHA Configuration (REQUIRED)**
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=[JE_RECAPTCHA_SITE_KEY]
RECAPTCHA_SECRET_KEY=[JE_RECAPTCHA_SECRET_KEY]
```

**📊 Analytics (OPTIONAL)**
```
NEXT_PUBLIC_CLARITY_PROJECT_ID=t9cgdd8rlz
NEXT_PUBLIC_GTM_ID=GTM-WWZVT98T
```

**🔧 Environment**
```
NODE_ENV=production
```

### 🔐 Security Features Geïmplementeerd

✅ **Content Security Policy (CSP)**
- Strict script execution policies
- Trusted domains voor Google services
- XSS protection geactiveerd

✅ **Security Headers**
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: restrictive permissions
- Strict-Transport-Security: HSTS enabled

✅ **API Security**
- Rate limiting geïmplementeerd
- Input sanitization met DOMPurify
- CSRF protection
- Email injection prevention

### ⚡ Performance Optimizations

✅ **Bundle Size Optimizations**
- Dynamic imports voor formulieren
- Code splitting geactiveerd
- Bundle analyzer beschikbaar

✅ **Image Optimizations**
- WebP/AVIF support
- Optimized caching headers
- Responsive image sizes

✅ **Core Web Vitals Monitoring**
- Real-time Web Vitals tracking
- Google Analytics integration

## 🚦 Deployment Steps

1. **Push naar GitHub**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Vercel Dashboard Setup**
   - Connect GitHub repository
   - Configure environment variables
   - Set build command: `npm run build`
   - Set output directory: `.next`

3. **Domain Configuration**
   - Add hulpmetit.nl domain
   - Configure DNS records
   - Enable SSL (automatic)

4. **Verification**
   - Test appointment form
   - Verify email delivery
   - Check reCAPTCHA functionality
   - Run security headers test

## 🔧 Post-Deployment

### Security Monitoring
- Monitor Vercel function logs
- Check email delivery rates
- Monitor reCAPTCHA scores

### Performance Monitoring
- Core Web Vitals dashboard
- Bundle size monitoring
- API response times

### Analytics Setup
- Google Tag Manager verification (GTM-WWZVT98T)
- Google Analytics via GTM
- Microsoft Clarity integration (t9cgdd8rlz)
- Search Console setup

## 🚨 Security Reminders

⚠️ **BELANGRIJK:**
- SMTP_PASS moet veilig worden bewaard
- RECAPTCHA_SECRET_KEY nooit delen
- Regelmatig security headers testen
- Monitor voor DDoS attacks

## 📞 Support Contact

Voor deployment issues:
- Check Vercel function logs
- Verify environment variables
- Test local build first: `npm run build`
# 📱 Social Media Setup Guide - Hulp met IT

## 🎯 Aanbevolen Social Media Strategie

### 👥 **Facebook Business** (Prioriteit: Hoog)
**Waarom belangrijk voor IT services:**
- Veel 50+ gebruikers (jouw doelgroep!)
- Lokale business visibility
- Customer reviews & testimonials
- Event announcements
- Direct messaging voor vragen

**Setup stappen:**
1. Maak Facebook Business pagina: `facebook.com/hulpmetit`
2. Vul complete business info in
3. Upload profielfoto en coverfoto
4. Post opening hours & contact info
5. Enable reviews & messaging

### 📸 **Instagram Business** (Prioriteit: Gemiddeld)
**Content ideeën:**
- Voor/na foto's van computer setups
- Tips & tricks voor computer gebruik
- Team foto's (vertrouwen opbouwen)
- Customer testimonials
- Behind-the-scenes content

**Setup stappen:**
1. Maak Instagram Business account: `@hulpmetit`
2. Link aan Facebook pagina
3. Add contact button & business info
4. Stories highlights voor services

### 💼 **LinkedIn Company** (Prioriteit: Laag-Gemiddeld)
**Voordelen:**
- Professional networking
- B2B opportunities
- Employee recruitment
- Industry authority

**Setup stappen:**
1. Maak LinkedIn Company page: `linkedin.com/company/hulpmetit`
2. Professional company description
3. Regelmatige updates over IT trends
4. Network met lokale businesses

## 🔧 Technical Implementation

### ✅ **Wanneer je accounts hebt aangemaakt:**

1. **Update StructuredData.tsx** (regel 17-22 en 167-172):
```typescript
"sameAs": [
  "https://www.facebook.com/hulpmetit",
  "https://www.instagram.com/hulpmetit",
  "https://nl.linkedin.com/company/hulpmetit"
]
```

2. **Vercel Environment Variables toevoegen:**
```
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/hulpmetit
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/hulpmetit
NEXT_PUBLIC_LINKEDIN_URL=https://nl.linkedin.com/company/hulpmetit
```

3. **Footer links updaten** (als gewenst):
- Voeg social media icons toe
- Link naar je nieuwe accounts

## 📊 Content Strategy voor IT Business

### **Facebook Content (2-3x per week):**
- IT tips voor senioren
- Customer success stories
- Seasonal computer maintenance tips
- Local community engagement
- Service announcements

### **Instagram Content (1-2x per week):**
- Quick IT tips (carousel posts)
- Before/after computer cleanups
- Team introductions
- Customer testimonials (video)
- Stories: daily tips & BTS

### **LinkedIn Content (1x per week):**
- Industry insights
- Digital transformation for seniors
- Professional IT advice
- Company updates
- Networking with local businesses

## 🎨 Brand Guidelines

### **Visual Identity:**
- Use existing website colors (primary blue)
- Professional but friendly tone
- Consistent logo usage
- High-quality photos only

### **Tone of Voice:**
- Vriendelijk en geduldig
- Niet technisch jargon
- Focus op helpfulness
- Empathy voor computer struggles

### **Content Themes:**
1. **Educational** - IT tips & tricks
2. **Social Proof** - Customer reviews
3. **Behind-the-scenes** - Team & process
4. **Community** - Local engagement
5. **Services** - What you offer

## ⏰ Posting Schedule

### **Optimal Times (Nederlandse tijden):**
- **Facebook:** Di/Do/Za 19:00-21:00
- **Instagram:** Wo/Vr/Zo 18:00-20:00
- **LinkedIn:** Di/Do 09:00-11:00

### **Content Calendar Ideas:**
- **Maandag:** Motivational Monday (IT tips)
- **Woensdag:** Wijsheid Wednesday (senior-friendly tips)
- **Vrijdag:** Feature Friday (service spotlight)
- **Weekend:** Community engagement

## 📈 Success Metrics

### **KPIs to Track:**
- Follower growth
- Engagement rate (likes, comments, shares)
- Click-through to website
- Lead generation (appointment requests)
- Customer reviews & ratings

### **Tools voor Management:**
- Meta Business Suite (Facebook + Instagram)
- Later of Hootsuite voor scheduling
- Canva voor graphics
- Local hashtag research

## 🚀 Quick Launch Checklist

**Week 1:**
- [ ] Maak Facebook Business pagina
- [ ] Complete profile setup
- [ ] First 3 posts (introduction, services, contact)

**Week 2:**
- [ ] Instagram account setup
- [ ] Cross-promote tussen platforms
- [ ] Eerste Stories & Highlights

**Week 3:**
- [ ] LinkedIn Company page
- [ ] Website integration (social links)
- [ ] Structured data update

**Week 4:**
- [ ] Content calendar opstellen
- [ ] First customer testimonial post
- [ ] Local hashtag strategy

---

**💡 Tip:** Start klein met Facebook alleen, perfecteer dat platform, en breid dan uit naar Instagram en LinkedIn. Kwaliteit boven kwantiteit!

*Setup guide gemaakt: ${new Date().toLocaleDateString('nl-NL')}*
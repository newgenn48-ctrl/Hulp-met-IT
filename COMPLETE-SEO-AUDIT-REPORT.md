# 🔍 COMPLETE SEO AUDIT REPORT - Hulp Met IT
**Audit Datum:** 2025-10-27
**Website:** https://hulpmetit.nl
**Status:** CRITICAL ISSUES GEVONDEN

---

## 🚨 KRITIEKE PROBLEMEN (FIX DIRECT)

### 1. DUPLICATE CANONICAL TAGS - Regios Pages
**Severity:** 🔴 CRITICAL
**Impact:** ~82 pages NIET GEÏNDEXEERD
**Locatie:** `app/regios/[slug]/page.tsx`

**Probleem:**
```typescript
// FOUT - Conditionele canonical based on URL
const canonicalUrl = params.slug.startsWith('computerhulp-')
  ? `https://hulpmetit.nl/regios/computerhulp-${city.slug}`
  : `https://hulpmetit.nl/regios/${city.slug}`
```

**Gevolg:**
- `/regios/amsterdam` → canonical: `/regios/amsterdam`
- `/regios/computerhulp-amsterdam` → canonical: `/regios/computerhulp-amsterdam`
- BEIDE URLs tonen identieke content met verschillende canonicals
- Google: "Alternate page with proper canonical tag" → NIET INDEXEREN

**Fix:**
```typescript
// ✅ CORRECT - Altijd dezelfde canonical
const canonicalUrl = `https://hulpmetit.nl/regios/${city.slug}`
```

**Aanvullende fixes:**
1. Update sitemap.ts naar korte URLs
2. Add 301 redirect: `/regios/computerhulp-:slug` → `/regios/:slug`
3. Update schema URL (regel 127)

---

### 2. MISSING CANONICAL TAGS - Diensten Pages
**Severity:** 🔴 CRITICAL
**Impact:** Service pages krijgen FOUTE canonical
**Locatie:** `app/diensten/[slug]/page.tsx` & dedicated service pages

**Live Test:**
```bash
curl "https://hulpmetit.nl/diensten/computerhulp" | grep canonical
# Result: <link rel="canonical" href="https://hulpmetit.nl"/>
# ❌ FOUT! Wijst naar homepage in plaats van /diensten/computerhulp
```

**Probleem:**
- generateMetadata() heeft GEEN `alternates.canonical`
- Next.js neemt dan root canonical (/) over
- Google denkt service pages zijn duplicates van homepage

**Fix - app/diensten/[slug]/page.tsx:**
```typescript
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)

  return {
    title: `${service.name} - Vriendelijke IT Hulp aan Huis | Hulp met IT`,
    description: `${service.description}...`,
    alternates: {
      canonical: `/diensten/${params.slug}`,  // ✅ ADD THIS
    },
  }
}
```

**Fix - app/diensten/computerhulp/page.tsx** (en andere dedicated pages):
```typescript
export const metadata: Metadata = {
  title: 'Computerhulp | Virus verwijderen | Data behouden',
  description: service.longDescription,
  alternates: {
    canonical: '/diensten/computerhulp',  // ✅ ADD THIS
  },
}
```

**Getroffen pagina's:**
- `/diensten/computerhulp`
- `/diensten/printerhulp`
- `/diensten/internet-wifi`
- `/diensten/tablet-smartphone`
- `/diensten/uitleg-les`
- `/diensten/email-problemen`
- `/diensten/[slug]` (dynamic)

---

### 3. RELATIVE OPENGRAPH URLs
**Severity:** 🟡 MEDIUM
**Impact:** OpenGraph previews op social media mogelijk incorrect
**Locatie:** Alle student/computerhulp layout.tsx files

**Probleem:**
```typescript
// ❌ FOUT - Relative URL
openGraph: {
  url: '/student-aan-huis-amsterdam',
}
```

**Fix:**
```typescript
// ✅ CORRECT - Absolute URL of weglaten (metadataBase regelt het)
openGraph: {
  url: 'https://hulpmetit.nl/student-aan-huis-amsterdam',
}
// OF gewoon weglaten, Next.js maakt het automatisch absolute via metadataBase
```

**Getroffen pagina's:**
- Alle 36 student-aan-huis-{stad}/layout.tsx
- Alle 37 computerhulp-aan-huis-{stad}/layout.tsx
- `/student-aan-huis/layout.tsx`
- `/computerhulp-aan-huis/layout.tsx`

---

## ⚠️ HOGE PRIORITEIT PROBLEMEN

### 4. OUDE PRIJZEN IN CONTENT
**Severity:** 🟠 HIGH
**Impact:** Misleading info naar klanten, verkeerde verwachtingen
**Locatie:** 166+ files met oude prijzen

**Probleem:**
- FAQ's, content, schema's vermelden "€28,50 per kwartier"
- Oude totaal prijzen "€53,50" en "€65,50"
- Nieuwe prijzen: €14,50 per kwartier + €10 voorrijkosten (min 3 kwartier)

**Gevonden in:**
```
app/diensten/computerhulp/page.tsx:
  "Onze tarieven beginnen vanaf €28,50 per kwartier"

components/seo/StructuredData.tsx:
  priceRange: "€53,50 - €65,50"

components/seo/LocalBusinessSchema.tsx:
  price: "53.50"
  price: "65.50"
```

**Bulk fix nodig voor:**
- Alle FAQ answers
- Alle service descriptions
- Alle structured data schemas
- Pricing components
- Student/Computerhulp page descriptions

---

### 5. INCONSISTENTE PRICING MESSAGING
**Severity:** 🟠 HIGH
**Impact:** Verwarrende prijsinformatie

**Huidig:**
- Some pages: "€53,50 voor 3 kwartier"
- Some pages: "€28,50 per kwartier"
- Structured data: "€53,50" totaal

**Gewenst (volgens user request):**
- €14,50 per kwartier
- Minimaal 3 kwartier afname
- €10 voorrijkosten
- Emphasize: "Meeste problemen binnen 3 kwartier opgelost"
- Geef voorbeelden

---

## ⚡ MEDIUM PRIORITEIT ISSUES

### 6. MISSING METADATA FIELDS
**Severity:** 🟡 MEDIUM
**Impact:** Suboptimale social media previews

**Problem areas:**
```typescript
// diensten/[slug]/page.tsx - MISSING:
openGraph: {
  url: // ❌ MISSING
  type: 'website',  // ❌ MISSING
  locale: 'nl_NL',  // ❌ MISSING
}
twitter: {
  images: // ❌ MISSING (has images instead)
}
```

**Best practice:**
- ALTIJD `url` in OpenGraph
- ALTIJD `type: 'website'` voor pages
- ALTIJD `locale: 'nl_NL'`
- Twitter images moet `image` zijn, niet `images`

---

### 7. INCONSISTENTE BREADCRUMBS
**Severity:** 🟡 MEDIUM
**Impact:** SEO & UX inconsistentie

**Issues:**
- Sommige breadcrumbs hebben `item: "https://hulpmetit.nl/"` (trailing slash)
- Andere hebben `item: "https://hulpmetit.nl"` (geen slash)
- Inconsistent tussen pages

**Best practice:**
- Kies ÉÉN format (met of zonder trailing slash)
- Use consistent across all breadcrumbs

---

## 📊 STRUCTURED DATA ISSUES

### 8. DUPLICATE STRUCTURED DATA
**Severity:** 🟡 MEDIUM
**Impact:** Mogelijk conflicten in rich snippets

**Probleem:**
- `StructuredData.tsx` component op homepage
- `LocalBusinessSchema.tsx` component op homepage
- BEIDE exporteren LocalBusiness schema
- Mogelijk duplicate/conflicting data

**Check:**
```javascript
// Homepage heeft TWEE LocalBusiness schemas:
1. Van StructuredData component
2. Van LocalBusinessSchema component
```

**Fix:**
- Consolideer naar ÉÉN LocalBusiness schema
- Of zorg dat ze verschillende @type hebben

---

### 9. INCONSISTENT SCHEMA PRICING
**Severity:** 🟡 MEDIUM

**LocalBusinessSchema.tsx:**
```json
"priceRange": "€53,50 - €65,50"
```

**StructuredData.tsx:**
```json
"priceRange": PRICING.PRICE_RANGE
```

**Probleem:**
- Twee verschillende price ranges
- Niet gesynchroniseerd
- Oude prijzen

---

## 🎯 OPTIMIZATION OPPORTUNITIES

### 10. IMAGE OPTIMIZATION MISSING
**Severity:** 🔵 LOW
**Impact:** Page speed, LCP

**Issues:**
- Hero images niet preloaded op city pages
- Missing `priority` attribute on above-fold images
- No explicit width/height on some images

**Recommendations:**
- Add `priority` to hero images
- Preload critical images
- Specify dimensions

---

### 11. MISSING ALT TAGS
**Severity:** 🔵 LOW
**Impact:** Accessibility & image SEO

**Check nodig:**
- Service page images
- City page images
- Background images (niet nodig voor decorative)

---

### 12. H1 HIERARCHY
**Severity:** 🔵 LOW
**Impact:** SEO structure

**Observed:**
- Meeste pages hebben correct ÉÉN H1
- Check of alle pages consistent H1 hebben
- Geen multiple H1's per page

---

## 📋 TECHNICAL SEO CHECKLIST

### ✅ GOED GECONFIGUREERD:

1. **robots.txt** ✅
   - Correct sitemap reference
   - Allow rules correct
   - Disallow API/admin correct

2. **Root Layout Metadata** ✅
   - `metadataBase: new URL('https://hulpmetit.nl')` correct
   - Robots directives correct
   - Viewport correct

3. **Sitemap.xml** ✅
   - Dynamically generated
   - Alle belangrijke pages included
   - Correct priorities (mostly)
   - LastModified dates

4. **Structured Data** ✅ (mostly)
   - FAQPage schemas present
   - LocalBusiness schemas present
   - BreadcrumbList schemas present
   - Valid JSON-LD format

5. **Mobile Optimization** ✅
   - Viewport meta tag correct
   - Responsive design
   - Touch-friendly buttons

---

## 🔧 PRIORITIZED FIX LIST

### Priority 1: CRITICAL (DO FIRST)
1. ✅ Fix duplicate canonical tags in `app/regios/[slug]/page.tsx`
2. ✅ Add canonical tags to ALL diensten pages
3. ✅ Add 301 redirects for regios duplicate URLs
4. ✅ Update sitemap for regios pages

### Priority 2: HIGH (DO SOON)
5. ✅ Update ALL pricing to €14,50 per kwartier model
6. ✅ Fix FAQ pricing answers (166+ files)
7. ✅ Update structured data pricing
8. ✅ Fix relative OpenGraph URLs (73+ layouts)

### Priority 3: MEDIUM (DO WHEN POSSIBLE)
9. ✅ Consolidate duplicate LocalBusiness schemas
10. ✅ Fix OpenGraph metadata consistency
11. ✅ Standardize breadcrumb URLs
12. ✅ Add missing OG fields to diensten pages

### Priority 4: LOW (NICE TO HAVE)
13. ⏳ Image optimization (priority attribute)
14. ⏳ Alt tag audit
15. ⏳ Header hierarchy validation
16. ⏳ Performance optimization

---

## 📈 EXPECTED IMPACT AFTER FIXES

### Week 1-2: Critical Fixes
- ✅ Regios pages start being indexed
- ✅ "Alternate page" error disappears
- ✅ Diensten pages get correct canonical
- ✅ Google re-crawls fixed pages

### Week 3-4: High Priority Fixes
- ✅ Pricing consistency across site
- ✅ Better rich snippets with correct prices
- ✅ Improved social media previews

### Month 2+: Full Impact
- ✅ All pages properly indexed
- ✅ Better rankings (no duplicate content penalty)
- ✅ Higher CTR from search results
- ✅ Improved user trust (consistent pricing)

---

## 🎯 DETAILED FIX GUIDES

### FIX 1: Regios Canonical Tags

**File:** `app/regios/[slug]/page.tsx`

**Line 60-62 CHANGE:**
```typescript
// ❌ BEFORE
const canonicalUrl = params.slug.startsWith('computerhulp-')
  ? `https://hulpmetit.nl/regios/computerhulp-${city.slug}`
  : `https://hulpmetit.nl/regios/${city.slug}`

// ✅ AFTER
const canonicalUrl = `https://hulpmetit.nl/regios/${city.slug}`
```

**Line 127-129 CHANGE:**
```typescript
// ❌ BEFORE
const schemaUrl = params.slug.startsWith('computerhulp-')
  ? `https://hulpmetit.nl/regios/computerhulp-${city.slug}`
  : `https://hulpmetit.nl/regios/${city.slug}`

// ✅ AFTER
const schemaUrl = `https://hulpmetit.nl/regios/${city.slug}`
```

**File:** `app/sitemap.ts`

**Line 75-80 CHANGE:**
```typescript
// ❌ BEFORE
const cityPages = cities.map(city => ({
  url: `${baseUrl}/regios/computerhulp-${city.slug}`,
  // ...
}))

// ✅ AFTER
const cityPages = cities.map(city => ({
  url: `${baseUrl}/regios/${city.slug}`,
  // ...
}))
```

**File:** `next.config.js`

**ADD redirects:**
```javascript
async redirects() {
  return [
    {
      source: '/regios/computerhulp-:slug',
      destination: '/regios/:slug',
      permanent: true,
    },
  ]
}
```

---

### FIX 2: Diensten Canonical Tags

**File:** `app/diensten/[slug]/page.tsx`

**Line 38-46 ADD:**
```typescript
return {
  title: `${service.name} - Vriendelijke IT Hulp aan Huis | Hulp met IT`,
  description: `${service.description}...`,
  keywords: service.keywords,
  alternates: {
    canonical: `/diensten/${params.slug}`,  // ✅ ADD
  },
  openGraph: {
    title: `${service.name} - Vriendelijke IT Hulp aan Huis`,
    description: service.description,
    url: `https://hulpmetit.nl/diensten/${params.slug}`,  // ✅ ADD
    type: 'website',  // ✅ ADD
    locale: 'nl_NL',  // ✅ ADD
    images: [`/images/services/${service.slug}.webp`],
  },
}
```

**Files:** All dedicated service pages (computerhulp, printerhulp, etc.)

**ADD to each:**
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: {
    canonical: '/diensten/computerhulp',  // ✅ ADD (change per page)
  },
  openGraph: {
    // ... existing
    url: 'https://hulpmetit.nl/diensten/computerhulp',  // ✅ ADD (change per page)
  },
}
```

---

### FIX 3: Pricing Update (BULK)

**Strategy:** Create Python script to update all occurrences

**Search patterns:**
- `€28,50 per kwartier` → `€14,50 per kwartier`
- `€53,50 voor 3 kwartier` → `€10 voorrijkosten + €14,50 per kwartier (min 3 kwartier)`
- `€65,50 voor 3 kwartier` → `€10 voorrijkosten + €18,50 per kwartier spoedhulp (min 3 kwartier)`
- `"53.50"` in schemas → Update calculation
- `"65.50"` in schemas → Update calculation

**New messaging:**
```
Standaard: €14,50 per kwartier
Minimaal: 3 kwartier (€43,50)
Voorrijkosten: €10 eenmalig
Totaal eerste bezoek: €53,50 (incl. voorrijkosten)

Spoedhulp: €18,50 per kwartier
Totaal eerste bezoek: €65,50 (incl. voorrijkosten)

Emphasize: "Meeste problemen worden binnen 3 kwartier opgelost!"
```

---

## 🎬 ACTION PLAN

### Vandaag (Critical):
1. Fix regios canonical tags
2. Add diensten canonical tags
3. Add regios redirects
4. Update sitemap

### Deze Week (High):
5. Create pricing update script
6. Run pricing updates across all files
7. Update structured data pricing
8. Test all changes locally

### Volgende Week (Medium):
9. Fix OpenGraph relative URLs
10. Consolidate duplicate schemas
11. Deploy to production
12. Monitor Google Search Console

---

## 📊 MONITORING CHECKLIST

**Na deployment:**
- [ ] Google Search Console - Check for new errors
- [ ] Test canonical tags on live site
- [ ] Verify redirects work
- [ ] Check sitemap.xml renders correctly
- [ ] Test structured data with Google Rich Results Test
- [ ] Monitor "Alternate page" error count (should decrease)
- [ ] Check indexing status weekly

**Tools:**
- Google Search Console
- Google Rich Results Test
- Screaming Frog (for canonical audit)
- Lighthouse (for performance)
- Schema.org Validator

---

## ✅ VALIDATION CHECKLIST

Before marking as DONE:

**Canonical Tags:**
- [ ] All regios pages have same canonical regardless of URL format
- [ ] All diensten pages have unique canonical
- [ ] No page has canonical pointing to wrong URL
- [ ] Canonical tags are absolute URLs

**Pricing:**
- [ ] No references to €28,50 per kwartier remain
- [ ] All €53,50/€65,50 updated to breakdown format
- [ ] Schemas reflect new pricing
- [ ] FAQs updated

**OpenGraph:**
- [ ] All OG URLs are absolute or omitted
- [ ] No relative paths remain
- [ ] All pages have og:type
- [ ] All pages have og:locale

**Redirects:**
- [ ] /regios/computerhulp-{stad} → /regios/{stad} works
- [ ] 301 status (permanent)
- [ ] No redirect chains
- [ ] No broken links created

---

## 🔚 CONCLUSIE

**Totaal aantal issues:** 12
**Critical:** 2
**High:** 3
**Medium:** 5
**Low:** 2

**Geschatte fix tijd:**
- Critical fixes: 2-3 uur
- High priority: 4-5 uur
- Medium priority: 2-3 uur
- Low priority: 2-3 uur
**Totaal:** ~13 uur werk

**Expected ROI:**
- 82+ pages geïndexeerd die nu geblokkeerd zijn
- Betere rankings (geen duplicate content)
- Hogere trust (consistente prijzen)
- Betere CTR (correct rich snippets)

**START MET CRITICAL FIXES VOOR MAXIMALE IMPACT!** 🚀

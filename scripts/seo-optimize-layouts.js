/**
 * SEO Bulk Optimizer — Herschrijft alle 92 stadspagina layouts naar Rotterdam-standaard
 *
 * Gebruik: node scripts/seo-optimize-layouts.js
 */

const fs = require('fs');
const path = require('path');

const cities = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'lib', 'data', 'cities.json'), 'utf-8')
);

const appDir = path.join(__dirname, '..', 'app');

// Helper: slug naar PascalCase functienaam
function slugToPascalCase(slug) {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

// Helper: maak beschrijving met serviceAreas
function makeDescription(type, cityName, serviceAreas) {
  const areas = serviceAreas.slice(0, 3).join(', ');
  if (type === 'computerhulp') {
    return `Computerhulp aan huis in ${cityName} door HBO-opgeleide ICT-studenten. Hulp in ${areas} en omgeving. €14,50/kwartier. 7 dagen per week!`;
  }
  return `ICT Student aan huis in ${cityName} voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in ${areas} en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!`;
}

// Helper: genereer keywords voor computerhulp-aan-huis
function computerhulpKeywords(city) {
  const name = city.name;
  const nameLower = name.toLowerCase();
  const areas = city.serviceAreas;

  // Base keywords (10)
  const base = [
    `computerhulp aan huis ${nameLower}`,
    `computer reparatie ${nameLower}`,
    `laptop reparatie ${nameLower}`,
    `ICT student ${nameLower}`,
    `pc hulp ${nameLower}`,
    `computer student ${nameLower}`,
    `${nameLower} computerhulp avond`,
    `${nameLower} IT hulp weekend`,
    `computerhulp ${nameLower} spoed`,
    `betaalbare IT hulp ${nameLower}`,
  ];

  // Service-specifiek (4)
  const serviceSpecific = [
    `wifi problemen ${nameLower}`,
    `internet hulp ${nameLower}`,
    `printer installatie ${nameLower}`,
    `virus verwijderen ${nameLower}`,
  ];

  // Wijk-specifiek (tot 6 uit serviceAreas)
  const areaKeywords = areas.slice(0, 6).map((area, i) => {
    const areaLower = area.toLowerCase();
    const prefixes = [
      'computerhulp', 'ict hulp', 'computer reparatie',
      'laptop hulp', 'pc hulp', 'it hulp'
    ];
    return `${prefixes[i % prefixes.length]} ${areaLower}`;
  });

  // Extra keywords uit cities.json die nog niet covered zijn
  const allSoFar = new Set([...base, ...serviceSpecific, ...areaKeywords].map(k => k.toLowerCase()));
  const extraFromJson = city.keywords
    .filter(k => !allSoFar.has(k.toLowerCase()))
    .slice(0, 3)
    .map(k => k.toLowerCase());

  return [...base, ...serviceSpecific, ...areaKeywords, ...extraFromJson];
}

// Helper: genereer keywords voor student-aan-huis
function studentKeywords(city) {
  const name = city.name;
  const nameLower = name.toLowerCase();
  const areas = city.serviceAreas;

  // Base keywords (10)
  const base = [
    `student aan huis ${nameLower}`,
    `computerhulp ${nameLower}`,
    `ict hulp ${nameLower}`,
    `computer reparatie ${nameLower}`,
    `laptop hulp ${nameLower}`,
    `it student ${nameLower}`,
    `betaalbare computerhulp ${nameLower}`,
    `computer problemen ${nameLower}`,
    `wifi problemen ${nameLower}`,
    `internet hulp ${nameLower}`,
  ];

  // Wijk-specifiek (tot 6 uit serviceAreas)
  const areaKeywords = areas.slice(0, 6).map((area, i) => {
    const areaLower = area.toLowerCase();
    const prefixes = [
      'computerhulp', 'ict hulp', 'computer reparatie',
      'laptop hulp', 'student computerhulp', 'it hulp'
    ];
    return `${prefixes[i % prefixes.length]} ${areaLower}`;
  });

  // Extra keywords uit cities.json die nog niet covered zijn
  const allSoFar = new Set([...base, ...areaKeywords].map(k => k.toLowerCase()));
  const extraFromJson = city.keywords
    .filter(k => !allSoFar.has(k.toLowerCase()))
    .slice(0, 3)
    .map(k => k.toLowerCase());

  return [...base, ...areaKeywords, ...extraFromJson];
}

// Genereer layout file content
function generateLayout(type, city) {
  const isComputerhulp = type === 'computerhulp';
  const slug = city.slug;
  const name = city.name;
  const pathPrefix = isComputerhulp ? 'computerhulp-aan-huis' : 'student-aan-huis';
  const urlPath = `${pathPrefix}-${slug}`;

  const title = isComputerhulp
    ? `Computerhulp aan huis ${name} | Hulp met IT`
    : `Student aan huis ${name} | Hulp met IT`;

  const description = makeDescription(type, name, city.serviceAreas);
  const keywords = isComputerhulp ? computerhulpKeywords(city) : studentKeywords(city);

  const ogDescription = isComputerhulp
    ? `Computerhulp aan huis in ${name} door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!`
    : `Betaalbare computerhulp door ervaren IT-studenten in ${name}. Wij komen bij u thuis in ${name} en omgeving. €14,50 per kwartier.`;

  const ogAlt = isComputerhulp
    ? `Computerhulp aan huis ${name} - Hulp met IT`
    : `ICT Student aan huis ${name} - Hulp met IT`;

  const twitterDescription = isComputerhulp
    ? `Computerhulp aan huis in ${name}. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.`
    : `Betaalbare computerhulp door ervaren IT-studenten in ${name}. Wij komen bij u thuis.`;

  const funcName = isComputerhulp
    ? `ComputerhulpAanHuis${slugToPascalCase(slug)}Layout`
    : `StudentAanHuis${slugToPascalCase(slug)}Layout`;

  // Format keywords array
  const kwLines = keywords.map(k => `    '${k.replace(/'/g, "\\'")}'`).join(',\n');

  return `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  keywords: [
${kwLines}
  ],
  openGraph: {
    title: '${title.replace(/'/g, "\\'")}',
    description: '${ogDescription.replace(/'/g, "\\'")}',
    url: 'https://hulpmetit.nl/${urlPath}',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: '${ogAlt.replace(/'/g, "\\'")}'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${twitterDescription.replace(/'/g, "\\'")}',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/${urlPath}'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  }
}

export default function ${funcName}({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
`;
}

// Main
let updated = 0;
let skipped = 0;
let errors = [];

for (const city of cities) {
  for (const type of ['computerhulp', 'student']) {
    const prefix = type === 'computerhulp' ? 'computerhulp-aan-huis' : 'student-aan-huis';
    const dirName = `${prefix}-${city.slug}`;
    const dirPath = path.join(appDir, dirName);
    const filePath = path.join(dirPath, 'layout.tsx');

    if (!fs.existsSync(dirPath)) {
      skipped++;
      continue;
    }

    try {
      const content = generateLayout(type, city);
      fs.writeFileSync(filePath, content, 'utf-8');
      updated++;
      console.log(`✅ ${dirName}/layout.tsx`);
    } catch (err) {
      errors.push(`${dirName}: ${err.message}`);
      console.error(`❌ ${dirName}: ${err.message}`);
    }
  }
}

console.log(`\n--- Resultaat ---`);
console.log(`Bijgewerkt: ${updated}`);
console.log(`Overgeslagen (dir niet gevonden): ${skipped}`);
if (errors.length > 0) {
  console.log(`Fouten: ${errors.length}`);
  errors.forEach(e => console.log(`  - ${e}`));
}

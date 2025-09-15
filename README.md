# Hulp met IT - Next Generation Website 2050

Een futuristische website voor IT-ondersteuning aan huis, gericht op de doelgroep 50+. De site combineert cutting-edge 3D animaties en moderne technologie met uitstekende toegankelijkheid en gebruiksvriendelijkheid.

## ✨ Features

### 🚀 Futuristisch Design 2050
- 3D animaties met Three.js/React Three Fiber
- Holografische effecten en particle systems  
- Gradient backgrounds en glow effecten
- Glass morphism UI elementen

### 🎯 Doelgroep 50+ Optimalisaties
- Grote knoppen en duidelijke fonts
- WCAG 2.1 AA toegankelijkheid
- Eenvoudige navigatie
- Nederlandse taal/content

### ⚡ Performance & SEO
- Next.js 14 App Router
- Optimized images (WebP)
- Structured data en meta tags
- Landingspagina's per stad
- Core Web Vitals optimalisatie

### 🛡️ Beveiliging & Functionaliteit
- Spam-proof formulieren met honeypot
- E-mail integratie met bevestigingen
- SSL headers en security features
- Type-safe met TypeScript

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS + Custom CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js / React Three Fiber
- **Language:** TypeScript
- **Email:** Nodemailer
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
hulpmetit-nextgen/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── diensten/          # Services pages
│   ├── over-ons/          # About page
│   ├── contact/           # Contact page
│   ├── afspraak/          # Appointment page
│   ├── landing/[slug]/    # Landing pages
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   ├── home/              # Homepage sections
│   ├── three/             # 3D components
│   ├── forms/             # Form components
│   └── seo/               # SEO components
├── lib/                   # Utilities and data
│   ├── data/              # JSON data files
│   ├── utils/             # Utility functions
│   └── types/             # TypeScript types
├── public/                # Static assets
│   ├── images/            # Images and graphics
│   ├── models/            # 3D models
│   └── textures/          # 3D textures
└── styles/                # Additional CSS
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hulpmetit-nextgen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-email-password
   SMTP_FROM="Hulp met IT <noreply@hulpmetit.nl>"
   CONTACT_EMAIL=info@hulpmetit.nl
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📊 Performance Targets

- **Homepage load time:** < 2s desktop, < 3s mobile
- **Lighthouse Performance:** > 90
- **Core Web Vitals:** All metrics in green
- **Accessibility:** WCAG 2.1 AA compliant

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting  
npm run lint

# Run tests
npm test
```

## 📱 Responsive Design

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px  
- **Desktop:** 1024px+
- **Large screens:** 1440px+

## 🎨 Design System

### Colors
- **Primary:** Blue gradient (#0ea5e9 - #0284c7)
- **Accent:** Purple gradient (#d946ef - #c026d3)
- **Neural:** Gray scale (#0f172a - #f8fafc)

### Typography
- **Sans:** Inter (system fallback)
- **Display:** Space Grotesk
- **Mono:** JetBrains Mono

### Components
- Glass morphism cards
- Gradient buttons with glow effects
- 3D floating elements
- Particle systems

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Adding New Services
1. Add service data to `lib/data/services.json`
2. Service pages are automatically generated
3. Update navigation if needed

### Adding New Cities
1. Add city data to `lib/data/cities.json`
2. Landing pages are automatically generated
3. Update sitemap.xml

## 📧 Email Configuration

The contact and appointment forms use Nodemailer for email functionality:

- **SMTP Provider:** Configure in environment variables
- **Templates:** HTML email templates in API routes
- **Features:** Auto-replies, spam protection, form validation

## 🔐 Security Features

- CSP headers for XSS protection
- Honeypot fields for spam prevention
- Input validation with Zod
- Rate limiting on API routes
- Secure headers configuration

## 🌍 SEO Optimization

- **Meta Tags:** Dynamic for each page
- **Structured Data:** JSON-LD for local business
- **Sitemap:** Auto-generated XML sitemap
- **Open Graph:** Social media optimization
- **Core Web Vitals:** Performance optimization

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or issues:
- Email: developer@hulpmetit.nl
- Create an issue in the repository

---

**Built with ❤️ for Hulp met IT - Bringing the future to IT support**
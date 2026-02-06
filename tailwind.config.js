/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blauw - Professioneel, betrouwbaar
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',  // Koningsblauw
          600: '#1d4ed8',  // CTA blauw
          700: '#1e40af',  // Tekst accent
          800: '#1e3a8a',
          900: '#1e3370',
        },
        // Slate - Neutraal, professioneel
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',  // Donker voor tekst
        },
        // Amber/Goud - CTA accent
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Amber/goud voor CTA's
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Teal - Trust signalen/vinkjes
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Vinkjes/trust signalen
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Navy - Donkere secties
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Succes groen (legacy support)
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'sm': ['0.9375rem', { lineHeight: '1.5' }],    // 15px
        'base': ['1.0625rem', { lineHeight: '1.6' }],  // 17px
        'lg': ['1.1875rem', { lineHeight: '1.6' }],    // 19px
        'xl': ['1.375rem', { lineHeight: '1.4' }],     // 22px
        '2xl': ['1.75rem', { lineHeight: '1.3' }],     // 28px
        '3xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
        '4xl': ['2.75rem', { lineHeight: '1.1' }],     // 44px
        '5xl': ['3.5rem', { lineHeight: '1.1' }],      // 56px
      },
    },
  },
  plugins: [],
}

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
        // Warm vertrouwensblauw - persoonlijk, betrouwbaar (denk: huisarts/ANWB)
        primary: {
          50: '#f0f4fa',
          100: '#dce6f4',
          200: '#c0d0ea',
          300: '#94b3db',
          400: '#6190c9',
          500: '#3a6fb5',
          600: '#2557a7',  // Hoofdkleur
          700: '#204a8e',
          800: '#1d3f74',
          900: '#1a355f',
        },
        // Warme stenen grijstinten - uitnodigend, rustig
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Warm amber - zachter, niet schreeuwerig
        accent: {
          50: '#fefbf0',
          100: '#fdf3d4',
          200: '#fbe4a8',
          300: '#f7cf72',
          400: '#f0b442',
          500: '#e8960e',
          600: '#d97706',  // CTA kleur
          700: '#b45309',
          800: '#92400e',
          900: '#783510',
        },
        // Succes groen (formulieren, bevestigingen)
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
        heading: ['var(--font-space-grotesk)', 'Inter', 'system-ui', 'sans-serif'],
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#af101a',
        'primary-container': '#d32f2f',
        'on-primary': '#ffffff',
        'on-primary-container': '#fff2f0',
        'crimson-deep': '#B71C1C',
        'crimson-bright': '#EF4444',
        'navy-midnight': '#061524',
        'navy-surface': '#132D4B',
        'secondary': '#4a607d',
        'on-secondary': '#ffffff',
        'ocean-teal': '#0369A1',
        'raja-turquoise': '#06B6D4',
        'gold-champion': '#EAB308',
        'surface': '#f7f9fb',
        'on-surface': '#191c1e',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f7f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'slate-surface': '#F1F5F9',
        'slate-border': '#E2E8F0',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
        'error': '#ba1a1a',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}

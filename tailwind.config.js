/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FAFAFB',
        paper: '#0F172A',
        forest: '#0F172A',
        sun: '#2563EB',
        muted: '#475569',
        line: '#E2E8F0',
        accent: '#2563EB',
        primary: { bg: '#FAFAFB', accent: '#2563EB' },
        secondary: { bg: '#F1F5F9', accent: '#0F172A' },
        card: '#FFFFFF',
        success: '#16A34A',
        text: { primary: '#0F172A', secondary: '#475569' },
        stone: { 300: '#0F172A', 400: '#475569', 500: '#64748B', 600: '#94A3B8' },
        red: { 400: '#DC2626' },
        amber: { 400: '#D97706' },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FBFAF5',
        paper: '#1B4835',
        forest: '#1B4835',
        sun: '#F9B600',
        muted: '#647067',
        line: '#DDE3D9',
        accent: '#E8A900',
        primary: { bg: '#FBFAF5', accent: '#E8A900' },
        secondary: { bg: '#EEF2EB', accent: '#1B4835' },
        card: '#F3F5F1',
        success: '#477052',
        text: { primary: '#1B4835', secondary: '#647067' },
        stone: { 300: '#1B4835', 400: '#647067', 500: '#839087', 600: '#C8D0C7' },
        red: { 400: '#B9433B' },
        amber: { 400: '#9B6A2F' },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

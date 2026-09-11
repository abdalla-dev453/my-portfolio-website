/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F1E7D6',
        paper: '#2D2118',
        muted: '#6E5B49',
        line: '#D7C3A8',
        accent: '#9B3D2C',
        primary: { bg: '#F1E7D6', accent: '#9B3D2C' },
        secondary: { bg: '#E4D2B9', accent: '#7E2E20' },
        card: '#F8F0E4',
        success: '#477052',
        text: { primary: '#2D2118', secondary: '#6E5B49' },
        stone: { 300: '#3D2E22', 400: '#6E5B49', 500: '#8E7862', 600: '#B7A38E' },
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

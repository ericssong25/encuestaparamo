/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7546ed',
        secondary: '#dc89ff',
        dark: '#12173b',
      },
      fontFamily: {
        creato: ['Creato Display', 'serif'],
        garet: ['Garet', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

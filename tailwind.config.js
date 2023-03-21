const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        brand: {
          light: colors.blue[100],
          DEFAULT: colors.blue[500],
          dark: colors.blue[700],
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1c1c1e',
        'light-background': '#828282',
        'light-gray': '#D3D3D3',
        gold: '#FFD700',
        cream: '#FFFDD0',
        'error-red': '#FF0000',
        'error-orange': '#FFA500',
        'dark-gold': '#B8860B',
      },
    },
  },
  plugins: [],
})

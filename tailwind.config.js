/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'pllx-white': '#F0F3FF',
        'pllx-gray-light': '#E2CFEA',
        'pllx-gray': '#102B3F',
        'pllx-gray-dark': '#062726',
        'pllx-black': '#181818',
        'pllx-theme':'#6247AA',
        'pllx-accent':'#A06CD5',
      },
      fontFamily:{
          'switzer': 'Switzer',
          'clash': 'Clash Display',
      },
      dropShadow: {
        'pllx-theme': '0 0 35px rgba(106, 108, 213, 0.25)',
        'pllx-gray': '0 0 35px rgba(41, 41, 47, 0.5)',
        'whatsapp': '4px 7px 20px #36ff002e'
      },
    },
  },
  plugins: [],
}


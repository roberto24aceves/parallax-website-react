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
        'pllx-gray-light': '#e1e1e1',
        'pllx-gray': '#102B3F',
        'pllx-gray-dark': '#062726',
        'pllx-black': '#181818',
        'pllx-theme':'#BBFF00',
        'pllx-accent':'#95FF14',
      },
      fontFamily:{
          'switzer': 'Switzer',
          'clash': 'Clash Display',
      },
      dropShadow: {
        'pllx-theme': '0 0 35px rgba(187, 255, 0, 0.3)',
        'pllx-gray': '0 0 35px rgba(24, 24, 24, 0.5)',
        'whatsapp': '4px 7px 20px #36ff002e'
      },
    },
  },
  plugins: [],
}


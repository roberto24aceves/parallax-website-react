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
        'pllx-white': '#E8E8E8',
        'pllx-gray-light': '#474752',
        'pllx-gray': '#29292F',
        'pllx-gray-dark': '#1E1E1E',
        'pllx-black': '#18181A',
        'pllx-blue':'#4700D8',
      },
      fontFamily:{
          'switzer': 'Switzer',
          'clash': 'Clash Display',
      },
      dropShadow: {
        'pllx-blue': '0 0 35px rgba(71, 0, 216, 0.5)',
        'pllx-gray': '0 0 35px rgba(41, 41, 47, 0.5)',
        'whatsapp': '4px 7px 20px #36ff002e'
      }
    },
  },
  plugins: [],
}


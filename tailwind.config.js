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
        'pllx-white': '#FBFFDC',
        'pllx-gray-light': '#474752',
        'pllx-gray': '#29292F',
        'pllx-gray-dark': '#1E1E1E',
        'pllx-black': '#18181A',
        'pllx-blue':'#232855',
        'pllx-accent':'#FF5722',
      },
      fontFamily:{
          'switzer': 'Switzer',
          'clash': 'Clash Display',
      },
      dropShadow: {
        'pllx-blue': '0 0 35px rgba(255, 87, 34, 0.2)',
        'pllx-gray': '0 0 35px rgba(41, 41, 47, 0.5)',
        'whatsapp': '4px 7px 20px #36ff002e'
      },
    },
  },
  plugins: [],
}


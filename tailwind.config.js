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
        'pllx-t-20': 'rgba(255, 255, 255, 0.2)',
        'pllx-t-30': 'rgba(255, 255, 255, 0.3)',
        'pllx-t-40': 'rgba(255, 255, 255, 0.4)',
        'pllx-white': '#FFFFFF',
        'pllx-gray-light': '#E7E7D8',
        'pllx-gray': '#AFAC95',
        'pllx-gray-dark': '#1E1E1E',
        'pllx-black': '#181818',
        'pllx-theme':'#EA4125',
        'pllx-accent':'#F8B002',
        'pllx-accent-two':'#FF7317',
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


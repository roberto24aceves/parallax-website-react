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
        'pllx-gray': '#29292F',
        'pllx-black': '#18181A',
        'pllx-yellow':'#F8DE22',
        'pllx-orange':'#F94C10',
        'pllx-red':'#C70039',
        'pllx-red-dark':'#900C3F',
      },
      fontFamily:{
          'switzer': 'Switzer',
          'clash': 'Clash Display',
      },
      dropShadow: {
        'pllx': '0 0 35px rgba(249, 76, 16, 0.5)',
      }
    },
  },
  plugins: [],
}


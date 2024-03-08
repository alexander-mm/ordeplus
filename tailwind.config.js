/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir2: ['Avenir', 'sans-serif'],
        avenir: ['Wix Madefor Display', 'sans-serif']
      },
      colors: {
        'mainBlue': "#0070B8",
        'grayBack': "#EEEFF0",
        'grayFont': "#797978",
        "chat": "#EFE8DE"
      },
      screens: {
        "xs": "280px",
        "xs2": "550px"
      }
    },
  },
  plugins: [],
}
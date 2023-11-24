/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Heebo', 'sans-serif'],
        'unna': ['Unna', 'sans-serif']
        // You can define multiple font families or variations here
      },
      colors: {
        textprimary: "#052F45",
        textgray: "#828282",
        lightgreen: "#41C498",
        darkgray: "#282828",
        textgreen: "#707070",
        lighttextgray: "#BDBDBD"
     }
    },
  },
  plugins: [],
}


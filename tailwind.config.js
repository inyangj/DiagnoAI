/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nohemi_Regular: ['Nohemi-Regular', 'sans-serif'],
        Nohemi_Bold: ['Nohemi-Bold', 'sans-serif'],
        AeonikTRAIL_Regular: ['AeonikTRAIL-Regular', 'sans-serif'],
        AeonikTRAIL_Bold: ['AeonikTRAIL-Bold', 'sans-serif'],
      },
      colors: {
        primary: "#052F45",
        secondary: "#41C498",
        gray_3: "#828282",
        gray_4: "rgba(189, 189, 189, 1)",
      },
    },
  },
  plugins: [],
};

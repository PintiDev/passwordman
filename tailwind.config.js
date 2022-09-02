/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlack: "#131218",
        themeGray: "#24232B",
        themeLime:'#A2DEAA'
      },
    },
  },
  plugins: [],
};

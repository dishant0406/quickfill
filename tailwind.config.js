/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#193b68',
        primaryLight: '#193b681a',
        mainDark: '#1479ff',
        mainLight: '#1479ff1a',
        secondaryDark: '#14A5FF',
        secondaryLight: '#14d2ff',
        secondaryLighter: '#14ebff',
      },
    },
  },
  plugins: [],
}



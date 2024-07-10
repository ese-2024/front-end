/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hulk": "#BBFF34",
        "colorSide": "#324056",
        "colorBase": "#141D2B",
        "textC": "#CCCCCC",
        "colorPopup": "#29364B",
        "lineBorder": "#57657A",
        "colorRed": "#DA1E28"
      },
      fontFamily: {
        "chakra-regular": ['chakra-regular', 'sans-serif'],
        "chakra-light": ['chakra-light', 'sans-serif'],
        "chakra-medium": ['chakra-medium', 'sans-serif'],
        "chakra-semibold": ['chakra-semibold', 'sans-serif'],
        "chakra-bold": ['chakra-bold', 'sans-serif'],
      },
      screens: {
        'break': '1600px',
      },
      scale: {
        "99": "0.99", 
        'customScale': '1.01', // Substitua o valor conforme necessário
      },
    },
  },
  plugins: [],
}


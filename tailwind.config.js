const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: {
          900: "#3F92CF",
          100: "#E3ECF2"
        },
        dark: "#142C3E"
      }
    }
  }
};
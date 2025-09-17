/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables toggling via a 'dark' class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blossom: '#f9e0e3',
        midnight: '#1e1e2f',
        starlight: '#c3b1e1',
        minty: '#d1f7c4',
        shadow: '#2c2c3e',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        soft: ['"Comic Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
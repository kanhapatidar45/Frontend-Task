/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // Make sure this is properly closed
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#232536',
        'custom-yellow': '#FFD050',
        'custom-purple': '#592EA9',
        'custom-grey': '#4C4C4C',
        'custom-light-grey': '#6D6E76',
        'custom-off-white': '#F4F4F4',
        'custom-light-purple': '#F4F0F8',
        'custom-light-beige': '#FBF6EA',
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],  // Adding Sen font to Tailwind
        inter: ['Inter', 'sans-serif'],  // Adding Inter font to Tailwind
      },
    },
  },
  plugins: [],
}



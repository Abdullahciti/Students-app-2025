/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "mainColor": "#a3a3a356", 
        "altColor": "#ffffffb0",
        "activeColor": "#243f66",
      },
    },
  },
  plugins: [],
}
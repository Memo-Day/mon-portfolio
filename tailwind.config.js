/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // adapte selon ton projet React
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

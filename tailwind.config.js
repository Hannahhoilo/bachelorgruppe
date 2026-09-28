/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#03045E", // Primary background
        brand: "#023EBA", // Main brand color
        highlight: "#00B4D8", // Highlights
        soft: "#CAF0F8", // Background/Cards
        cta: "#FBB02D", // CTA Buttons
      },
    },
  },
  plugins: [],
};

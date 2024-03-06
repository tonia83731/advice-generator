/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#202733",
        "grayish-blue": "#4F5D74",
        "dark-grayish-blue": "#313A48",
        "light-cayn": "#CEE3E9",
        "neon-green": "#53FFAA",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};

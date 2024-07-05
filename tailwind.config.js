/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hind-siliguri": ["Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

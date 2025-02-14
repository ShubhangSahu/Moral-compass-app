const { cyberpunk } = require("daisyui/src/theming/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cyberpunk", "bumblebee", "cupcake"],
  },
};

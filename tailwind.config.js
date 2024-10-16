/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          "main-bg": "#1c1c1c",
          "map-bg": "#282828",
          "card-bg": "#272727",
          "input-bg": "#333333",

          "border": "#333333",

          "text-title": "#FFFFFF",
          "text-body1": "#777777",
          "text-disabled": "#494949",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

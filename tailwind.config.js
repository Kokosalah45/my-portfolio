/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dynamic: "repeat(auto-fit , minmax(200px , 1fr))",
      },
      colors: {
        "black-soft": "#242424",
        "black-mute": "#2f2f2f",
        "black-eerie": "#1a1a1a",
        "green-lizard": "#9AEB22",
        "olive-drab": "#6da31b",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

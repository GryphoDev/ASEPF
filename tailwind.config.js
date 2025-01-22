/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./about.html", "./assets/**/*.js"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      backgroundImage: {
        banner: "url('../images/artem-kniaz-DqgMHzeio7g-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};

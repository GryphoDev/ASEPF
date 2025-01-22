/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./samad.html",
    "./job.html",
    "./collectiveHousing.html",
    "./diversifiedAccomodation.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      backgroundImage: {
        banner: "url('../images/artem-kniaz-DqgMHzeio7g-unsplash.jpg')",
        bannerCollectivePage:
          "url('../images/marlis-trio-akbar-eMB60hNHFL8-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};

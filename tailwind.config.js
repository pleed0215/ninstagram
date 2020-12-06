const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    color: {
      gray: colors.trueGray,
    },
    fontFamily: {},
    extend: {
      height: {
        half: "50vh",
      },
      fontFamily: {
        amarillo: "Amarillo",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

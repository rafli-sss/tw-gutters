const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  return function ({ useShortClass = false }) {
    matchUtilities(
      {
        [useShortClass ? "g" : "gutters"]: (value) => ({
          ["> *"]: {
            padding: value,
          },
        }),
        [useShortClass ? "gx" : "gutters-x"]: (value) => ({
          ["> *"]: {
            paddingLeft: value,
            paddingRight: value,
          },
        }),
        [useShortClass ? "gy" : "gutters-y"]: (value) => ({
          ["> *"]: {
            paddingTop: value,
            paddingBottom: value,
          },
        }),
      },
      {
        values: theme("spacing"),
        variants: ["responsive"],
      }
    );
  };
});

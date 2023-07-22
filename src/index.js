const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options = {}) {
  const useShortClass = Boolean(options.useShortClass);

  return function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        [useShortClass ? 'g' : 'gutters']: (value) => ({
          ['> *']: {
            padding: value,
          },
        }),
        [useShortClass ? 'gx' : 'gutters-x']: (value) => ({
          ['> *']: {
            paddingLeft: value,
            paddingRight: value,
          },
        }),
        [useShortClass ? 'gy' : 'gutters-y']: (value) => ({
          ['> *']: {
            paddingTop: value,
            paddingBottom: value,
          },
        }),
      },
      {
        values: theme('spacing'),
        variants: ['responsive'],
      }
    );
  };
});

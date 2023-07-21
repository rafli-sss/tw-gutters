const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      gutters: (value) => ({
        ['> *']: {
          padding: value,
        },
      }),
      'gutters-x': (value) => ({
        ['> *']: {
          paddingLeft: value,
          paddingRight: value,
        },
      }),
      'gutters-y': (value) => ({
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
});

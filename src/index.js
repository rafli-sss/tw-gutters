const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options = {}) {
  const useShortClass = Boolean(options.useShortClass);

  return function ({ matchUtilities, theme }) {
    const className = useShortClass ? 'g' : 'gutters';
    const classNameX = useShortClass ? 'gx' : 'gutters-x';
    const classNameY = useShortClass ? 'gy' : 'gutters-y';

    const getStyles = (x, y) => ({
      ['--tw-gutter-x']: x,
      ['--tw-gutter-y']: y,
      ['marginTop']: 'calc(-1 * var(--tw-gutter-y))',
      ['marginRight']: 'calc(-0.5 * var(--tw-gutter-x))',
      ['marginLeft']: 'calc(-0.5 * var(--tw-gutter-x))',
      ['> *']: {
        ['marginTop']: 'var(--tw-gutter-y)',
        ['paddingRight']: `calc(0.5 * var(--tw-gutter-x))`,
        ['paddingLeft']: `calc(0.5 * var(--tw-gutter-x))`,
      },
    });

    matchUtilities(
      {
        [className]: (value) => getStyles(value, value),
        [classNameX]: (value) => getStyles(value, 0),
        [classNameY]: (value) => getStyles(0, value),
      },
      {
        values: theme('spacing'),
        variants: ['responsive'],
      }
    );
  };
});

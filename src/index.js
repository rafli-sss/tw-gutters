const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options = {}) {
  const useShortClass = Boolean(options.useShortClass);

  return function ({ matchUtilities, theme }) {
    const className = useShortClass ? 'g' : 'gutters';
    const classNameX = useShortClass ? 'gx' : 'gutters-x';
    const classNameY = useShortClass ? 'gy' : 'gutters-y';

    const getStylesX = (x) => ({
      '--tw-gutter-x': x,
      marginRight: 'calc(-0.5 * var(--tw-gutter-x))',
      marginLeft: 'calc(-0.5 * var(--tw-gutter-x))',
    });

    const getStylesY = (y) => ({
      '--tw-gutter-y': y,
      marginTop: 'calc(-1 * var(--tw-gutter-y))',
    });

    const getChildStylesX = () => ({
      paddingRight: `calc(0.5 * var(--tw-gutter-x))`,
      paddingLeft: `calc(0.5 * var(--tw-gutter-x))`,
    });

    const getChildStylesY = () => ({
      marginTop: 'var(--tw-gutter-y)',
    });

    const getStyles = (x, y) => {
      let styles = {};

      // Flex container styles
      if (x) {
        styles = { ...getStylesX(x) };
      }

      if (y) {
        styles = {
          ...styles,
          ...getStylesY(y),
        };
      }

      // Flex item styles
      if (x) {
        styles['> *'] = { ...getChildStylesX() };
      }

      if (y) {
        styles['> *'] = { ...styles['> *'], ...getChildStylesY() };
      }

      return styles;
    };

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

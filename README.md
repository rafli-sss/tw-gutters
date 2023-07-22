# tw-gutters

<img alt="npm version" src="https://badge.fury.io/js/tw-gutters.svg"> <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg">

tw-gutters is a TailwindCSS plugin that adds gutter classes using padding from TailwindCSS default spacing, similar to Bootstrap. This plugin allows you to easily add gutters (space between elements) to your website layout quickly by utilizing the padding property on specific elements.
<br /><br />

## Installation

You can install the plugin via npm. Make sure you have TailwindCSS installed beforehand.

```bash
npm install -D tw-gutters
```
<br />

## Usage

After installing the plugin, you can include it in your TailwindCSS configuration. Open your `tailwind.config.js` file and add tw-gutters to the existing plugins array.
<br />

### Without Options

```js
// tailwind.config.js

module.exports = {
  // Other configurations
  plugins: [
    // Other plugins
    require('tw-gutters'),
  ],
};
```

It will generate class like `gutters-0`, `gutters-x-1`, `gutters-y-2`
Now, you can use gutter classes on your elements in your HTML file:

```html
<div class="flex flex-wrap gutters-4">
  <div class="flex-initial w-1/2">Content</div>
  <div class="flex-initial w-1/2">Content</div>
</div>
```
<br />

### With Options
```js
// tailwind.config.js

module.exports = {
  // Other configurations
  plugins: [
    // Other plugins
    require('tw-gutters')({useShortClass : true}),
  ],
};
```

It will generate class like `g-0`, `gx-1`, `gy-2`
Now, you can use gutter classes on your elements in your HTML file:

```html
<div class="flex flex-wrap gx-2">
  <div class="flex-initial w-1/2">Content</div>
  <div class="flex-initial w-1/2">Content</div>
</div>
```
<br />

## License

This plugin is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

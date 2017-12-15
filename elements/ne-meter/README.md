# Meter - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<meter>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Meter - Native Elements](#meter---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
```

```css

```

Check the [live demo](https://ne-meter.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-progress-border-color: hsl(0, 0%, 89%); /* color */

  /* Background API */
  --ne-meter-background: hsl(0, 0%, 97%); /* color */
  --ne-meter-filled-color-top: hsl(67, 78%, 52%); /* color */
  --ne-meter-filled-color-mid: hsl(41, 100%, 60%); /* color */
  --ne-meter-filled-color-low: hsl(354, 100%, 65%); /* color */

  /* Misc API */
  --ne-progress-radius: 5px; /* unit */
  --ne-progress-width: 30px; /* unit */
  --ne-progress-height: 3px; /* unit */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add @native-elements/ne-meter
```


## Usage
Just import the css from your **node_modules** inside your project.
```css
@import 'node_modules/ne-meter/dist/ne-meter.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/ne-meter/src/ne-meter.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
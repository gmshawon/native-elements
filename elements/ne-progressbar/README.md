# Progress - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

<img width="16px" alt="Google Chrome" src="https://goo.gl/U987PH"><img width="16px" alt="Firefox" src="https://goo.gl/vNRYsH"><img width="16px" alt="Safari" src="https://goo.gl/S1vPDZ"><img width="16px" alt="Microsoft Edge" src="https://goo.gl/Xi8Dsz" title="💩"> [![GitHub tag](https://img.shields.io/github/release/equinusocio/native-elements.svg?style=flat-square)](https://github.com/equinusocio/native-elements/releases)

Native HTML `<progress>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Progress - Native Elements](#progress---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
<progress>Text</progress>
<progress value="50" max="100">progress</progress>
```

```css
progress {
  --ne-progress-border-color: #000;
}

.SpecialProgress {
  --ne-progress-height: 10px;
}
```

Check the [live demo](https://ne-progress.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-progress-border-color: hsl(0, 0%, 89%); /* color */

  /* Background API */
  --ne-progress-background: hsl(0, 0%, 97%); /* color */
  --ne-progress-filled-color: hsl(0, 0%, 89%); /* color */

  /* Stripes API */
  --ne-progress-stripe-size: 1rem; /* unit */
  --ne-progress-stripe-colors: rgba(255, 255, 255, 0.4); /* color */

  /* Misc API */
  --ne-progress-height: 5px; /* unit */
  --ne-progress-radius: 10px; /* border-radius */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add @native-elements/ne-progress
```


## Usage
Just import the css from your **node_modules** inside your project.
```css
@import 'node_modules/ne-progress/dist/ne-progress.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/ne-progress/src/ne-progress.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
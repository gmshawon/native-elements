# Button - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<button>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Button - Native Elements](#button---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [HTML API](#html-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example
```html
<button ne-button>Text</button>
<button ne-button class="SpecialButton">
   <i>←</i>
   Text
</button>
<button ne-button dir="rtl" class="SpecialButton">
   <i>←</i>
   Text
</button>
```

```css
html {
  --ne-button-background: #000;
  --ne-button-color: #FFF;
}

.SpecialButton {
  --ne-button-background: rebeccapurple;
  --ne-button-radius: 4px;
}
```

Check the [live demo](https://ne-button.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-button-border: 0; /*  border */
  --ne-button-hover-border: var(--ne-button-border); /*  border */
  --ne-button-focus-border: var(--ne-button-border); /*  border */
  --ne-button-active-border: var(--ne-button-border); /*  border */
  --ne-button-disabled-border: var(--ne-button-border); /*  border */

  /* Background API */
  --ne-button-background: hsl(233, 64%, 62%); /*  background  */
  --ne-button-hover-background: hsl(233, 64%, 52%); /*  background  */
  --ne-button-focus-background: var(--ne-button-hover-background); /*  background  */
  --ne-button-active-background: hsl(233, 64%, 32%); /*  background  */
  --ne-button-disabled-background: hsl(233, 64%, 96%); /*  background  */

  /* Foreground API */
  --ne-button-foreground: #FFF; /*  color */
  --ne-button-hover-color: var(--ne-button-color); /*  color */
  --ne-button-focus-color: var(--ne-button-color); /*  color */
  --ne-button-active-color: var(--ne-button-color); /*  color */
  --ne-button-disabled-color: hsl(233, 34%, 72%); /*  color */

  /* Icon API */
  --ne-button-icon-margin: calc(2rem / 2.2); /*  unit */
  --ne-button-icon-separator: rgba(255, 255, 255, 0.3); /*  color */
  --ne-button-disabled-icon-separator: rgba(143, 150, 163, 0.3); /*  color */

  /* Misc API */
  --ne-button-radius: 5px; /*  border-radius */
  --ne-button-font-weight: 700; /*  font-weight */
  --ne-button-font-size: inherit; /*  font-size */
  --ne-button-y-padding: 1rem; /* unit */
  --ne-button-x-padding: 2rem; /* unit */
  --ne-button-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-button-outline-width: 0.2rem; /* unit */
  --ne-button-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
}
```
## HTML API

> dir="rtl"

Adding this html attribute the icon inside the button will change the position without changing the DOM. The style will be automatically fixed.

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-button
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-button/dist/ne-button.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-button/src/ne-button.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
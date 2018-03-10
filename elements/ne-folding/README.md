# Folding - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<details>` and `<summary>` elements with **CSS API** that give you superpowers. 🕶

- [Folding - Native Elements](#folding---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <details ne-folding>
    <summary>My folding summary</summary>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
  </details>

  <!-- Grouped folding -->
  <section ne-folding-group>
    <details ne-folding>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
    <details ne-folding>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
  </section>
```

```css
html {
  --ne-folding-background: deeppink;
}

.SpecialFolding {
  --ne-folding-summary-font-weight: 400;
}
```

Check the [live demo](https://ne-folding.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-folding-separator: 1px solid rgba(0, 0, 0, 0.05); /* border */

  /* Background API */
  ---ne-folding-background: #FFF; /* background */
  ---ne-folding-summary-background: #FFF; /* background */

  /* Foreground API */
  --ne-folding-summary-font-size: initial; /* font-size */
  --ne-folding-summary-font-weight: 700; /* font-weight */
  --ne-folding-summary-open-color: hsl(233, 64%, 62%); /* color */

  /* Misc API */
  --ne-folding-max-height: 300px; /* height */
  --ne-folding-border-radius: 4px; /* border-radius */
  --ne-folding-summary-padding: 16px; /* padding */
  --ne-folding-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-folding
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import 'node_modules/@native-elements/ne-folding/dist/ne-folding.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/@native-elements/ne-folding/src/ne-folding.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
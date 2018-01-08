# Form - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<fieldset>, <legend>, <label>, <output>` form elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Form - Native Elements](#form---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
  <fieldset ne-form>
    <legend ne-form>Fieldset legend</legend>
    <label ne-form>
      <input ne-checkradio type="checkbox">
      Label
    </label>
    <label ne-form>
      <input ne-checkradio type="checkbox">
      Label 2
    </label>
  </fieldset>
```

```css
input {
  --ne-checkradio-shadow: none;
}

.SpecialInput {
  --ne-checkradio-animation-duration: 0;
}
```

Check the [live demo](https://ne-form.stackblitz.io/)


## CSS API

```css
* {
  /* Foreground API */
  --ne-form-legend-weight: 600; /* font-weight */

  /* Misc API */
  --ne-form-legend-margin: 0 0 0.5rem; /* margin */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add @native-elements/ne-form
```


## Usage
Just import the css from your **node_modules** inside your project.
```css
@import 'node_modules/ne-form/dist/ne-form.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/ne-form/src/ne-form.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
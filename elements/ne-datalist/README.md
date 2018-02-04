# Datalist - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<datalist>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Datalist - Native Elements](#datalist---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
<input list="options" id="datalist" name="datalist" placeholder="Enter option">
<datalist id="options">
  <option value="Option 1"></option>
  <option value="Option 2"></option>
  <option value="Option 3"></option>
</datalist>
```

```css
input[list] {
}

.SpecialDatalist {

}
```

Check the [live demo](https://ne-datalist.stackblitz.io/)


## CSS API

```css
* {
}
```

## Install

You can just install it with **npm** by running:
```
yarn add @native-elements/ne-datalist
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import 'node_modules/ne-datalist/dist/ne-datalist.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/ne-datalist/src/ne-datalist.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
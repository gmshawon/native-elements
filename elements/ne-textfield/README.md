# Text fields - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input ...>` elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Text fields - Native Elements](#text-fields---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
  <input type="text">
  <input type="password">
  <input type="url">
  <input type="email">
  <input type="tel">
  <input type="number">
  <input type="date">
  <input type="time">
  <input type="month">
  <input type="week">
  <input type="datetime-local">
  <textarea>
```

```css
input {
}

.SpecialInput {

}
```

Check the [live demo](https://ne-textfield.stackblitz.io/)


## CSS API

```css
* {
}
```

## Install

You can just install it with **npm** by running:
```
yarn add @native-elements/ne-textfield
```


## Usage
Just import the css from your **node_modules** inside your project.
```css
@import 'node_modules/ne-textfield/dist/ne-textfield.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import 'node_modules/ne-textfield/src/ne-textfield.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
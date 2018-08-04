# Dialog - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<dialog>` element with **CSS API** that give you superpowers. 🕶

- [Dialog - Native Elements](#dialog---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <dialog>Confirm</dialog>
```

```css
html {
}

.SpecialColorpicker {
}
```

Check the [live demo](https://ne-dialog.stackblitz.io/)


## CSS API

```css
* {

```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-dialog
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-dialog/dist/ne-dialog.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-dialog/src/ne-dialog.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
# Upload - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="file">` element with **CSS API** that give you superpowers. 🕶

- [Upload - Native Elements](#upload---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html

```

```css
html {
}

.WarningDialog {

}
```

Check the [live demo](https://ne-upload.stackblitz.io/)


## CSS API

```css
* {

}
```

## Install

You can just install it with **npm** by running:
```shell
yarn add -D @native-elements/ne-upload
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-upload/dist/ne-upload.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-upload/src/ne-upload.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
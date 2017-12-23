# Text fields - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input ...>` and `<textarea>` elements with **CSS API** that give you superpowers. 🕶

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
  <input type="search">
  <input type="number">
  <input type="date">
  <input type="time">
  <input type="month">
  <input type="week">
  <input type="datetime-local">
  <textarea></textarea>
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
  /* Border API */
  --ne-textfield-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-textfield-hover-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-textfield-focus-border: 1px solid hsl(233, 64%, 62%); /* border */
  --ne-textfield-disabled-border: 1px solid hsl(220, 10%, 95%); /* border */
  --ne-textfield-vaild-border: 1px solid hsl(67, 78%, 52%); /* border */
  --ne-textfield-invaild-border: 1px solid hsl(354, 100%, 65%); /* border */

  /* Background API */
  --ne-textfield-background: #FFF; /* background */
  --ne-textfield-hover-background: #FFF; /* background */
  --ne-textfield-focus-background: #FFF; /* background */
  --ne-textfield-disabled-background: hsl(220, 10%, 95%); /* background */
  --ne-textfield-valid-background: #FFF; /* background */
  --ne-textfield-invalid-background: #FFF; /* background */

  /* Foreground API */
  --ne-textfield-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-hover-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-focus-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-disabled-color: hsl(220, 10%, 60%); /* color */
  --ne-textfield-readonly-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-valid-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-invalid-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-placeholder-color: hsl(0, 0%, 85%); /* color */
  --ne-textfield-hover-placeholder-color: hsl(0, 0%, 89%); /* color */
  --ne-textfield-focus-placeholder-color: hsl(0, 0%, 89%); /* color */
  --ne-textfield-disabled-placeholder-color: hsl(0, 0%, 80%); /* color */

  /* Misc API */
  --ne-textfield-radius: 5px;
  --ne-textfield-height: 2.5rem;
  --ne-textfield-y-padding: 0.5rem;
  --ne-textfield-x-padding: 0.75rem;
  --ne-textfield-outline-color: hsl(233, 64%, 85%);
  --ne-textfield-valid-outline-color: hsl(67, 78%, 90%);
  --ne-textfield-invalid-outline-color: hsl(354, 100%, 90%);
  --ne-textfield-outline-width: 0.2rem;
  --ne-textfield-selection-background: hsl(233, 64%, 90%);
  --ne-textfield-selection-foreground: hsl(0, 0%, 13%);
  --ne-textfield-resize: vertical;
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
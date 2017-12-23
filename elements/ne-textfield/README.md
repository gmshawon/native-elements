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
/* Border API */
  --textfieldBorder: var(--ne-textfield-border, 1px solid hsl(0, 0%, 89%));
  --textfieldHoverBorder: var(--ne-textfield-hover-border, 1px solid hsl(0, 0%, 89%));
  --textfieldFocusBorder: var(--ne-textfield-focus-border, 1px solid hsl(233, 64%, 85%));
  --textfieldDisabledBorder: var(--ne-textfield-disabled-border, 1px solid hsl(220, 10%, 95%));

  /* Background API */
  --textfieldBackground: var(--ne-textfield-background, #FFF);
  --textfieldHoverBackground: var(--ne-textfield-hover-background, #FFF);
  --textfieldFocusBackground: var(--ne-textfield-focus-background, #FFF);
  --textfieldDisabledBackground: var(--ne-textfield-disabled-background, hsl(220, 10%, 95%));

  /* Foreground API */
  --textfieldColor: var(--ne-textfield-color, hsl(0, 0%, 13%));
  --textfieldHoverColor: var(--ne-textfield-hover-color, hsl(0, 0%, 13%));
  --textfieldFocusColor: var(--ne-textfield-focus-color, hsl(0, 0%, 13%));
  --textfieldDisabledColor: var(--ne-textfield-disabled-color, hsl(220, 10%, 60%));
  --textfieldReadonlyColor: var(--ne-textfield-readonly-color, hsl(0, 0%, 13%));
  --textfieldPlaceholderColor: var(--ne-textfield-placeholder-color, hsl(0, 0%, 85%));
  --textfieldHoverPlaceholderColor: var(--ne-textfield-hover-placeholder-color, hsl(0, 0%, 89%));
  --textfieldFocusPlaceholderColor: var(--ne-textfield-focus-placeholder-color, hsl(0, 0%, 89%));
  --textfieldDisabledPlaceholderColor: var(--ne-textfield-disabled-placeholder-color, hsl(0, 0%, 80%));

  /* Misc API */
  --textfieldBorderRadius: var(--ne-textfield-radius, 5px);
  --textfieldHeight: var(--ne-textfield-height, 2.5rem);
  --textfieldPadding: var(--ne-textfield-y-padding, 0.5rem) var(--ne-textfield-x-padding, 0.75rem);
  --textfieldOutlineColor: var(--ne-textfield-outline-color, hsl(233, 64%, 85%));
  --textfieldOutlineWidth: var(--ne-textfield-outline-width, 0.2rem);
  --textfieldSelectionBackground: var(--ne-textfield-selection-background, hsl(233, 64%, 90%));
  --textfieldSelectionForeground: var(--ne-textfield-selection-background, hsl(0, 0%, 13%));
  --textfieldResize: var(--ne-textfield-resize, vertical);
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
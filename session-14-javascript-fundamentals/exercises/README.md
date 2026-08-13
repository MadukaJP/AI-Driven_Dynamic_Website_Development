# Session 14 Exercises

## Exercise 1: Convert var to let/const

`old-style.js` uses `var` everywhere. Rewrite it using `let`/`const`
appropriately (const where the value never changes, let otherwise).

## Exercise 2: Template literal practice

Given:
```js
let product = "Coffee";
let price = 4.5;
let quantity = 2;
```
Write a single `console.log` using a template literal that outputs:
`"2 x Coffee = $9"`

## Exercise 3: jQuery to vanilla

Convert this jQuery snippet to vanilla JavaScript:
```js
$('#toggle-btn').on('click', function () {
  $('#panel').toggleClass('open');
});
```

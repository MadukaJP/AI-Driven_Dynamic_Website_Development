# Session 6 Exercises

## Exercise 1: Selector practice

Given this HTML:
```html
<div class="card">
  <h2 id="title">Hello</h2>
  <p>Text</p>
</div>
```

Write a selector for:
1. All `<p>` tags inside `.card`
2. The element with `id="title"`
3. Every `.card` (in case there are several)

## Exercise 2: Convert to custom properties

`colors-before.css` repeats the same 2 hex colors many times. Rewrite it
in `colors-after.css` using `:root` custom properties.

## Exercise 3: `:has()` in practice

Write a CSS rule that gives a `<li>` a strikethrough style only if it
contains an `<input type="checkbox">` that is `:checked`.
(Hint: `li:has(input:checked) { ... }`)

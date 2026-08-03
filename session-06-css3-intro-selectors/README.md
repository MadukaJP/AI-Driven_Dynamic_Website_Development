# Session 6: Introduction to CSS3 — Selectors

## What you'll learn

- How to attach CSS to HTML (external stylesheets — our default from here on)
- Selector types: element, class, ID, descendant, attribute
- Modern selectors: `:is()`, `:where()`, `:has()`
- Nesting concepts (and native CSS nesting)
- CSS custom properties (variables)
- Styling links (`:hover`, `:visited`, etc.)

## Why it matters today

CSS3 selector fundamentals are still exactly right — but the toolkit has grown. CSS custom properties (variables) and relational selectors like `:has()` didn't exist when courses like this were first written, and they've changed how professionals structure stylesheets. We introduce them now, at the start, so you build good habits from the first CSS file you write.

## Attaching CSS: the three ways (and which one we use)

```html
<!-- 1. Inline (avoid — hard to maintain) -->
<p style="color: red;">Text</p>

<!-- 2. Internal (fine for quick demos) -->
<style> p { color: red; }
</style>

<!-- 3. External (what we use from here on) -->
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
p {
  color: red;
}
```

External stylesheets keep structure (HTML) and presentation (CSS) separate — this is the professional default.

## Basic selectors

```css
/* Element selector */
p { color: #333; }

/* Class selector — reusable, apply to many elements */
.card { border: 1px solid #ddd; }

/* ID selector — unique, one element only */
#header { background: #222; }

/* Descendant selector — a <p> inside .card */
.card p { font-size: 0.9rem; }

/* Multiple selectors, same rule */
h1, h2, h3 { font-family: sans-serif; }
```

## Attribute selectors

```css
input[type="email"] { border-color: blue; }
a[target="_blank"] { color: purple; }
```

## Modern selectors: `:is()`, `:where()`, `:has()`

```css
/* :is() — group selectors, cleaner than repeating them */
:is(h1, h2, h3) { font-weight: bold; }
/* same as: h1, h2, h3 { font-weight: bold; } but scales better with nesting */

/* :where() — like :is(), but adds zero specificity (useful for resets) */
:where(ul, ol) { margin: 0; }

/* :has() — the "parent selector" the web waited years for */
/* Style a .card only if it contains an <img> */
.card:has(img) { padding: 0; }
```

`:has()` is genuinely new — for years CSS couldn't select a parent based on its children. It now can, in all modern browsers (check [caniuse.com](https://caniuse.com/css-has) if targeting older ones).

## CSS custom properties (variables)

```css
:root {
  --primary-color: #2563eb;
  --spacing: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
```

Variables let you define a value once and reuse it everywhere — change the brand color in one place, and every element using it updates. This is the modern replacement for a lot of what preprocessors like Sass used to be needed for.

## Nesting

Native CSS nesting is now supported in modern browsers:

```css
.card {
  padding: 16px;

  h2 {
    margin-top: 0;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}
```

If you see older tutorials using Sass (`.scss` files) for nesting — that's still valid and common in larger projects, but plain CSS can now do basic nesting natively too.

## Styling links

```css
a { color: #2563eb; }
a:visited { color: #7c3aed; }
a:hover { text-decoration: underline; }
a:focus { outline: 2px solid orange; } /* keep this for accessibility! */
```

Never remove `:focus` styles without replacing them — keyboard users rely on that outline to know where they are on the page.

## Where AI fits in

```
I have repeated hex color values across my CSS file. Show me how to
refactor this to use CSS custom properties.
```

Refactoring like this is a strong AI use case — mechanical, low-risk, easy to verify visually. Always view the result in the browser afterward to confirm nothing shifted unexpectedly.

## Practical

See [`practical/`](./practical/) — you'll add a stylesheet to your Session 4 portfolio page.

## Exercises

See [`exercises/`](./exercises/).

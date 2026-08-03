# Session 7: Text and Font Styles

## What you'll learn

- Font properties: family, size, weight, style
- Google Fonts and variable fonts
- Responsive typography with `clamp()`
- Inline spans for targeted styling
- Paragraph indentation, borders, alignment, spacing

## Why it matters today

Font stacks used to mean listing 4-5 fallback fonts and hoping one was installed on the user's machine. Today, web fonts (via Google Fonts or self-hosted files) mean you control exactly what renders, and `clamp()` lets you write one font-size rule that scales smoothly across all screen sizes instead of writing separate rules per breakpoint.

## Basic font properties

```css
p {
  font-family: Arial, Helvetica, sans-serif; /* fallback list */
  font-size: 16px;
  font-weight: 400;   /* 400 = normal, 700 = bold */
  font-style: italic;
  line-height: 1.5;
}
```

## Using Google Fonts

```html
<!-- in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Inter', sans-serif;
}
```

## Variable fonts (quick mention)

A single variable font file can render multiple weights and styles (instead of loading separate files per weight), controlled purely in CSS:

```css
h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 650; /* variable fonts allow any value, not just 400/700 */
}
```

## Responsive font sizing with `clamp()`

```css
h1 {
  /* clamp(minimum, preferred, maximum) */
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

This means: never smaller than `1.5rem`, never larger than `3rem`, and scale smoothly with viewport width in between. One line replaces multiple `@media` breakpoints just for font sizing.

## Inline spans

```html
<p>The price is <span class="highlight">$49</span> this month.</p>
```

```css
.highlight {
  color: #dc2626;
  font-weight: bold;
}
```

`<span>` has no inherent styling — it exists purely as a hook for CSS/JS on a piece of inline text, the way `<div>` is a hook for block-level content.

## Paragraph indentation and borders

```css
p {
  text-indent: 2em;
  border-left: 3px solid #2563eb;
  padding-left: 12px;
}
```

## Horizontal alignment

```css
.center { text-align: center; }
.right  { text-align: right; }
.justify { text-align: justify; }
```

## Vertical spacing

```css
p {
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.6; /* space between lines within a paragraph */
}
```

## Where AI fits in

```
Give me a clamp() value for a heading that should be 24px on mobile
and scale up to 48px on a 1440px-wide screen.
```

`clamp()` math is fiddly by hand — this is a legitimate time-saver. Always test the result at a few real viewport widths in DevTools' responsive mode rather than trusting the numbers blindly.

## Practical

See [`practical/`](./practical/).

## Exercises

See [`exercises/`](./exercises/).

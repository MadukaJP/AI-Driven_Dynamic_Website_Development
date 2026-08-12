# Session 13: HTML5 Tables, Audio, and Video

## What you'll learn

- Creating and formatting tables (`<table>`, `<thead>`, `<tbody>`, cell merging)
- Responsive images: `srcset`, `<picture>`, lazy loading
- Native `<audio>` and `<video>` elements
- Accessibility for media (captions, transcripts)
- Handling non-supporting browsers/formats

## Why it matters today

Tables are for tabular data only (never for layout — that's what Grid/Flexbox are for now, Session 9). Media has changed the most since this course was originally scoped: responsive images (serving the right size per device) and lazy loading are now expected performance practices, not extras, because they directly affect page speed scores and mobile data usage.

## What you'll build

👉 **[Click here to see what you'll build today](https://local-bites.netlify.app/)**

## Tables — for data, never for layout

```html
<table>
  <thead>
    <tr>
      <th>Dish</th>
      <th>Price</th>
      <th>Calories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Avocado Toast</td>
      <td>$9</td>
      <td>320</td>
    </tr>
    <tr>
      <td>Iced Latte</td>
      <td>$5</td>
      <td>150</td>
    </tr>
  </tbody>
</table>
```

## Table size, column width, merging cells

```html
<table style="width: 100%;">
  <tr>
    <th colspan="2">Merged Header</th>
  </tr>
  <tr>
    <td rowspan="2">Spans two rows</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
</table>
```

```css
table { width: 100%; border-collapse: collapse; }
th, td { padding: 8px; border: 1px solid #ddd; text-align: left; }
```

## Responsive images

```html
<img
  src="dish-800w.jpg"
  srcset="dish-400w.jpg 400w, dish-800w.jpg 800w, dish-1200w.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Grilled salmon with roasted vegetables"
  loading="lazy">
```

- `srcset` + `sizes` let the browser pick the right image size for the device — no more shipping a 2MB image to a phone.
- `loading="lazy"` tells the browser to skip loading images until they're about to scroll into view — a one-word performance win.

## `<picture>` — for different formats or art direction

```html
<picture>
  <source srcset="dish.webp" type="image/webp">
  <source srcset="dish.jpg" type="image/jpeg">
  <img src="dish.jpg" alt="Grilled salmon with roasted vegetables">
</picture>
```

The browser uses the first format it supports (modern formats like WebP are smaller), falling back to the plain `<img>` if nothing else matches.

## Native audio and video

```html
<video controls width="600" poster="thumbnail.jpg">
  <source src="promo.mp4" type="video/mp4">
  <source src="promo.webm" type="video/webm">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English">
  Your browser doesn't support this video.
</video>

<audio controls>
  <source src="ambient.mp3" type="audio/mpeg">
  Your browser doesn't support this audio.
</audio>
```

- Multiple `<source>` tags = fallback formats for older/different browsers.
- `<track kind="captions">` provides real captions — essential for accessibility and, increasingly, expected by default for any public-facing video.
- The fallback text ("Your browser doesn't support...") only shows in the rare case none of the sources work.

## Where AI fits in

```
Write an HTML5 <video> tag with two source formats, a poster image,
and a captions track, following accessibility best practices.
```

Boilerplate media markup is another strong AI use case. Still verify: did it include `controls`? Did it include a `<track>` for captions, or do you need to add that yourself and create the caption file?

## Practical

See [`practical/`](./practical/) — build the Local Bites menu page.

## Exercises

See [`exercises/`](./exercises/).

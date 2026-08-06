# Session 10: HTML5 Semantic Tags, Layouts & Navigation

## What you'll learn

- Semantic tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- Common semantic layout patterns
- Text-based and graphical navigation bars
- Image mapping
- `<div>` vs semantic tags — when each is right

## Why it matters today

Semantic tags aren't cosmetic — they tell browsers, screen readers, and search engines what each part of your page *means*, not just how it looks. A `<div>`-only page and a semantically marked-up page can look pixel-identical but behave very differently for accessibility and SEO. This matters more today than ever, since automated accessibility auditing (in browsers, in CI pipelines) increasingly checks for this directly.

## The core semantic tags

```html
<body>
  <header>
    <h1>Site Name</h1>
    <nav>...</nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <p>Content...</p>
    </article>

    <aside>
      <h3>Related Links</h3>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Site Name</p>
  </footer>
</body>
```

| Tag | Meaning |
|---|---|
| `<header>` | Introductory content, usually with a heading/logo/nav |
| `<nav>` | A block of navigation links |
| `<main>` | The primary content of the page (one per page) |
| `<article>` | Self-contained content that could stand alone (a blog post, a product card) |
| `<section>` | A thematic grouping of content, usually with its own heading |
| `<aside>` | Content tangentially related to the main content (sidebar, callout) |
| `<footer>` | Closing content — copyright, contact links |

## `<div>` vs semantic tags

Use a semantic tag whenever one accurately describes the content's role. Fall back to `<div>` only for purely presentational grouping that has no semantic meaning (like a wrapper for centering content with CSS).

```html
<!-- Good: meaningful -->
<article class="product-card">...</article>

<!-- Fine: purely a styling wrapper, no semantic role -->
<div class="page-wrapper">...</div>
```

## Text-based navigation bar

```html
<nav class="main-nav">
  <a href="/">Home</a>
  <a href="/menu">Menu</a>
  <a href="/contact">Contact</a>
</nav>
```

```css
.main-nav {
  display: flex;
  gap: 24px;
}
.main-nav a {
  text-decoration: none;
  color: inherit;
}
.main-nav a:hover {
  text-decoration: underline;
}
```

## Graphical navigation bar

Same structure, icons or a logo image replacing/accompanying text — accessibility still requires meaningful `alt` text or an `aria-label` if the link is icon-only:

```html
<nav class="icon-nav">
  <a href="/" aria-label="Home"><img src="home-icon.svg" alt=""></a>
  <a href="/cart" aria-label="Shopping cart"><img src="cart-icon.svg" alt=""></a>
</nav>
```

When the icon alone doesn't convey meaning to a screen reader, `aria-label` on the link fills that gap (the icon's own `alt` can stay empty since it's decorative in this case).

## Image mapping (a niche but occasionally useful tool)

```html
<img src="map.jpg" alt="Store floor plan" usemap="#storemap">
<map name="storemap">
  <area shape="rect" coords="0,0,100,100" href="section-a.html" alt="Section A">
  <area shape="circle" coords="150,75,50" href="section-b.html" alt="Section B">
</map>
```

Image maps let different regions of a single image link to different pages. It's rarely used today (CSS positioning of separate elements is usually cleaner), but you'll occasionally see it in legacy code or specific use cases like interactive diagrams.

## Where AI fits in

```
Here's my HTML — it's all <div>s. Suggest which ones should become
semantic tags (header, nav, main, article, section, aside, footer)
based on their content and class names.
[paste your HTML]
```

This is a strong, practical use of AI — semantic refactoring based on context is exactly the kind of pattern-matching task AI is good at. Still, read its reasoning, not just the output — you should be able to justify every tag choice yourself.

## Practical

See [`practical/`](./practical/) — you'll refactor the capstone homepage to use semantic tags and build out its navigation.

## Exercises

See [`exercises/`](./exercises/).

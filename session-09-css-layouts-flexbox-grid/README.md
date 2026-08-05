# Session 9: Understanding Layouts in CSS3 — Flexbox & Grid

## What you'll learn

- Flexbox: container and item properties
- Grid: rows, columns, and `grid-template-areas`
- When to use Flexbox vs Grid
- Container queries — layout based on a component's own size, not the viewport
- A quick look at utility-first CSS (Tailwind) as an industry-common approach

## What you'll build

<p align="center">
  <img
    src="https://res.cloudinary.com/dywgweuum/image/upload/v1785969979/msedge_I12rJylgMV_m1kp81.png"
    alt="What you'll build"
    width="800"
  />
</p>

## Why it matters today

This is where the original course's layout coverage becomes genuinely essential — Flexbox and Grid are how virtually all modern layout is done (older techniques like floats and tables-for-layout are legacy). We add container queries, which are newer than Flexbox/Grid and solve a real problem they don't: styling a component based on the space *it* has, not the whole screen.

## Starting here: the capstone

From this session on, your practical work goes into `../../capstone/`. You're building the homepage for **Local Bites**, a small café.

## Flexbox — one-dimensional layout (a row or a column)

```css
.nav {
  display: flex;
  justify-content: space-between; /* main axis alignment */
  align-items: center;            /* cross axis alignment */
  gap: 16px;
}
```

| Property | What it does |
|---|---|
| `display: flex` | Turns on flexbox for direct children |
| `flex-direction` | `row` (default) or `column` |
| `justify-content` | Alignment along the main axis |
| `align-items` | Alignment along the cross axis |
| `gap` | Space between items (no more margin hacks) |
| `flex-wrap` | Allow items to wrap to a new line |

```css
.item {
  flex: 1; /* grow to fill available space equally */
}
```

## Grid — two-dimensional layout (rows AND columns)

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

```css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
```

## Flexbox vs Grid — how to choose

| Use Flexbox when... | Use Grid when... |
|---|---|
| Laying out items in a single row or column | Laying out a full 2D structure (rows AND columns) |
| Navigation bars, button groups | Page layouts, image galleries, dashboards |
| Content size should drive layout | You want precise control over both axes |

They're often combined: Grid for the page skeleton, Flexbox for aligning items inside a grid cell.

## Responsive without media queries: `auto-fit` and `minmax()`

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

This creates as many 200px+ columns as fit, and stretches them evenly — a fully responsive grid with zero media queries.

## Container queries — the newest layout tool

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

Media queries respond to the *viewport* size. Container queries respond to the *component's own container* size — so the same `.card` component can lay out differently depending on where it's placed (sidebar vs main content), regardless of overall screen size. This solves a real, long-standing limitation.

## A quick look at utility-first CSS (Tailwind)

Many teams today write layout using utility classes instead of custom CSS files:

```html
<div class="flex justify-between items-center gap-4 p-4">
  ...
</div>
```

This is [Tailwind CSS](https://tailwindcss.com) — each class maps to one CSS property. We're not switching to it in this course (understanding raw CSS first matters more), but recognize it: it's extremely common in industry, and once you know Flexbox/Grid properties, the utility classes are just as easy to read.

## Where AI fits in

```
I have a page with a header, a fixed-width sidebar, and a main content
area that should fill the rest. Write the CSS Grid template for this
layout.
```

Grid template areas are a great AI use case — the syntax is fiddly to get right by hand, and it's easy to visually verify the result immediately in the browser.

## Practical

See [`practical/`](./practical/) — build the Local Bites homepage layout.

## Exercises

See [`exercises/`](./exercises/).

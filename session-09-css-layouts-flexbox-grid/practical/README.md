# Practical: Local Bites Homepage Layout

Work in `../../capstone/`.

## Steps

1. In `index.html`, build this structure:
   - `<header>` with a logo/name and a `<nav>` (links can be `#` for now)
   - A `<section class="hero">` with a heading and short tagline
   - A `<section class="featured-dishes">` containing 3-4 `.card` divs
     (dish name, short description — images come in Session 13)
   - A `<footer>` with contact info placeholder

2. In `css/styles.css`:
   - Style `<header>` as a flex row: logo on the left, nav on the right,
     vertically centered, using `justify-content: space-between`.
   - Style `.featured-dishes` as a responsive grid using
     `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`.
   - Give `.card` a border, padding, and background using your CSS
     variables from Session 6/8.

3. Resize your browser to confirm the dish grid reflows naturally with
   no media queries needed.

## Commit

```bash
git add .
git commit -m "Session 09: capstone homepage layout with flexbox and grid"
git push
```

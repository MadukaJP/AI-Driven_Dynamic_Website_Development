# Practical: Semantic Refactor of the Capstone

Work in `../../capstone/index.html`.

## Steps

1. Wrap your logo/heading and nav in `<header>`.
2. Wrap your hero and featured-dishes sections in `<main>`, using
   `<section>` for each (with a heading in each section).
3. Wrap each dish card in `<article>` instead of a plain `<div>` — a
   dish card is self-contained content.
4. Confirm your `<footer>` is a real `<footer>` tag, not a `<div>`.
5. Update your `<nav>` to have real links: Home (`index.html`), Menu
   (`menu.html` — doesn't exist yet, that's fine), Contact
   (`contact.html` — same).
6. Style the nav as a horizontal flex row using what you learned in
   Session 9.

## Commit

```bash
git add .
git commit -m "Session 10: semantic refactor + navigation"
git push
```

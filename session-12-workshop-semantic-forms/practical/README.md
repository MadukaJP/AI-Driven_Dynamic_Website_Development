# Practical: Capstone Consolidation

## Checklist — go through your capstone files and confirm:

**index.html**
- [ ] One `<h1>`, headings in order
- [ ] `<header>`, `<nav>`, `<main>`, `<footer>` used (not `<div>`)
- [ ] Dish cards are `<article>` elements
- [ ] Nav links use relative paths and work

**contact.html**
- [ ] Every input has a real `<label for="">`
- [ ] Appropriate input types used (`email`, `tel`, `date`, `time`, `number`)
- [ ] `required` set on essential fields
- [ ] A hidden field present

## New: visually-hidden label pattern

Sometimes you want a label present for accessibility but not visible
(e.g. a compact newsletter signup). Use this CSS class instead of
`display: none` (which hides it from screen readers too):

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

```html
<form class="newsletter">
  <label for="newsletter-email" class="visually-hidden">Email address</label>
  <input type="email" id="newsletter-email" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>
```

Add this to your capstone footer, styled as a flex row.

## Commit

```bash
git add .
git commit -m "Session 12: workshop consolidation + newsletter form"
git push
```

# CSS Selectors Cheatsheet

| Selector | Matches |
|---|---|
| `element` | All elements of that type |
| `.class` | All elements with that class |
| `#id` | The one element with that ID |
| `.a .b` | `.b` inside `.a` (descendant) |
| `.a > .b` | `.b` directly inside `.a` (child) |
| `.a, .b` | Either `.a` or `.b` |
| `[attr]` | Elements with that attribute |
| `[attr="value"]` | Elements with attribute equal to value |
| `:hover` | While the mouse is over it |
| `:focus` | While it has keyboard focus |
| `:visited` | Visited links |
| `:first-child` / `:last-child` | Position among siblings |
| `:is(a, b, c)` | Groups selectors, cleaner than repeating |
| `:where(a, b, c)` | Same as `:is()` but zero specificity |
| `:has(child)` | Parent selector — matches if it contains `child` |

## Flexbox quick reference
```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | space-between | space-around;
  align-items: flex-start | center | stretch;
  flex-wrap: nowrap | wrap;
  gap: 16px;
}
.item {
  flex: 1; /* grow to fill space */
}
```

## Grid quick reference
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  gap: 16px;
}
.item {
  grid-area: sidebar;
}
```

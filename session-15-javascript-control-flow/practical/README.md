# Practical: Menu Filter for Local Bites

Work in `../../capstone/js/main.js` and `menu.html`.

## Steps

1. In `menu.html`, add a `data-category` attribute to each dish row/card,
   e.g. `data-category="breakfast"`, `"drinks"`, `"mains"`.
2. Add filter buttons above the menu:
   ```html
   <div class="filter-buttons">
     <button data-filter="all">All</button>
     <button data-filter="breakfast">Breakfast</button>
     <button data-filter="drinks">Drinks</button>
     <button data-filter="mains">Mains</button>
   </div>
   ```
3. In `main.js`, write a function that:
   - Listens for clicks on any `.filter-buttons button`
   - Reads the clicked button's `data-filter` value
   - Uses `.filter()` (or a loop, then refactor to `.filter()`) on your
     dish elements to show only matching ones, hiding the rest
     (`element.style.display = 'none'` / `''`)

```js
const buttons = document.querySelectorAll('.filter-buttons button');
const dishes = document.querySelectorAll('[data-category]');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    dishes.forEach((dish) => {
      const show = filter === 'all' || dish.dataset.category === filter;
      dish.style.display = show ? '' : 'none';
    });
  });
});
```

## Commit

```bash
git add .
git commit -m "Session 15: capstone menu filter with array methods"
git push
```

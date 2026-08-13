# Practical: First Interactivity on the Capstone

Work in `../../capstone/js/main.js`.

## Steps

1. Confirm `js/main.js` is linked with `defer`:
   `<script src="js/main.js" defer></script>` — update `index.html` if
   it isn't already using `defer`.
2. Select your newsletter form's submit button and add a click listener
   that logs the entered email to the console (don't actually submit
   yet — we'll handle that properly in Session 16):
   ```js
   const form = document.querySelector('.newsletter');
   form.addEventListener('submit', (event) => {
     event.preventDefault(); // stop the page from reloading
     const email = document.querySelector('#newsletter-email').value;
     console.log(`Newsletter signup: ${email}`);
   });
   ```
3. Add a hover effect on your dish `.card` elements using
   `addEventListener('mouseenter', ...)` and `mouseleave` that toggles a
   class (e.g. `.card-hovered`) using `classList.add`/`classList.remove`.
4. Style `.card-hovered` in your CSS with a subtle transform/shadow.
5. Test in the browser, watching the DevTools console.

## Commit

```bash
git add .
git commit -m "Session 14: first JS interactivity on capstone"
git push
```

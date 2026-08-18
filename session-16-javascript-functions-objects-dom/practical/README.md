# Practical: Real Form Validation + Dynamic Content

Work in `../../capstone/js/main.js`.

## Steps

1. Give your `contact.html` reservation form an `id="reservation-form"`.
2. In `main.js`, add a submit handler that:
   - Calls `event.preventDefault()`
   - Uses `checkValidity()`/`reportValidity()` on the email field
   - If valid, builds a confirmation object:
     ```js
     const confirmation = {
       name: document.querySelector('#name').value,
       email: document.querySelector('#email').value,
       date: document.querySelector('#date').value,
     };
     console.log(JSON.stringify(confirmation));
     ```
   - Then dynamically creates a `<p>` with a "Thanks, we'll see you
     then!" message and appends it after the form.
3. On the menu page, use `document.createElement` to dynamically add
   one more dish to the `.featured-dishes` grid on page load (proving
   you can generate HTML from JS, not just hardcode it).

## Commit

```bash
git add .
git commit -m "Session 16: real form validation + dynamic DOM content"
git push
```

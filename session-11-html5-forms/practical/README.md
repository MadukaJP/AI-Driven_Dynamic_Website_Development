# Practical: Local Bites Reservation Form

Create `../../capstone/contact.html`.

## Steps

1. Start from the capstone's boilerplate (copy the `<head>` from
   `index.html`, link the same stylesheet).
2. Build a reservation form with:
   - Name (`text`, `required`, real `<label>`)
   - Email (`email`, `required`)
   - Phone (`tel`)
   - Party size (`number`, `min="1"`, `max="12"`)
   - Reservation date (`date`)
   - Reservation time (`time`)
   - A message/notes field (`<textarea>`)
   - A hidden field: `<input type="hidden" name="form_source" value="reservation-page">`
3. Add a submit button.
4. Test native validation: try submitting with the email field empty or
   badly formatted — confirm the browser blocks it and shows its own
   message.
5. Link "Contact" in your nav (from Session 10) to this new page.

## Commit

```bash
git add .
git commit -m "Session 11: capstone reservation form"
git push
```

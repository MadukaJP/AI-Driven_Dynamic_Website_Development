# Session 11: HTML5 Forms

## What you'll learn

- HTML5 input types and when to use each
- New form attributes: `required`, `pattern`, `placeholder`, `autocomplete`
- Native form validation (the Constraint Validation API, previewed)
- New form elements: `<datalist>`, `<output>`, `<progress>`, `<meter>`
- Hidden fields
- Accessible form UX patterns

## What you'll build

👉 **[Click here to see what you'll build today](https://local-bites.netlify.app/)**

## Why it matters today

HTML5's form input types (`email`, `tel`, `date`, etc.) matter more today than when this course was first written, because they directly control what keyboard/picker mobile devices show — a `type="tel"` input pops up a numeric keypad; a plain `type="text"` doesn't. This is now a baseline mobile UX expectation, not a bonus feature.

## New HTML5 input types

```html
<input type="email" placeholder="you@example.com">
<input type="tel" placeholder="+1 555 123 4567">
<input type="number" min="1" max="10">
<input type="date">
<input type="time">
<input type="url" placeholder="https://example.com">
<input type="search">
<input type="range" min="0" max="100">
<input type="color">
```

Each one gets you free validation and, on mobile, the right on-screen keyboard.

## New form attributes

```html
<input type="text" required>
<input type="text" placeholder="Your name">
<input type="password" pattern=".{8,}" title="At least 8 characters">
<input type="text" autocomplete="name">
<input type="number" min="1" max="5" step="1">
```

| Attribute | Purpose |
|---|---|
| `required` | Field must be filled before submit |
| `placeholder` | Gray hint text (not a substitute for a `<label>`!) |
| `pattern` | A regex the value must match |
| `autocomplete` | Lets the browser suggest/autofill known values |
| `min` / `max` / `step` | Constrain numeric/date ranges |

> **Never use `placeholder` as a replacement for a `<label>`.** Placeholder text disappears once the user starts typing, and screen readers handle it inconsistently. Always pair a real `<label>` with every input.

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required>
```

## New form elements

```html
<!-- Suggestions dropdown tied to a text input -->
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>

<!-- Calculated output, e.g. driven by JS -->
<output name="result">0</output>

<!-- Task/upload progress -->
<progress value="70" max="100"></progress>

<!-- A gauge within a known range -->
<meter value="6" min="0" max="10"></meter>
```

## Hidden fields

```html
<input type="hidden" name="form_source" value="homepage-contact">
```

Hidden fields carry data the server needs but the user shouldn't see or edit — like which page a form was submitted from, or a CSRF token in real production apps.

## Native browser validation (a preview of JavaScript territory)

```html
<form>
  <input type="email" required>
  <button type="submit">Submit</button>
</form>
```

Try submitting this with an invalid email — the browser blocks it and shows a message, with zero JavaScript. This is the **Constraint Validation API** working automatically. In Session 16, we'll hook into it with JavaScript for custom validation messages and behavior.

## Where AI fits in

```
Write an accessible HTML5 contact form with name, email, phone, and
message fields — proper labels, the right input types, and required
validation.
```

Forms are a great AI use case for scaffolding — but always check: did it include real `<label for="">` pairs (not just placeholders)? Did it pick sensible input types? AI sometimes defaults to `type="text"` everywhere out of habit — catch that.

## Practical

See [`practical/`](./practical/) — build the Local Bites contact/reservation form.

## Exercises

See [`exercises/`](./exercises/).

# Session 2: HTML Basics

## What you'll learn

- The anatomy of an HTML tag/element
- `doctype` and why it matters
- Container vs standalone (void) tags
- Common HTML5 attributes
- Accessibility basics — starting from day one, not as an afterthought
- HTML5's role on mobile

## Why it matters today

The core mechanics here haven't changed — this is still exactly how HTML works. What *has* changed is that accessibility (making pages usable with screen readers, keyboards, etc.) used to be treated as a specialist add-on topic. Today it's expected baseline knowledge for any front-end developer, so we introduce it now rather than waiting.

## Anatomy of an HTML element

```
<p class="intro">Hello</p>
 │    │      │      │   └── closing tag
 │    │      │      └────── content
 │    │      └───────────── attribute value
 │    └──────────────────── attribute name
 └───────────────────────── opening tag / tag name
```

## Doctype

```html
<!DOCTYPE html>
```

This one line tells the browser "render this using modern HTML5 standards." Without it, older browsers can fall back into "quirks mode," which renders CSS unpredictably. Always include it, always as the very first line.

## Container tags vs standalone (void) tags

**Container tags** wrap content and need a closing tag:

```html
<p>I am a paragraph.</p>
<div>I am a container.</div>
```

**Standalone (void) tags** don't wrap anything and don't need a closing tag:

```html
<br>
<hr>
<img src="photo.jpg" alt="A description of the photo">
<input type="text">
```

## Common basic tags

| Tag | Purpose |
|---|---|
| `<h1>`–`<h6>` | Headings, largest to smallest |
| `<p>` | Paragraph |
| `<div>` | Generic block container |
| `<span>` | Generic inline container |
| `<a>` | Link |
| `<img>` | Image |
| `<ul>` / `<ol>` / `<li>` | Lists |

## Attributes worth knowing now

```html
<img src="cat.jpg" alt="A gray cat sleeping on a windowsill">
<a href="https://example.com" target="_blank" rel="noopener">Visit</a>
<div id="main" class="card highlighted"></div>
```

- `id` — a unique identifier, one per page
- `class` — a reusable label, can be shared across elements
- `alt` — describes an image for screen readers (and shows if the image fails to load) — **never skip this**
- `data-*` — custom attributes for your own JavaScript to hook into, e.g. `data-user-id="42"`

## Accessibility basics, starting now

Two habits to build from day one:

1. **Every `<img>` needs a meaningful `alt`.** If it's purely decorative, use `alt=""` (empty, not missing).
2. **Use real headings in order** (`<h1>` once per page, then `<h2>`, `<h3>`...) — screen reader users navigate by heading structure, so skipping levels or using headings for visual size only breaks that.

## HTML5 on mobile

HTML5 was designed with mobile in mind: it added semantic tags for cleaner structure on small screens, native form input types (Session 11) that trigger the right mobile keyboard (numeric, email, etc.), and works with the `viewport` meta tag you already saw in Session 1 to make pages scale properly.

## Where AI fits in

Ask your assistant:

```
Review this HTML snippet for accessibility issues:
<img src="logo.png">
<h3>Welcome</h3>
<h1>My Site</h1>
```

A good AI response will flag the missing `alt` and the heading order problem. This is a genuinely strong use of AI — accessibility review — because it's fast and catches things beginners often miss. Still, always verify with a real screen reader test or the browser's Accessibility tab in DevTools when it matters.

## Practical

See [`practical/`](./practical/) — you'll build a small structured page and check its accessibility.

## Exercises

See [`exercises/`](./exercises/).

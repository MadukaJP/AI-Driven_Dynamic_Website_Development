# Session 3: Formatting Text Using Tags

## What you'll learn

- Heading tags and hierarchy
- Text formatting tags (`<strong>`, `<em>`, `<mark>`, etc.)
- Monospaced font, preformatted text, block quotations
- Lists: ordered, unordered, description
- Changing background color and image

## Why it matters today

This session is mostly still-relevant fundamentals — the tags themselves haven't changed. Where we update things: preferring **semantic** tags (`<strong>`, `<em>`) over purely visual ones (`<b>`, `<i>`) where meaning matters, and previewing that background styling is really a CSS job (fully covered Session 6) rather than an HTML one.

## Headings

```html
<h1>Page Title (one per page)</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
```

Headings aren't for making text big — use CSS for that (Session 7). Headings are for structure; screen readers and search engines both rely on correct heading order.

## Text formatting tags

```html
<strong>This is important</strong>       <!-- bold, and semantically "important" -->
<em>This is emphasized</em>              <!-- italic, and semantically "emphasized" -->
<mark>This is highlighted</mark>
<small>This is fine print</small>
<del>This was removed</del>
<ins>This was inserted</ins>
<sub>H<sub>2</sub>O</sub>
<sup>x<sup>2</sup></sup>
```

> `<b>` and `<i>` still exist and still work (pure visual bold/italic with no semantic meaning) — use `<strong>`/`<em>` when the emphasis actually matters to the meaning of the sentence.

## Monospaced font, preformatted text, block quotes

```html
<code>const x = 5;</code>

<pre>
  This text keeps
      its   spacing
  and line breaks.
</pre>

<blockquote cite="https://example.com/source">
  The best way to predict the future is to invent it.
</blockquote>
```

## Lists

```html
<!-- Unordered -->
<ul>
  <li>Milk</li>
  <li>Eggs</li>
</ul>

<!-- Ordered -->
<ol>
  <li>Preheat oven</li>
  <li>Mix ingredients</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>Structures web page content</dd>
  <dt>CSS</dt>
  <dd>Styles web page content</dd>
</dl>
```

## Background color and image (a CSS preview)

```html
<body style="background-color: #f4f4f4;">
```

This works, but writing styles directly on tags like this gets messy fast and is generally avoided in real projects. Session 6 shows you the proper way — a separate CSS file — which is what we'll use from here on.

## Where AI fits in

Ask your assistant:

```
When should I use <strong> instead of <b>, and <em> instead of <i>?
```

This is a good AI use case — it's a well-documented, stable convention, so AI answers reliably here. Cross-check with [MDN's HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) if you want the authoritative source.

## Practical

See [`practical/`](./practical/).

## Exercises

See [`exercises/`](./exercises/).

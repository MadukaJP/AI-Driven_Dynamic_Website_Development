# Session 1: Web Foundations

## What you'll learn

- How the web actually works (browser, server, HTTP)
- The evolution of HTML — and why we don't use XHTML anymore
- What HTML, CSS, and JavaScript each do
- Why "jQuery" isn't the default answer anymore
- How to check if a feature is safe to use today

## Why it matters today

The original scheme for this course spent significant time on XHTML's strict syntax rules and "HTML 4 vs XHTML" debates. That war ended over a decade ago — HTML5 won, and browsers today don't enforce XHTML's stricter rules. We'll cover the history briefly (you'll hear it mentioned in older job specs and legacy codebases) and spend the rest of our time on how HTML, CSS, and JS are actually written and shipped today.

## How the web works, in one paragraph

Your browser (Chrome, Firefox, Edge) sends a request to a server. The server sends back files — HTML, CSS, JavaScript, images. The browser reads the HTML to build the page structure, applies CSS for how it looks, and runs JavaScript for how it behaves. That's it — that's the whole web, at its core.

```
Browser  →  request  →  Server
Browser  ←  HTML/CSS/JS/images  ←  Server
```

## The three languages, quickly

| Language | Job | Analogy |
|---|---|---|
| **HTML** | Structure & content | The skeleton of a body |
| **CSS** | Presentation & layout | The skin, clothes, styling |
| **JavaScript** | Behavior & interactivity | The muscles and nervous system |

## A brief, honest history of HTML

- **HTML 4** (1999) — the standard for years, but loose: browsers had to guess how to handle sloppy markup.
- **XHTML** (2000s) — an attempt to make HTML follow strict XML rules (every tag closed, everything lowercase, etc.). It was rigid, and most browsers didn't actually enforce it strictly, so it never gained the discipline it promised.
- **HTML5** (2014 as a formal spec, but "living standard" since) — the modern standard. Added semantic tags (`<header>`, `<nav>`, `<article>`), native audio/video, canvas, forms improvements, and dropped the strict XML baggage. This is what you're learning.

> You'll still see `XHTML`-style code (self-closing tags like `<br />`) in old codebases — it still works, just isn't required.

## Your first HTML page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, Web!</h1>
  <p>This is my first modern web page.</p>
</body>
</html>
```

Try it yourself: copy this into `snippets/hello.html`, then right-click it → **Open with Live Server** (or just double-click the file to open it in your browser).

## CSS in one line, JS in one line

```html
<style>
  h1 { color: teal; }
</style>

<script>
  console.log("Hello from JavaScript!");
</script>
```

Both can live inside the HTML file (like above) or in separate `.css` / `.js` files — which is what we'll do from Session 2 onward, because it keeps things organized as pages grow.

## Where jQuery fits (and doesn't, anymore)

jQuery (2006) was created to smooth over browser inconsistencies and make DOM manipulation shorter to write. Modern browsers have largely standardized, and vanilla JavaScript now does most of what jQuery offered — natively, with no extra download. We'll teach vanilla JS as the default and mention jQuery only where you'll still encounter it in legacy projects (Session 14).

```js
// jQuery (older style, still common in legacy code)
$('#title').text('Hello');

// Modern vanilla JS (what we'll use)
document.querySelector('#title').textContent = 'Hello';
```

## Checking what you can use: caniuse.com

Before using any new HTML/CSS/JS feature professionally, check [caniuse.com](https://caniuse.com) — search the feature name and see which browsers support it. This habit matters more than memorizing a list of "safe" features.

## Where AI fits in

Ask your AI assistant to scaffold a boilerplate HTML page for you — it's a great time-saver for the repetitive `<!DOCTYPE html>` / `<meta>` setup. Try:

```
Give me a minimal, valid HTML5 boilerplate with a viewport meta tag
and UTF-8 charset.
```

Compare what it gives you against the example above. Also try:

```
Explain the difference between HTML5 and XHTML in 3 sentences.
```

Notice if the AI's explanation matches what you just read — this is good practice for cross-checking AI output against a trusted source.

## Practical

Go to [`practical/`](./practical/) and build a simple "About Me" page using what you've learned.

## Exercises

Go to [`exercises/`](./exercises/) for tasks to complete on your own.

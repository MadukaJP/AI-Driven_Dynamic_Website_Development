# Session 5: Creating Hyperlinks and Anchors

## What you'll learn

- Hyperlinks: to pages, emails, and anchors
- Absolute vs relative paths
- `target` and `rel` attributes (and why `rel="noopener"` matters)
- SEO basics for links
- How links differ in modern single-page apps (SPAs) — a quick preview

## Why it matters today

Hyperlinks are unchanged in mechanics, but two things are new since the original scheme: security attributes like `rel="noopener noreferrer"` are now considered mandatory whenever you use `target="_blank"`, and it's worth knowing early that in modern JavaScript frameworks (React, Vue, etc.), "links" often don't cause a full page reload — they're handled by client-side routing. You won't build that yet, but you should know the term.

## Basic hyperlink

```html
<a href="https://example.com">Visit Example</a>
```

## Absolute vs relative paths

```html
<!-- Absolute: full URL, works from anywhere -->
<a href="https://example.com/about.html">About</a>

<!-- Relative: path from the current file's location -->
<a href="about.html">About (same folder)</a>
<a href="pages/about.html">About (subfolder)</a>
<a href="../index.html">Home (one folder up)</a>
```

Use relative paths for links within your own site — it means your whole site still works if you move it to a different domain.

## Linking to an email address

```html
<a href="mailto:hello@example.com">Email us</a>

<!-- With a pre-filled subject line -->
<a href="mailto:hello@example.com?subject=Website%20Inquiry">Email us</a>
```

## Anchors — linking within a page

```html
<!-- The target -->
<h2 id="contact">Contact</h2>

<!-- The link -->
<a href="#contact">Jump to Contact</a>
```

## Opening links in a new tab — safely

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External site
</a>
```

`target="_blank"` opens a new tab. Without `rel="noopener"`, the new page gets partial access to your original page via JavaScript (`window.opener`) — a real, documented security risk. Always pair them.

## SEO basics for links

- Use descriptive link text (`"Read our pricing guide"`) instead of `"click here"` — both users and search engines rely on link text to understand what's on the other end.
- Broken links hurt both user trust and search rankings — check them periodically.

## A preview: links in modern frameworks

In a plain HTML site (what you're building now), every `<a href="page.html">` triggers a full page reload from the server. In frameworks like React or Vue, a `<Link>` component intercepts the click and swaps content without reloading the page — this is called **client-side routing**, and it's why single-page apps feel instant. You don't need to build this yet — just recognize the term when you meet it later.

## Where AI fits in

```
I have a multi-page site with index.html in the root and about.html,
contact.html in a /pages folder. Write the relative link paths I'd need
in index.html to link to both.
```

Path logic is exactly the kind of thing AI is reliably good at — it's pure syntax/logic, not judgment. Still, test the links yourself; a typo in a relative path is a very common real bug.

## Practical

See [`practical/`](./practical/).

## Exercises

See [`exercises/`](./exercises/).

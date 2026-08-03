# Session 8: Displaying Graphics and CSS3 Animation

## What you'll learn

- Graphic formatting: sizing, padding, object-fit
- CSS3 transitions and `@keyframes` animation
- Respecting `prefers-reduced-motion`
- A quick look at inline SVG
- CSS on mobile devices

## Why it matters today

Animation fundamentals (transitions, keyframes) are unchanged. What's new and non-negotiable in professional work: **respecting motion preferences**. Some users get dizzy or nauseated from animation (vestibular disorders) and set a system-level "reduce motion" preference — modern CSS lets you detect and honor that, and skipping it is now considered a real accessibility miss, not a nice-to-have.

## Sizing and padding images

```css
img {
  max-width: 100%;   /* never overflow its container */
  height: auto;       /* preserve aspect ratio */
}

.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;  /* crop to fill without distortion */
  border-radius: 50%;
  padding: 4px;
  border: 2px solid #2563eb;
}
```

`object-fit: cover` is the modern fix for "my image looks squashed" — it crops instead of stretching.

## Transitions — smooth changes between states

```css
.button {
  background-color: #2563eb;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}
```

## Keyframe animations

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeIn 0.4s ease-out;
}
```

## Respecting `prefers-reduced-motion`

```css
.card {
  animation: fadeIn 0.4s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}
```

Always wrap non-essential animation in this media query. It's one media query, and it's the difference between a page that's pleasant and one that actively harms some users.

## A quick look at SVG

```html
<svg viewBox="0 0 100 100" width="60" height="60">
  <circle cx="50" cy="50" r="40" fill="#2563eb" />
</svg>
```

SVGs are vector graphics — they scale to any size with zero blur, unlike JPG/PNG. Icons on modern websites are usually SVG for exactly this reason.

## CSS on mobile

Everything in this session works the same on mobile, with one caveat: animations and transitions cost battery and can feel janky on lower-end devices. Keep animations short (under ~400ms) and prefer animating `transform`/`opacity` (cheap for the browser) over `width`/`height`/`top`/`left` (expensive, causes layout recalculation).

## Where AI fits in

```
Write a CSS fade-in-and-slide-up animation for a card element, and make
sure it respects prefers-reduced-motion.
```

A good response includes the reduced-motion media query without you having to ask separately — if it doesn't, that's worth noting as a gap and adding it yourself.

## Practical

See [`practical/`](./practical/).

## Exercises

See [`exercises/`](./exercises/).

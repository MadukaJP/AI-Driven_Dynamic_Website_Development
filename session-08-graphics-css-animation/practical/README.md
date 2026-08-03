# Practical: Animated Cards for Your Portfolio

## Steps

1. Wrap your "Skills" list items in `.card` divs (one per skill, or group them).
2. Add a `fadeIn` keyframe animation that plays when the page loads.
3. Add a `:hover` transition (box-shadow lift) on each card.
4. Add the `prefers-reduced-motion` media query to disable animation for
   users who've requested it.
5. Test: in Chrome DevTools, open the Rendering tab (Ctrl+Shift+P →
   "Show Rendering") and enable "Emulate CSS media feature
   prefers-reduced-motion: reduce" — confirm your animation turns off.
6. Add your profile photo as an `.avatar` with `object-fit: cover`.

## Commit

```bash
git add .
git commit -m "Session 08: animated cards + reduced motion support"
git push
```

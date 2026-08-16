# Session 15 Exercises

## Exercise 1: == vs ===

Predict the output of each line, then run it to check:
```js
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(null === undefined);
```

## Exercise 2: Refactor to .map()

Rewrite this for loop using `.map()`:
```js
const names = ["alex", "sam", "jo"];
const capitalized = [];
for (let i = 0; i < names.length; i++) {
  capitalized.push(names[i].charAt(0).toUpperCase() + names[i].slice(1));
}
```

## Exercise 3: Write a regex

Write a regex that matches a valid 5-digit US zip code, and test it
against `"90210"` and `"902"`.

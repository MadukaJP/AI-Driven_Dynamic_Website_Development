# Session 15: JavaScript Control Flow — Operators, Conditionals, Loops, Arrays

## What you'll learn

- Operators (arithmetic, comparison, logical) — including `===` vs `==`
- Decision-making: `if`/`else`, `switch`, and the ternary operator
- Loops: `for`, `while`, and modern array iteration (`.forEach`, `.map`, `.filter`)
- Arrays: single and multi-dimensional
- Basic regular expressions
- `break` and `continue`

## Why it matters today

The mechanics of loops and conditionals are unchanged — but modern JavaScript strongly favors **array methods** (`.map()`, `.filter()`, `.forEach()`) over manual `for` loops for working with lists of data, because they're shorter, harder to get wrong, and read closer to what you actually mean ("filter this list", not "loop with an index and push to a new array if..."). We teach both, but you'll reach for array methods most often in real code.

## What you'll build

https://local-bites.netlify.app/

## Operators

```js
// Arithmetic
let total = 10 + 5;   // 15
let remainder = 10 % 3; // 1

// Comparison — always use === and !== (strict), not == and !=
5 === 5     // true
5 === "5"   // false — different types, no coercion
5 == "5"    // true  — AVOID this loose comparison, it causes subtle bugs

// Logical
true && false   // false (AND)
true || false   // true  (OR)
!true           // false (NOT)
```

**Always use `===` and `!==`.** The loose `==`/`!=` operators try to convert types before comparing, which causes bugs that are hard to track down. This is one of the most consistently-cited JavaScript gotchas.

## Conditionals

```js
let temp = 72;

if (temp > 80) {
  console.log("Hot");
} else if (temp > 60) {
  console.log("Mild");
} else {
  console.log("Cold");
}

// Ternary — a compact if/else for simple cases
let status = temp > 60 ? "Mild or warmer" : "Cold";

// switch — for many discrete cases
switch (temp) {
  case 72:
    console.log("Room temperature");
    break;
  default:
    console.log("Some other temperature");
}
```

## Loops

```js
// Classic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) break;      // stop the loop entirely
  if (i % 2 === 0) continue; // skip to next iteration
  console.log(i);
}
```

## Arrays

```js
// Single-dimensional
const dishes = ["Toast", "Latte", "Salmon"];
console.log(dishes[0]);        // "Toast"
console.log(dishes.length);    // 3

// Multi-dimensional
const menu = [
  ["Toast", 9],
  ["Latte", 5],
  ["Salmon", 18]
];
console.log(menu[2][0]); // "Salmon"
```

## Modern array iteration — the preferred approach

```js
const prices = [9, 5, 18];

// forEach — just do something with each item
prices.forEach((price) => console.log(`$${price}`));

// map — transform each item into a new array
const withTax = prices.map((price) => price * 1.08);

// filter — keep only items matching a condition
const affordable = prices.filter((price) => price < 15);

// Compare to the old-style for loop doing the same as filter:
const affordableOldStyle = [];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 15) {
    affordableOldStyle.push(prices[i]);
  }
}
```

Both work — but `.filter()` says exactly what you mean in one line, which is why it's now the default choice in professional code.

## Basic regular expressions

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailPattern.test("hello@example.com"); // true
emailPattern.test("not-an-email");       // false
```

Regex is a mini-language for matching text patterns — we'll use this again for form validation in Session 16. You don't need to master regex syntax by heart; even experienced developers look it up or ask AI for common patterns.

## Where AI fits in

```
Write a regular expression that validates a US phone number in the
format (123) 456-7890, and explain what each part of the regex means.
```

Regex is a widely-cited strong AI use case, precisely because it's notoriously hard for humans to write and read, but has clear correct/incorrect answers you can test. Always test the regex against several real examples (valid and invalid) yourself — don't just trust the explanation.

## Practical

See [`practical/`](./practical/) — build a menu filter for the capstone.

## Exercises

See [`exercises/`](./exercises/).

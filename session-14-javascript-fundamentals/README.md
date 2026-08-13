# Session 14: JavaScript Fundamentals

## What you'll learn

- What JavaScript actually does, client-side vs server-side
- Modern variable declarations: `let` and `const` (and why we avoid `var`)
- Data types and template literals
- The `console` for output and debugging
- Events and event handling — the modern way
- Why jQuery is legacy today, and what replaced it

## Why it matters today

This is the session with the biggest rewrite. The original scheme centers on `var`, jQuery, and `document.write()`-style output — all of which are considered outdated or actively discouraged in professional code today. Modern JavaScript (often called "ES6+", referring to the 2015 language update and everything since) gives you cleaner, safer tools for everything this session used to teach with older syntax.

## What you'll build

https://local-bites.netlify.app/

## Client-side vs server-side JavaScript

- **Client-side**: runs in the user's browser — what we're doing in this course. Manipulates the page, responds to clicks, validates forms.
- **Server-side**: runs on a server (commonly via Node.js, which uses the same JavaScript language). Handles databases, authentication, APIs. We touch this conceptually but don't build a server in this course.

## Linking JavaScript to your page

```html
<script src="js/main.js" defer></script>
```

Put this just before `</body>`, or in `<head>` with the `defer` attribute (which we use here) — `defer` tells the browser to run the script only after the HTML has finished parsing, avoiding a common bug where your script tries to grab an element that doesn't exist yet.

## Variables: `let` and `const` (not `var`)

```js
let age = 25;        // use let for values that will change
const name = "Alex"; // use const for values that won't be reassigned

age = 26;   // fine
// name = "Sam";  // ERROR — const can't be reassigned
```

`var` still works, but has confusing scoping rules (it "leaks" outside blocks like `if` and `for`) that `let`/`const` fixed. **Use `let` and `const` exclusively in this course and in modern code generally.**

## Data types

```js
let count = 10;             // number
let price = 9.99;           // number (JS has one number type)
let name = "Alex";           // string
let isOpen = true;           // boolean
let nothing = null;          // intentionally empty
let notSet;                  // undefined — declared but not assigned
let dish = { name: "Toast", price: 9 };  // object
let toppings = ["avocado", "egg"];        // array
```

## Template literals (not string concatenation)

```js
let name = "Alex";
let age = 25;

// Old way (still works, but avoid it)
console.log("Hello, " + name + "! You are " + age + " years old.");

// Modern way — backticks and ${}
console.log(`Hello, ${name}! You are ${age} years old.`);
```

Template literals also support multi-line strings naturally:

```js
let message = `
  Dear ${name},
  Your order is confirmed.
`;
```

## Displaying information: use `console.log`, not `document.write`

```js
console.log("Debug info here"); // shows in DevTools console, doesn't touch the page

// Old, discouraged approach:
// document.write("Hello"); — overwrites the whole page if called after load, breaks things
```

Open DevTools (`F12`) → Console tab to see `console.log()` output. This is where you'll debug throughout the rest of the course.

## Selecting elements: modern DOM methods

```js
const heading = document.querySelector('h1');       // first match
const allCards = document.querySelectorAll('.card'); // all matches, a NodeList
const byId = document.getElementById('main-nav');    // still fine, common for single IDs
```

## Events and event handling

```js
const button = document.querySelector('#subscribe-btn');

button.addEventListener('click', function () {
  console.log('Button clicked!');
});

// Arrow function version (more common in modern code)
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

## Why jQuery isn't the default anymore

```js
// jQuery (legacy — you'll see this in older codebases)
$('#btn').on('click', function () {
  $('.box').addClass('active');
});

// Modern vanilla JS — same result, no library needed
document.querySelector('#btn').addEventListener('click', () => {
  document.querySelector('.box').classList.add('active');
});
```

jQuery existed to smooth over inconsistent browser support in the early 2010s. Browsers have since standardized, so vanilla JS now covers what jQuery used to be needed for — with no extra file to download. You'll still meet jQuery in legacy projects, which is why it's worth recognizing, but write new code in vanilla JS (or a modern framework, beyond this course's scope).

## Where AI fits in

```
Convert this jQuery code to modern vanilla JavaScript:
$('#form').on('submit', function(e) { e.preventDefault(); ... });
```

This is a genuinely excellent AI use case — jQuery-to-vanilla conversion is mechanical and well-documented, so AI is reliable here. Still run both versions and confirm they behave identically before trusting the conversion.

## Practical

See [`practical/`](./practical/) — add your first interactive JS to the capstone.

## Exercises

See [`exercises/`](./exercises/).

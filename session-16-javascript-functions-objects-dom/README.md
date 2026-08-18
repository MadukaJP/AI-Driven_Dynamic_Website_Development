# Session 16: Functions, Objects, the DOM, and Async JavaScript

## What you'll learn

- Functions, parameters, and return values — including arrow functions
- Objects and classes
- The DOM and browser objects
- JSON — reading and writing it
- `fetch` and `async`/`await` — how modern JS talks to servers/APIs
- Hooking into native form validation

## Why it matters today

This session gets the second-biggest rewrite. The original scheme's callback-heavy approach to asynchronous work (and jQuery's `$.ajax`) has been replaced almost entirely by the `fetch` API combined with `async`/`await` — this is how virtually all modern JavaScript talks to servers and APIs, and it's essential groundwork for Session 18's AI API integration.

## What you'll build

https://local-bites.netlify.app/

## Functions

```js
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function (common in modern code)
const greetArrow = (name) => `Hello, ${name}!`;

// Default parameters
function order(dish, quantity = 1) {
  return `${quantity}x ${dish}`;
}
order("Toast");      // "1x Toast"
order("Toast", 3);   // "3x Toast"
```

## Objects

```js
const dish = {
  name: "Avocado Toast",
  price: 9,
  isVegan: true,
  describe() {
    return `${this.name} — $${this.price}`;
  }
};

console.log(dish.name);        // "Avocado Toast"
console.log(dish.describe());  // "Avocado Toast — $9"
```

## Classes (modern object blueprints)

```js
class Dish {
  #cost; // private field — only accessible inside the class

  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.#cost = price * 0.4; // e.g. ingredient cost, kept private
  }

  describe() {
    return `${this.name} — $${this.price}`;
  }
}

const toast = new Dish("Avocado Toast", 9);
console.log(toast.describe());
// console.log(toast.#cost); // ERROR — private fields aren't accessible outside the class
```

## The DOM and browser objects

```js
document.title;               // current page title
window.location.href;         // current URL
document.querySelector('h1'); // the DOM element itself

// Changing content
const heading = document.querySelector('h1');
heading.textContent = "Updated Title";

// Creating and inserting elements
const newCard = document.createElement('div');
newCard.className = 'card';
newCard.textContent = 'New dish!';
document.querySelector('.featured-dishes').appendChild(newCard);
```

## JSON

```js
const dish = { name: "Toast", price: 9 };

// Object → JSON string (e.g. to send to a server, or save to storage)
const json = JSON.stringify(dish);
console.log(json); // '{"name":"Toast","price":9}'

// JSON string → object (e.g. reading data back)
const parsed = JSON.parse(json);
console.log(parsed.name); // "Toast"
```

## `fetch` and `async`/`await` — the modern way to call APIs

```js
async function getMenu() {
  try {
    const response = await fetch('https://api.example.com/menu');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to load menu:', error);
  }
}

getMenu();
```

`fetch` replaces jQuery's `$.ajax`. `async`/`await` lets asynchronous code (things that take time, like a network request) read top-to-bottom like normal code, instead of nesting callbacks inside callbacks ("callback hell") — a real, well-documented pain point of older JavaScript that `async`/`await` solves cleanly.

## Hooking into form validation with JavaScript

```js
const form = document.querySelector('#reservation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email');

  if (!email.checkValidity()) {
    email.reportValidity(); // shows the browser's native error message
    return;
  }

  console.log('Form is valid, submitting:', email.value);
  // form.submit(); or send via fetch to a server
});
```

`checkValidity()` and `reportValidity()` hook directly into the native HTML5 validation from Session 11 — you get built-in validation plus full control over what happens next.

## Where AI fits in

```
Write an async function using fetch that gets JSON from an API, handles
errors with try/catch, and logs the result.
```

`fetch`/`async`/`await` boilerplate is a strong, low-risk AI use case. What AI is *not* reliable for: knowing your specific API's actual response shape — always console.log the real response and adjust your code to match, rather than trusting an assumed structure.

## Practical

See [`practical/`](./practical/) — wire up real validation and dynamic content on the capstone.

## Exercises

See [`exercises/`](./exercises/).

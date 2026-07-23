# JavaScript Essentials Cheatsheet

## Variables
```js
let x = 5;      // reassignable
const y = 10;   // not reassignable
// avoid var
```

## Comparison
```js
5 === 5    // true, use this
5 == "5"   // true but AVOID — loose comparison
```

## Template literals
```js
`Hello, ${name}!`
```

## Functions
```js
function add(a, b) { return a + b; }
const add2 = (a, b) => a + b;
```

## Array methods
```js
arr.forEach((x) => console.log(x));
arr.map((x) => x * 2);
arr.filter((x) => x > 10);
```

## DOM selection
```js
document.querySelector('.class');
document.querySelectorAll('.class'); // NodeList
document.getElementById('id');
```

## Events
```js
element.addEventListener('click', () => { ... });
```

## Fetch + async/await
```js
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## Storage
```js
localStorage.setItem('key', JSON.stringify(value));
const value = JSON.parse(localStorage.getItem('key') || 'null');
```

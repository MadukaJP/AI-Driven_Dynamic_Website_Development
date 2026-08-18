# Session 16 Exercises

## Exercise 1: Write a class

Create a `Reservation` class with `name`, `partySize`, and `date`
properties, and a `summary()` method returning a formatted string.

## Exercise 2: Fetch and display

Using `fetch('https://jsonplaceholder.typicode.com/users/1')`, log the
returned user's `name` and `email` to the console using async/await.

## Exercise 3: Fix the callback mess

Rewrite this using async/await:
```js
function getData(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}
```

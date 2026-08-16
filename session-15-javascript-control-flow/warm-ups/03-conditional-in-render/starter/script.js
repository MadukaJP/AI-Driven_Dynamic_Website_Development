// ===================================================
// WARM-UP 3: Add a Condition
// ===================================================
// Same .map().join() pattern from Warm-up 2, but this time you
// decide something about each item WHILE building its HTML —
// exactly what you'll do in the to-do list to show a task as
// "completed" or not.

const numbers = [5, -3, 0, 12, -8];
const list = document.querySelector('#number-list');

// STEP 1: Use .map() again, but this time the arrow function needs
// a full body (curly braces), not just a one-line return, because
// you need a few lines of logic before you return the HTML string.
//
// Inside the map callback, for each `num`:
//   - declare a variable: let label;
//   - if num > 0, set label to "positive"
//   - else if num < 0, set label to "negative"
//   - else, set label to "zero"
//   - return `<li class="${label}">${num} is ${label}</li>`
//
// Then .join('') the result and set it as list.innerHTML, same as
// before.

// list.innerHTML = numbers.map((num) => {
//   let label;
//   if (num > 0) {
//     label = 'positive';
//   } else if (num < 0) {
//     label = 'negative';
//   } else {
//     label = 'zero';
//   }
//   return `<li class="${label}">${num} is ${label}</li>`;
// }).join('');

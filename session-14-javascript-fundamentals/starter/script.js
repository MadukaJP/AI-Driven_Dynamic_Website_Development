// Before you finish: check styles.css — there's one small CSS gap
// in there too (a shape that should be a circle). Fix it once your
// JS is working, so the finished ring actually looks right.

// ===================================================
// MOOD RING — build this together in class
// ===================================================
// The goal: click a button, and the ring changes color
// while a matching mood word appears on screen.

// STEP 1: Create an array of mood objects.
// Each one needs a `color` (a hex code) and a `mood` (a word or phrase).
// Add at least 6 so it feels random when you click repeatedly.
//
// Example shape:
// { color: "#ef4444", mood: "Fired up" }

const moods = [
  // TODO: add your mood objects here
];


// STEP 2: Select the elements you'll need from the page.
// You'll want: the button, the ring div, and the mood text paragraph.
// Hint: document.querySelector('#id-goes-here')

// const revealBtn = ...
// const ring = ...
// const moodText = ...


// STEP 3: Write a function called getRandomMood() that returns
// one random object from the `moods` array.
// Hint: Math.floor(Math.random() * moods.length) gives a random
// index between 0 and the array's length.

function getRandomMood() {
  // TODO
}


// STEP 4: Add a click listener to the button. When clicked, it should:
//   - call getRandomMood() to get a mood object
//   - set the ring's background color to that mood's color
//     (Hint: ring.style.backgroundColor = ...)
//   - set the mood text to something like "You're feeling: Fired up"
//     (Hint: use a template literal)

// revealBtn.addEventListener('click', () => {
//   ...
// });

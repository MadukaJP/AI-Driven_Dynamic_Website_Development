// ===================================================
// WARM-UP 2: Render a List with .map() — the better way
// ===================================================
// Warm-up 1 used forEach + += to build the list one item at a
// time, touching the page on every loop turn. This version builds
// the WHOLE list as one string first, then updates the page ONCE.
// This is the pattern real projects use — including the to-do
// list you're about to build.

const animals = ["Dog", "Cat", "Rabbit", "Fox"];
const list = document.querySelector('#animal-list');

// STEP 1: Use .map() to turn the `animals` array into an array of
// HTML strings — one <li>...</li> per animal.
// Hint: animals.map((animal) => `<li>${animal}</li>`)
// This gives you back an ARRAY of strings, like:
// ["<li>Dog</li>", "<li>Cat</li>", ...]

// STEP 2: Chain .join('') onto the end of your .map() call to
// glue that array of strings into ONE single string.

// STEP 3: Set list.innerHTML to that single string — one DOM
// update instead of four.

// list.innerHTML = animals.map((animal) => `<li>${animal}</li>`).join('');

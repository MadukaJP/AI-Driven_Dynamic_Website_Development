// ===================================================
// WARM-UP 4: Filter Before You Show
// ===================================================
// Sometimes you don't want to render EVERY item — just some of
// them. .filter() trims an array down to only the items that
// pass a test, BEFORE you render anything.

const words = ["cat", "elephant", "dog", "giraffe", "ant", "rhinoceros"];
const list = document.querySelector('#word-list');

// STEP 1: Use .filter() to create a new array containing only the
// words with MORE than 4 letters.
// Hint: words.filter((word) => word.length > 4)

// const longWords = ...


// STEP 2: Now do the same .map().join() render pattern from
// Warm-up 2, but on `longWords` instead of the original array.

// list.innerHTML = longWords.map((word) => `<li>${word}</li>`).join('');

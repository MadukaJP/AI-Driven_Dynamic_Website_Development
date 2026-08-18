// ===================================================
// WARM-UP 3: Handling a Failed Request
// ===================================================
// APIs fail — a typo'd username, no internet, a server hiccup.
// Without handling that, your page can silently break or show a
// blank screen. try/catch lets you catch the failure and show a
// friendly message instead.

const fetchBtn = document.querySelector('#fetch-btn');
const resultText = document.querySelector('#result');

// STEP 1: Write an async function called getData() that:
//   - wraps the fetch in a try block
//   - fetches this URL, which doesn't exist and WILL fail:
//     'https://api.github.com/this-endpoint-does-not-exist-12345'
//   - if it succeeds, show the result (it won't, but write it anyway)
//   - in the catch block, set resultText.textContent to a friendly
//     message like "Something went wrong. Please try again."
//     and console.error(error) so you can still see the real error
//     in DevTools while debugging




// STEP 2: Add a click listener on fetchBtn that calls getData().

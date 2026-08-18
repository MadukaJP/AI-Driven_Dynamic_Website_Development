// ===================================================
// WARM-UP 4: Render Fetched Data
// ===================================================
// This is the last piece before GitHub Search: fetch data, then
// take ONE piece of it and put it directly onto the page.
//
// API used (no key needed): a random dog photo URL.
// https://dog.ceo/api/breeds/image/random

const fetchBtn = document.querySelector('#fetch-btn');
const dogPhoto = document.querySelector('#dog-photo');

// STEP 1: Write an async function called getDogPhoto() that:
//   - fetches https://dog.ceo/api/breeds/image/random
//   - awaits response.json()
//   - the image URL is at data.message — set dogPhoto.src to it
//   - unhide the image: dogPhoto.hidden = false;



// STEP 2: Add a click listener on fetchBtn that calls getDogPhoto().

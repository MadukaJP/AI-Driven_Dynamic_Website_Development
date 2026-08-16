// ===================================================
// WARM-UP 5: One Click, Many Boxes (Event Delegation)
// ===================================================
// You could add a separate click listener to every single box —
// but there's a better way: add ONE listener to their shared
// parent container, and figure out which box was actually clicked
// using the click event itself. This is called "event delegation,"
// and it's exactly how you'll handle checking off and deleting
// tasks in the to-do list — one listener on the whole list, not
// one per task.

const container = document.querySelector('#box-list');

// STEP 1: Add a click listener to `container` (not to the boxes
// individually). The listener receives an event object — let's
// call it `e`. Inside `e.target` is the EXACT element that was
// clicked.

// STEP 2: Check whether the clicked element is actually a box
// (since clicking the container's empty space would also count).
// Hint: e.target.classList.contains('box')

// STEP 3: If it is a box, change something about it — e.g. its
// background color, and update its text to show it was clicked.
// You can read the box's name back out with e.target.dataset.name
// (this reads the data-name="..." attribute from the HTML).

// container.addEventListener('click', (e) => {
//   if (e.target.classList.contains('box')) {
//     e.target.style.backgroundColor = '#22c55e';
//     e.target.textContent = `${e.target.dataset.name} clicked!`;
//   }
// });

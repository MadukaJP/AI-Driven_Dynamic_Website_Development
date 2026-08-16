// ===================================================
// TO-DO LIST — build this together in class
// ===================================================
// By now you've done all 5 warm-ups in the warm-ups/ folder.
// This project is just those 5 techniques, assembled:
//   - Warm-up 2 (map + join)  -> builds the list
//   - Warm-up 3 (condition inside map) -> shows completed vs not
//   - Warm-up 4 (filter)      -> counts remaining tasks
//   - Warm-up 5 (delegation)  -> handles checking off / deleting
//
// There is only ONE custom function in this whole project: render().
// Everything else is the same patterns you just practiced.
//
// Before you finish: check styles.css — there's a CSS gap in
// .task-item (it should lay the checkbox, text, and delete button
// out in a row). Fix it once your JS is working.


// STEP 1: Create an array to hold your tasks.
// Each task is an object: { id: 1, text: "Walk the dog", completed: false }

let tasks = [];
let nextId = 1;


// STEP 2: Select the elements you'll need.

// const input = document.querySelector('#task-input');
// const addBtn = document.querySelector('#add-btn');
// const list = document.querySelector('#task-list');
// const emptyMessage = document.querySelector('#empty-message');
// const remainingCount = document.querySelector('#remaining-count');


// STEP 3: Write render(). This is exactly Warm-up 2 + Warm-up 3,
// applied to `tasks` instead of a plain array:
//
//   1. Build the list HTML with .map().join(), same as Warm-up 2.
//      For each task, decide its class and checkbox state based on
//      task.completed — same idea as Warm-up 3's if/else, just
//      using a ternary since it's a simpler yes/no this time:
//
//      list.innerHTML = tasks.map((task) => `
//        <li class="task-item ${task.completed ? 'completed' : ''}">
//          <input type="checkbox" class="toggle-checkbox"
//                 data-id="${task.id}" ${task.completed ? 'checked' : ''}>
//          <span class="task-text">${task.text}</span>
//          <button class="delete-btn" data-id="${task.id}">✕</button>
//        </li>
//      `).join('');
//
//   2. Show/hide the empty message based on tasks.length.
//
//   3. Count remaining tasks — this is Warm-up 4's .filter(), just
//      counting instead of rendering:
//      const remaining = tasks.filter((task) => !task.completed).length;
//      remainingCount.textContent = `${remaining} tasks remaining`;

function render() {
  // TODO
}


// STEP 4: Add a click listener on addBtn (write the logic directly
// in the callback, same as Mood Ring):
//   - read and trim the input value
//   - if empty, do nothing (return)
//   - otherwise push a new task object using nextId, then increment it
//   - clear the input
//   - call render()

// addBtn.addEventListener('click', () => {
//   ...
// });


// STEP 5: This is exactly Warm-up 5, applied to the task list.
// Add ONE click listener on `list`. Inside it:
//   - read the id: Number(e.target.dataset.id)
//   - if e.target has the class "toggle-checkbox": loop through
//     `tasks` with .forEach() and flip `completed` for the matching id
//   - if e.target has the class "delete-btn": reassign `tasks` to
//     tasks.filter() with everything EXCEPT the matching id
//   - call render() either way

// list.addEventListener('click', (e) => {
//   ...
// });


// STEP 6: Call render() once at the bottom so the page starts out
// correctly.


// ===================================================
// BONUS (only if there's time left): Filter buttons
// ===================================================
// Once the above is working end to end, see bonus-filters.md in
// this folder for how to add All / Active / Completed filter
// buttons on top of what you just built. It reuses everything
// you already have — nothing new to learn, just one more piece
// assembled on top.

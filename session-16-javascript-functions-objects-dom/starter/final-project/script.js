// ===================================================
// GITHUB PROFILE SEARCH — final project
// ===================================================
// You've just done 4 warm-ups covering everything this needs:
//   - Warm-up 1: a function with a parameter + return value
//   - Warm-up 2: fetch + async/await, logging the result
//   - Warm-up 3: try/catch for when a request fails
//   - Warm-up 4: rendering a piece of fetched data to the page
//
// This project combines all four into one real, working app: type
// a GitHub username, fetch their public profile, and display their
// avatar, name, bio, followers, and repo count.
//
// API used (no key needed): https://api.github.com/users/USERNAME
//
// Before you finish: check styles.css — there's a CSS gap in
// .profile-card (it should lay the avatar and info out side by
// side). Fix it once your JS is working.


// STEP 1: Select the elements you'll need.

// const input = document.querySelector('#username-input');
// const searchBtn = document.querySelector('#search-btn');
// const status = document.querySelector('#status');
// const profileCard = document.querySelector('#profile-card');
// const avatar = document.querySelector('#avatar');
// const nameEl = document.querySelector('#name');
// const bioEl = document.querySelector('#bio');
// const followersEl = document.querySelector('#followers');
// const reposEl = document.querySelector('#repos');


// STEP 2: Write an async function getProfile(username) that:
//   1. Shows a "Searching..." message in `status`, and hides the
//      profile card while loading.
//   2. Uses fetch() to call `https://api.github.com/users/${username}`
//   3. Awaits response.json() to get the data.
//   4. If response.ok is false (user not found), throw a new Error
//      with a helpful message.
//   5. Otherwise, fill in the profile card:
//      - avatar.src = data.avatar_url
//      - nameEl.textContent = data.name || data.login
//        (some users don't set a display name, so fall back to their username)
//      - bioEl.textContent = data.bio || "No bio available."
//      - followersEl.textContent = `${data.followers} followers`
//      - reposEl.textContent = `${data.public_repos} public repos`
//      - unhide the profile card, clear the status message
//   6. Wrap the whole thing in a try/catch — in the catch block,
//      hide the profile card and show an error message in `status`.

async function getProfile(username) {
  // TODO
}


// STEP 3: Wire up the search button (and pressing Enter in the input)
// to call getProfile() with the trimmed input value — but only if
// it's not empty.

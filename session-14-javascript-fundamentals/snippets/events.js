// Selecting elements
const button = document.querySelector('#subscribe-btn');
const allCards = document.querySelectorAll('.card');

// Event listener with arrow function
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Looping over a NodeList
allCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    console.log('Hovering a card');
  });
});

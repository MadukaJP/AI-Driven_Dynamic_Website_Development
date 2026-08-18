const heading = document.querySelector('h1');
heading.textContent = "Updated Title";

const newCard = document.createElement('div');
newCard.className = 'card';
newCard.textContent = 'New dish!';
document.querySelector('.featured-dishes').appendChild(newCard);

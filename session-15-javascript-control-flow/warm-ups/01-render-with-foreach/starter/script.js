
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
const list = document.querySelector('#fruit-list');

fruits.forEach((fruit) => {
  list.innerHTML += `<li>${fruit}</li>`;
});

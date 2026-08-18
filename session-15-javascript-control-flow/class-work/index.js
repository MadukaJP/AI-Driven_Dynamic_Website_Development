
let submitButton = document.getElementById("submit-btn");
let nameInput = document.getElementById('name');
let message = document.getElementById('message');

function greetUser () {
    message.textContent = 'Good morning,'+ ' ' + nameInput.value;
    nameInput.value = '';
}

submitButton.addEventListener("click", greetUser);

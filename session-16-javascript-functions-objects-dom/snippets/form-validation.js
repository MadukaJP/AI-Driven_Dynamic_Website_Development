const form = document.querySelector('#reservation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email');

  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }

  console.log('Form is valid, submitting:', email.value);
});

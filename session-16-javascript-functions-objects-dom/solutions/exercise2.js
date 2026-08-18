async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user.name, user.email);
  } catch (error) {
    console.error(error);
  }
}

getUser();

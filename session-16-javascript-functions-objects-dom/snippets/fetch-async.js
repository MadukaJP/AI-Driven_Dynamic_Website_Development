async function getMenu() {
  try {
    const response = await fetch('https://api.example.com/menu');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to load menu:', error);
  }
}

getMenu();

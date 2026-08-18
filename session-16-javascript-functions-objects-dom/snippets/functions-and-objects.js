function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = (name) => `Hello, ${name}!`;

function order(dish, quantity = 1) {
  return `${quantity}x ${dish}`;
}

const dish = {
  name: "Avocado Toast",
  price: 9,
  isVegan: true,
  describe() {
    return `${this.name} — $${this.price}`;
  }
};

console.log(greet("Alex"));
console.log(order("Toast"));
console.log(order("Toast", 3));
console.log(dish.describe());

class Dish {
  #cost;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.#cost = price * 0.4;
  }

  describe() {
    return `${this.name} — $${this.price}`;
  }
}

const toast = new Dish("Avocado Toast", 9);
console.log(toast.describe());

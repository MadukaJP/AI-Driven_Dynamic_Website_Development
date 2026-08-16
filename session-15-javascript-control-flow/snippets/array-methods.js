const prices = [9, 5, 18, 12, 6];

// forEach
prices.forEach((price) => console.log(`$${price}`));

// map — transform
const withTax = prices.map((price) => Math.round(price * 1.08 * 100) / 100);
console.log(withTax);

// filter — select matching items
const affordable = prices.filter((price) => price < 15);
console.log(affordable);

// Compare: old-style for loop doing the same as filter
const affordableOldStyle = [];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 15) {
    affordableOldStyle.push(prices[i]);
  }
}
console.log(affordableOldStyle);

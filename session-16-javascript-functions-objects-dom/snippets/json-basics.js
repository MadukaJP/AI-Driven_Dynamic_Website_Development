const dish = { name: "Toast", price: 9 };

const json = JSON.stringify(dish);
console.log(json);

const parsed = JSON.parse(json);
console.log(parsed.name);

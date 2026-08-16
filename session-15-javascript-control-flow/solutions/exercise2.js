const names = ["alex", "sam", "jo"];
const capitalized = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized);

const zipPattern = /^\d{5}$/;
console.log(zipPattern.test("90210")); // true
console.log(zipPattern.test("902"));   // false

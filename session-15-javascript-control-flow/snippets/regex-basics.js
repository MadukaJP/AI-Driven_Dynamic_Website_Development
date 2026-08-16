const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("hello@example.com")); // true
console.log(emailPattern.test("not-an-email"));       // false

const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("123-456-7890"));    // false

let temp = 72;

if (temp > 80) {
  console.log("Hot");
} else if (temp > 60) {
  console.log("Mild");
} else {
  console.log("Cold");
}

let status = temp > 60 ? "Mild or warmer" : "Cold";
console.log(status);

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
